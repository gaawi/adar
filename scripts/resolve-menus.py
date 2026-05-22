#!/usr/bin/env python3
"""Resolve menu item titles and URLs by looking up the linked pages."""
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "src" / "content"


def parse_frontmatter(text: str) -> dict:
    m = re.match(r"^---\n(.*?)\n---\n", text, re.DOTALL)
    if not m:
        return {}
    data = {}
    for line in m.group(1).splitlines():
        if ":" not in line:
            continue
        k, _, v = line.partition(":")
        v = v.strip()
        if v.startswith('"') and v.endswith('"'):
            v = v[1:-1]
        data[k.strip()] = v
    return data


def build_index() -> dict:
    """Map wp_id -> {title, permalink, lang}."""
    idx = {}
    for kind in ("pages", "posts"):
        for path in (CONTENT / kind).rglob("*.md"):
            fm = parse_frontmatter(path.read_text(encoding="utf-8"))
            wp_id = fm.get("wp_id")
            if wp_id and wp_id.isdigit():
                idx[int(wp_id)] = {
                    "title": fm.get("title", ""),
                    "permalink": fm.get("permalink", ""),
                    "lang": fm.get("lang", ""),
                }
    return idx


def main() -> None:
    menus_path = CONTENT / "_menus.json"
    menus = json.loads(menus_path.read_text(encoding="utf-8"))
    index = build_index()

    for lang, items in menus.items():
        for item in items:
            obj_type = item.get("object_type")
            obj = item.get("object")
            obj_id = item.get("object_id")
            try:
                obj_id_int = int(obj_id) if obj_id else None
            except (TypeError, ValueError):
                obj_id_int = None

            if obj_type == "post_type" and obj_id_int and obj_id_int in index:
                ref = index[obj_id_int]
                if not item.get("title"):
                    item["title"] = ref["title"]
                if not item.get("url"):
                    item["url"] = ref["permalink"]
            elif obj_type == "taxonomy":
                if not item.get("title"):
                    item["title"] = (item.get("description") or "").strip() or "Archive"
                if not item.get("url") and obj_id_int:
                    item["url"] = f"/{lang}/category/{obj_id_int}/"
            elif obj == "custom":
                if not item.get("title"):
                    item["title"] = item.get("description", "") or "Link"
                if not item.get("url"):
                    item["url"] = "#"

            classes = item.get("classes")
            if isinstance(classes, list):
                item["classes"] = " ".join(c for c in classes if c)

    menus_path.write_text(
        json.dumps(menus, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    print(f"Resolved menus written to {menus_path}")
    for lang, items in menus.items():
        resolved = sum(1 for i in items if i.get("title") and i.get("url"))
        print(f"  {lang}: {resolved}/{len(items)} items resolved")


if __name__ == "__main__":
    main()
