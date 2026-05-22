#!/usr/bin/env python3
"""Migrate a WordPress WXR export to Astro content collections.

Usage:
    python3 scripts/migrate-wp.py <path-to-wxr.xml> [content-dir]

Defaults assume the festivaladar WXR layout (Polylang for i18n, post + page
content types). The script is stdlib-only.
"""

from __future__ import annotations

import json
import os
import re
import sys
import xml.etree.ElementTree as ET
from collections import defaultdict, Counter
from email.utils import parsedate_to_datetime
from urllib.parse import urlparse

NS = {
    "wp": "http://wordpress.org/export/1.2/",
    "content": "http://purl.org/rss/1.0/modules/content/",
    "dc": "http://purl.org/dc/elements/1.1/",
    "excerpt": "http://wordpress.org/export/1.2/excerpt/",
}

ALLOWED_TYPES = {"post", "page"}
SKIP_TYPES = {
    "attachment",
    "nav_menu_item",
    "custom_css",
    "wp_global_styles",
    "wp_navigation",
    "wpcf7_contact_form",
}

LANGS = {"es", "en", "ast"}
DEFAULT_LANG = "es"
CDN_HOST = "creartbox-media-cdn.b-cdn.net"

FILENAME_SAFE = re.compile(r"[^a-z0-9\-_]")
IMG_SRC_RE = re.compile(r'<img[^>]+src=["\']([^"\']+)["\']', re.IGNORECASE)


def q(elem, path):
    """Find a child element by namespaced path and return its text or ''."""
    if elem is None:
        return ""
    found = elem.find(path, NS)
    if found is None or found.text is None:
        return ""
    return found.text


def parse_postmeta(item):
    out = []
    for m in item.findall("wp:postmeta", NS):
        k = q(m, "wp:meta_key")
        v = q(m, "wp:meta_value")
        out.append((k, v))
    return out


def parse_pubdate(rfc822):
    if not rfc822:
        return ""
    try:
        dt = parsedate_to_datetime(rfc822)
        if dt.tzinfo is None:
            return dt.strftime("%Y-%m-%dT%H:%M:%SZ")
        return dt.astimezone().strftime("%Y-%m-%dT%H:%M:%S%z")
    except Exception:
        return rfc822


def parse_wp_date(s):
    """Parse '2025-08-17 19:30:36' style WP dates into ISO 8601 UTC."""
    if not s or s.startswith("0000-"):
        return ""
    s = s.strip().replace(" ", "T")
    if len(s) == 19:
        return s + "Z"
    return s


def slugify_filename(slug):
    s = (slug or "").strip().lower()
    s = FILENAME_SAFE.sub("-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s or "untitled"


def yaml_escape(value):
    """Render a Python value as a YAML scalar suitable for frontmatter."""
    if value is None:
        return '""'
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, int):
        return str(value)
    if isinstance(value, list):
        if not value:
            return "[]"
        return "[" + ", ".join(yaml_escape(v) for v in value) + "]"
    s = str(value)
    # double-quoted with backslash + double-quote escaped
    s = s.replace("\\", "\\\\").replace('"', '\\"')
    # collapse newlines inside scalars
    s = s.replace("\r\n", "\\n").replace("\n", "\\n").replace("\r", "\\n")
    return f'"{s}"'


def language_from_url(link):
    if not link:
        return None, "/"
    try:
        parsed = urlparse(link)
        path = parsed.path or "/"
    except Exception:
        return None, "/"
    parts = [p for p in path.split("/") if p]
    if parts and parts[0] in LANGS:
        return parts[0], path
    return None, path


def language_from_categories(item):
    for c in item.findall("category"):
        if c.attrib.get("domain") == "language":
            nice = c.attrib.get("nicename")
            if nice in LANGS:
                return nice
    return None


def translation_group_for(item):
    for c in item.findall("category"):
        if c.attrib.get("domain") == "post_translations":
            return c.attrib.get("nicename", "")
    return ""


def collect_terms(channel):
    cats = []
    tags = []
    for c in channel.findall("wp:category", NS):
        cats.append(
            {
                "id": int(q(c, "wp:term_id") or 0),
                "slug": q(c, "wp:category_nicename"),
                "name": q(c, "wp:cat_name"),
                "parent": q(c, "wp:category_parent"),
            }
        )
    for t in channel.findall("wp:tag", NS):
        tags.append(
            {
                "id": int(q(t, "wp:term_id") or 0),
                "slug": q(t, "wp:tag_slug"),
                "name": q(t, "wp:tag_name"),
            }
        )
    return cats, tags


def first_cdn_image(html):
    if not html:
        return ""
    for m in IMG_SRC_RE.finditer(html):
        src = m.group(1)
        if CDN_HOST in src:
            return src
    return ""


def categories_and_tags(item):
    cats = []
    tags = []
    for c in item.findall("category"):
        dom = c.attrib.get("domain", "")
        name = (c.text or "").strip()
        if not name:
            continue
        if dom == "category":
            cats.append(name)
        elif dom == "post_tag":
            tags.append(name)
    return cats, tags


def build_menus(channel):
    """Return {menu_slug: [item_dict, ...]} ordered by menu_order."""
    menus = defaultdict(list)
    for item in channel.findall("item"):
        if q(item, "wp:post_type") != "nav_menu_item":
            continue
        if q(item, "wp:status") != "publish":
            continue
        meta = dict(parse_postmeta(item))
        menu_slug = None
        for c in item.findall("category"):
            if c.attrib.get("domain") == "nav_menu":
                menu_slug = c.attrib.get("nicename") or (c.text or "").strip()
                break
        if not menu_slug:
            continue
        title_el = item.find("title")
        title = (title_el.text or "").strip() if title_el is not None else ""
        try:
            order = int(q(item, "wp:menu_order") or 0)
        except ValueError:
            order = 0
        try:
            item_id = int(q(item, "wp:post_id") or 0)
        except ValueError:
            item_id = 0
        try:
            parent_id = int(meta.get("_menu_item_menu_item_parent", "0") or 0)
        except ValueError:
            parent_id = 0
        classes_raw = meta.get("_menu_item_classes", "")
        classes = []
        # Pull plain "..." quoted strings from PHP serialized array; ignore empties.
        for m in re.finditer(r's:\d+:"([^"]*)"', classes_raw or ""):
            v = m.group(1)
            if v:
                classes.append(v)
        url = meta.get("_menu_item_url", "")
        obj_type = meta.get("_menu_item_type", "")  # post_type | taxonomy | custom
        obj_id = meta.get("_menu_item_object_id", "")
        obj = meta.get("_menu_item_object", "")
        menus[menu_slug].append(
            {
                "title": title,
                "url": url,
                "order": order,
                "parent_id": parent_id,
                "item_id": item_id,
                "classes": classes,
                "object_type": obj_type,
                "object": obj,
                "object_id": obj_id,
            }
        )
    for slug in menus:
        menus[slug].sort(key=lambda i: (i["order"], i["item_id"]))
    return dict(menus)


def write_markdown(path, frontmatter, body):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    lines = ["---"]
    for key, value in frontmatter:
        if isinstance(value, list):
            lines.append(f"{key}: {yaml_escape(value)}")
        else:
            lines.append(f"{key}: {yaml_escape(value)}")
    lines.append("---")
    out = "\n".join(lines) + "\n\n" + (body or "") + "\n"
    with open(path, "w", encoding="utf-8") as f:
        f.write(out)


def main():
    if len(sys.argv) < 2:
        print("usage: migrate-wp.py <wxr.xml> [content-dir]", file=sys.stderr)
        sys.exit(2)

    src_path = sys.argv[1]
    content_dir = sys.argv[2] if len(sys.argv) > 2 else os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "src",
        "content",
    )

    tree = ET.parse(src_path)
    root = tree.getroot()
    channel = root.find("channel")
    if channel is None:
        print("No <channel> found in WXR", file=sys.stderr)
        sys.exit(1)

    # Author display-name lookup keyed by login.
    authors = {}
    for a in channel.findall("wp:author", NS):
        login = q(a, "wp:author_login")
        if login:
            authors[login] = q(a, "wp:author_display_name") or login

    cats_master, tags_master = collect_terms(channel)
    menus = build_menus(channel)

    skipped = []  # (id, type, slug, reason)
    written = []  # path
    counts = Counter()  # (type, lang)
    redirects = []  # {from, to}
    seen_paths = set()  # collision detection

    for item in channel.findall("item"):
        post_type = q(item, "wp:post_type")
        post_id = q(item, "wp:post_id")
        slug = q(item, "wp:post_name")
        status = q(item, "wp:status")
        title_el = item.find("title")
        title = (title_el.text or "").strip() if title_el is not None else ""
        link_el = item.find("link")
        link = (link_el.text or "").strip() if link_el is not None else ""

        if post_type in SKIP_TYPES:
            continue
        if post_type not in ALLOWED_TYPES:
            skipped.append((post_id, post_type, slug, "non-target post_type"))
            continue
        if status != "publish":
            skipped.append((post_id, post_type, slug, f"status={status}"))
            continue
        if not slug:
            slug = slugify_filename(title) or f"wp-{post_id}"

        url_lang, url_path = language_from_url(link)
        cat_lang = language_from_categories(item)
        lang = url_lang or cat_lang or DEFAULT_LANG

        # Calculate canonical permalink, ensuring it has a language prefix.
        if url_lang:
            permalink = url_path
        else:
            # No lang prefix in original URL — prepend default lang segment.
            tail = url_path.lstrip("/")
            permalink = f"/{lang}/" + tail
        if not permalink.endswith("/"):
            permalink += "/"

        # Track redirect if original differs from canonical permalink path.
        if url_path and url_path != permalink:
            redirects.append({"from": url_path, "to": permalink})

        content_el = item.find("content:encoded", NS)
        body = content_el.text if content_el is not None and content_el.text else ""
        excerpt_el = item.find("excerpt:encoded", NS)
        excerpt = excerpt_el.text if excerpt_el is not None and excerpt_el.text else ""

        post_date = parse_wp_date(q(item, "wp:post_date_gmt")) or parse_pubdate(
            (item.findtext("pubDate") or "")
        )
        post_modified = parse_wp_date(q(item, "wp:post_modified_gmt"))

        creator = (item.findtext("{http://purl.org/dc/elements/1.1/}creator") or "").strip()
        author_display = authors.get(creator, creator)

        try:
            parent_id = int(q(item, "wp:post_parent") or 0)
        except ValueError:
            parent_id = 0
        try:
            menu_order = int(q(item, "wp:menu_order") or 0)
        except ValueError:
            menu_order = 0
        try:
            wp_id = int(post_id or 0)
        except ValueError:
            wp_id = 0

        cats, tags = categories_and_tags(item)
        # Drop the language pseudo-category if it sneaked in.
        cats = [c for c in cats if c not in {"Español", "English", "Asturianu"}]
        featured_image = first_cdn_image(body)
        translation_group = translation_group_for(item)

        frontmatter = [
            ("title", title),
            ("slug", slug),
            ("lang", lang),
            ("date", post_date),
            ("modified", post_modified),
            ("status", status),
            ("wp_id", wp_id),
            ("original_url", link),
            ("permalink", permalink),
            ("categories", cats),
            ("tags", tags),
            ("featured_image", featured_image),
            ("excerpt", excerpt),
            ("author", author_display),
            ("parent_id", parent_id),
            ("menu_order", menu_order),
            ("translation_group", translation_group),
        ]

        # Filename: <slug>.md, sanitized.
        fname = slugify_filename(slug) + ".md"
        kind_dir = "pages" if post_type == "page" else "posts"
        out_path = os.path.join(content_dir, kind_dir, lang, fname)

        # Collision protection: append wp_id if same file already written.
        if out_path in seen_paths:
            base, ext = os.path.splitext(out_path)
            out_path = f"{base}-{wp_id}{ext}"
        seen_paths.add(out_path)

        write_markdown(out_path, frontmatter, body)
        written.append(out_path)
        counts[(post_type, lang)] += 1

    # Write auxiliary JSON files.
    aux_dir = content_dir
    os.makedirs(aux_dir, exist_ok=True)

    with open(os.path.join(aux_dir, "_categories.json"), "w", encoding="utf-8") as f:
        json.dump(cats_master, f, ensure_ascii=False, indent=2)
    with open(os.path.join(aux_dir, "_tags.json"), "w", encoding="utf-8") as f:
        json.dump(tags_master, f, ensure_ascii=False, indent=2)
    with open(os.path.join(aux_dir, "_menus.json"), "w", encoding="utf-8") as f:
        json.dump(menus, f, ensure_ascii=False, indent=2)
    with open(os.path.join(aux_dir, "_redirects.json"), "w", encoding="utf-8") as f:
        json.dump(redirects, f, ensure_ascii=False, indent=2)

    # Summary.
    print("=" * 60)
    print("Migration summary")
    print("=" * 60)
    print(f"Source: {src_path}")
    print(f"Output: {content_dir}")
    print(f"Total files written: {len(written)}")
    print()
    print("Counts by (type, lang):")
    for (pt, lang) in sorted(counts):
        print(f"  {pt:<6} {lang:<4} {counts[(pt, lang)]:>4}")
    print()
    print(f"Categories: {len(cats_master)}  Tags: {len(tags_master)}")
    print(f"Menus: {len(menus)}  ({', '.join(sorted(menus.keys())) or '-'})")
    for m, entries in menus.items():
        print(f"  menu '{m}': {len(entries)} items")
    print(f"Redirects: {len(redirects)}")
    print(f"Skipped: {len(skipped)}")
    if skipped:
        # Group by reason for readability.
        by_reason = Counter(r for *_, r in skipped)
        for reason, n in by_reason.most_common():
            print(f"  reason '{reason}': {n}")
        # Show a few examples per reason.
        shown_per_reason = defaultdict(int)
        for pid, pt, slug, reason in skipped:
            if shown_per_reason[reason] < 5:
                print(f"   - id={pid} type={pt} slug={slug!r} ({reason})")
                shown_per_reason[reason] += 1


if __name__ == "__main__":
    main()
