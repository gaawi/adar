#!/usr/bin/env python3
"""
ADAR — image inventory + migration plan generator.

Scans the source tree for every image reference, categorizes each image
according to which page/post uses it, and emits:

  - INVENTORY.md       — folder map + summary statistics
  - migration.csv      — Current Path, Current Filename, Proposed Path,
                         Proposed Filename, Page Using Image, Status
  - duplicates.txt     — images referenced by multiple unrelated pages
  - candidates.txt     — files that should be converted to WebP
  - rename.sh          — bash commands to apply rename inside a local
                         downloaded copy of the Bunny storage
  - sync.sh            — rclone commands to upload the new tree to Bunny
  - by-section.txt     — list of images grouped by destination folder

No files are moved or modified. This is a planning artifact only.
"""

import os
import re
import csv
import json
import hashlib
from pathlib import Path
from collections import defaultdict, Counter
from urllib.parse import urlparse, unquote

REPO = Path("/home/user/adar")
OUT = REPO / "image-migration"
OUT.mkdir(parents=True, exist_ok=True)

CDN_PREFIX = "https://creartbox-media-cdn.b-cdn.net/adarimages/"

IMG_EXT = (".jpg", ".jpeg", ".png", ".webp", ".gif", ".svg", ".avif", ".heic")
WEBP_CANDIDATE_EXT = (".jpg", ".jpeg", ".png")

# -----------------------------------------------------------------------------
# Source file discovery
# -----------------------------------------------------------------------------
EXCLUDE_DIRS = {".git", "node_modules", "dist", ".astro", "image-migration"}

def find_source_files():
    out = []
    for root, dirs, files in os.walk(REPO):
        dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
        for fn in files:
            if fn.endswith((".md", ".mdx", ".astro", ".json", ".ts", ".tsx", ".html", ".css", ".js")):
                out.append(Path(root) / fn)
    return out

source_files = find_source_files()

# -----------------------------------------------------------------------------
# Image URL extraction
# -----------------------------------------------------------------------------
# Match either full URL or a path that ends with an image extension. We
# only care about CDN URLs and local /public references.
URL_RE = re.compile(
    r'(https?://[^\s\'"<>)\]]+\.(?:jpg|jpeg|png|webp|gif|svg|avif|heic))(?:\?[^\s\'"<>)\]]*)?',
    re.IGNORECASE,
)
LOCAL_RE = re.compile(
    r'["\']/(public/|logos/|fonts/|images/)[^\s\'"<>)\]]+?\.(?:jpg|jpeg|png|webp|gif|svg|avif)',
    re.IGNORECASE,
)
# Special: CDN+'…' template literal pattern (used in mapa-de-acciones)
CDN_TMPL_RE = re.compile(
    r"CDN\s*\+\s*['\"]([^'\"]+\.(?:jpg|jpeg|png|webp|gif|svg|avif))['\"]",
    re.IGNORECASE,
)

# url -> [(source_file_relative, line_no)]
url_uses = defaultdict(list)

def record(url, src, line):
    url_uses[url].append((src, line))

for f in source_files:
    try:
        text = f.read_text(encoding="utf-8", errors="replace")
    except Exception:
        continue
    rel = str(f.relative_to(REPO))
    for m in URL_RE.finditer(text):
        url = m.group(0).split("?")[0]
        line_no = text[: m.start()].count("\n") + 1
        record(url, rel, line_no)
    for m in CDN_TMPL_RE.finditer(text):
        url = CDN_PREFIX + m.group(1)
        line_no = text[: m.start()].count("\n") + 1
        record(url, rel, line_no)
    for m in LOCAL_RE.finditer(text):
        url = m.group(0).strip("'\"")
        line_no = text[: m.start()].count("\n") + 1
        record(url, rel, line_no)

# -----------------------------------------------------------------------------
# Post / page metadata (date, slug, title, categories)
# -----------------------------------------------------------------------------
META = {}

def parse_frontmatter(text):
    m = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not m:
        return {}
    fm = m.group(1)
    out = {}
    for line in fm.splitlines():
        m2 = re.match(r'^([a-z_]+):\s*(.*)$', line)
        if not m2:
            continue
        k, v = m2.group(1), m2.group(2)
        v = v.strip()
        if v.startswith('"') and v.endswith('"'):
            v = v[1:-1]
        elif v.startswith("[") and v.endswith("]"):
            v = [s.strip().strip('"').strip("'") for s in v[1:-1].split(",") if s.strip()]
        out[k] = v
    return out

for f in source_files:
    if not f.suffix == ".md":
        continue
    rel = str(f.relative_to(REPO))
    if "/content/" not in rel:
        continue
    try:
        text = f.read_text(encoding="utf-8", errors="replace")
    except Exception:
        continue
    META[rel] = parse_frontmatter(text)

# -----------------------------------------------------------------------------
# Categorization
# -----------------------------------------------------------------------------
PAGE_MAP = {
    # home (3 langs)
    "adar": "home",
    "adar-festival": "home",
    "festival-adar": "home",
    # about
    "que-es-adar": "about",
    "what-is-adar": "about",
    "que-ye-adar": "about",
    "impacto-modelo-y-archivo-del-proyecto-adar": "about",
    "impact-model-and-archive": "about",
    "impact-model-and-archive-of-the-adar-project": "about",
    "impactu-modelu-y-archivu-del-proyectu-adar": "about",
    # team
    "equipo": "team",
    "team": "team",
    # contact
    "contacto": "contact",
    "contact": "contact",
    # venues / sedes
    "sedes": "venues",
    "venues": "venues",
    "headquarters": "venues",
    "sede": "venues",
    # mapa
    "mapa-de-acciones": "map",
    "map-of-actions": "map",
    "mapa-dacciones": "map",
    # concurso
    "concurso-de-horreos-y-paneras": "open-call",
    "horreos-and-paneras-contest": "open-call",
    "horreos-and-paneras-competition": "open-call",
    "concursu-de-horreos-y-paneras": "open-call",
    # composer in residence (open call)
    "compositor-residente": "open-call",
    "festival-adar-2026-composer-in-residence-open-call": "open-call",
    # artists
    "artistas": "artists",
    "artists": "artists",
    "artistes": "artists",
    # residencies
    "residencias-artisticas-adar": "residencies",
    "adar-artistic-residencies": "residencies",
    "residencias-artisticas-adar-2": "residencies",
    "residencies-artistiques-adar": "residencies",
    # partners
    "red-de-colaboracion": "partners",
    "partners-2": "partners",
    "partners": "partners",
    # ast variants of pages
    "equipu": "team",
    "contautu": "contact",
    "compositor-en-residencia": "open-call",
    "concursu-dhorreos-y-paneres": "open-call",
    "impautu-modelu-y-archivu": "about",
    "que-ye-adar": "about",
    # newsletter, legal
    "newsletter": "newsletter",
    "politica-de-privacidad": "legal",
    "privacy-policy": "legal",
    "politica-privacidad": "legal",
    "test-mcp": "shared",
}

# Sections that "own" their images (a post in this section authored the image).
# Cross-references from /map/ or /home/ don't dilute this ownership.
OWNER_PRIORITY = ["memoria-de-acciones", "news"]
# When no owner exists, these page-level sections beat each other in alpha order;
# but if multiple unique page sections appear, fall back to /shared/.

ARCHIVE_CATEGORIES = {
    "Memoria de Acciones",
    "Memoria d’Acciones",
    "Memoria d'Acciones",
    "Projects Archive",
}
PRESS_CATEGORIES = {"Prensa", "Press", "Prensa "}

def categorize(src_file, url=None):
    """Returns (section, subfolder_or_empty)."""
    parts = Path(src_file).parts
    rel = src_file

    if "posts" in parts:
        meta = META.get(rel, {})
        cats = meta.get("categories") or []
        if isinstance(cats, str):
            cats = [cats]
        slug = meta.get("slug", "").strip()
        date = (meta.get("date") or "")[:10]
        if not date:
            date = "0000-00-00"

        if any(c in ARCHIVE_CATEGORIES for c in cats):
            return ("memoria-de-acciones", f"{date}-{slug or 'unknown'}")
        if any(c in PRESS_CATEGORIES for c in cats):
            return ("news", f"{date}-{slug or 'unknown'}")
        return ("memoria-de-acciones", f"{date}-{slug or 'unknown'}")

    if "pages" in parts:
        fn = parts[-1].replace(".md", "")
        return (PAGE_MAP.get(fn, "pages"), "")

    if "components" in parts:
        last = parts[-1].lower()
        if "home" in parts or "home" in last:
            return ("home", "")
        if "team" in last:
            return ("team", "")
        if "contact" in last:
            return ("contact", "")
        if "footer" in last or "header" in last or "logo" in last:
            return ("shared", "")
        return ("shared", "")

    if "src/pages" in rel:
        if "programacion" in rel:
            return ("festival-adar", "")
        return ("shared", "")

    return ("shared", "")

# -----------------------------------------------------------------------------
# Naming convention
# -----------------------------------------------------------------------------
def slugify(s):
    s = s.lower()
    s = re.sub(r"[áàä]", "a", s)
    s = re.sub(r"[éèë]", "e", s)
    s = re.sub(r"[íìï]", "i", s)
    s = re.sub(r"[óòö]", "o", s)
    s = re.sub(r"[úùü]", "u", s)
    s = re.sub(r"ñ", "n", s)
    s = re.sub(r"[^a-z0-9.]+", "-", s)
    s = re.sub(r"-+", "-", s).strip("-")
    return s

# Counter per destination folder for sequential numbering
folder_counters = defaultdict(int)

def url_to_filename(u):
    p = urlparse(u).path
    return unquote(os.path.basename(p))

def propose_filename(orig, section, subfolder, hint=None, ext_override=None):
    name, ext = os.path.splitext(orig)
    ext = (ext_override or ext).lower()
    base = slugify(name)
    # Truncate overly long names
    if len(base) > 64:
        base = base[:64].rstrip("-")
    key = (section, subfolder, base)
    return f"{base}{ext}"

# -----------------------------------------------------------------------------
# Build rows
# -----------------------------------------------------------------------------
rows = []
for url in sorted(url_uses.keys()):
    uses = url_uses[url]
    fn = url_to_filename(url)
    if not fn or not fn.lower().endswith(IMG_EXT):
        continue
    using_files = sorted({f for f, _ in uses})
    cats_for_uses = [categorize(f, url) for f in using_files]
    unique_sections = {c[0] for c in cats_for_uses}

    # Owner-section wins: if a post-section claims the image, the image
    # belongs to that post even if /map/ or /home/ also references it.
    owner = None
    for owner_sec in OWNER_PRIORITY:
        if owner_sec in unique_sections:
            owner = next(c for c in cats_for_uses if c[0] == owner_sec)
            break

    # URL-based override: logos and sponsor marks live in /images/logos/
    # regardless of where they're used.
    url_path = urlparse(url).path.lower()
    url_lower = url.lower()
    fn_lower = fn.lower()
    is_logo = (
        url_path.startswith("/logos/")
        or url_path.startswith("/uploads/image/")  # sponsor logo uploads
        or "logo" in fn_lower
        or any(s in fn_lower for s in ("creartbox", "paradores", "opus71", "ballarte"))
    )

    if is_logo:
        section, subfolder = "logos", ""
        cross_used = False
    elif owner is not None:
        section, subfolder = owner
        cross_used = False
    elif len(unique_sections) == 1:
        section, subfolder = cats_for_uses[0]
        cross_used = False
    else:
        # Multiple page-level sections, no post owner — true shared image.
        section, subfolder = "shared", ""
        cross_used = True

    proposed_filename = propose_filename(fn, section, subfolder)
    proposed_path = f"images/{section}/"
    if subfolder:
        proposed_path += f"{subfolder}/"
    proposed_path += proposed_filename

    rows.append({
        "current_url": url,
        "current_path": urlparse(url).path,
        "current_filename": fn,
        "proposed_path": proposed_path,
        "proposed_filename": proposed_filename,
        "section": section,
        "subfolder": subfolder,
        "used_in": " | ".join(using_files[:6]),
        "uses_count": len(uses),
        "files_count": len(using_files),
        "cross_section": cross_used,
        "is_cdn": url.startswith(CDN_PREFIX),
        "ext": os.path.splitext(fn)[1].lower(),
        "is_webp_candidate": os.path.splitext(fn)[1].lower() in WEBP_CANDIDATE_EXT,
    })

# -----------------------------------------------------------------------------
# Deduplication detection
# -----------------------------------------------------------------------------
filename_groups = defaultdict(list)
for r in rows:
    filename_groups[r["current_filename"]].append(r)

duplicate_filenames = {fn: g for fn, g in filename_groups.items() if len(g) > 1}

cross_section = [r for r in rows if r["cross_section"]]

# -----------------------------------------------------------------------------
# Outputs
# -----------------------------------------------------------------------------
# 1) migration.csv
with open(OUT / "migration.csv", "w", newline="", encoding="utf-8") as f:
    w = csv.writer(f)
    w.writerow([
        "Current Path", "Current Filename", "Proposed Path",
        "Proposed Filename", "Page Using Image", "Uses Count",
        "Section", "Subfolder", "Cross-Section?", "Is CDN?",
        "WebP Candidate?", "Status",
    ])
    for r in rows:
        w.writerow([
            r["current_path"], r["current_filename"], r["proposed_path"],
            r["proposed_filename"], r["used_in"], r["uses_count"],
            r["section"], r["subfolder"],
            "yes" if r["cross_section"] else "no",
            "yes" if r["is_cdn"] else "no",
            "yes" if r["is_webp_candidate"] else "no",
            "pending",
        ])

# 2) duplicates.txt
with open(OUT / "duplicates.txt", "w", encoding="utf-8") as f:
    f.write("# Filename collisions (same filename referenced from multiple CDN paths)\n")
    f.write("# These need manual review — same name does not always mean same file.\n\n")
    for fn, g in sorted(duplicate_filenames.items()):
        f.write(f"\n=== {fn} ({len(g)} variants) ===\n")
        for r in g:
            f.write(f"  - {r['current_path']}\n")
            f.write(f"      used in: {r['used_in']}\n")
            f.write(f"      proposed: {r['proposed_path']}\n")

    f.write("\n\n# Cross-section reuse (same URL used across multiple top-level sections)\n")
    f.write("# Candidates for /images/shared/.\n\n")
    for r in cross_section:
        f.write(f"  - {r['current_url']}\n")
        f.write(f"      used in: {r['used_in']}\n")
        f.write(f"      proposed: {r['proposed_path']}\n")

# 3) candidates.txt (WebP / compression)
with open(OUT / "candidates.txt", "w", encoding="utf-8") as f:
    f.write("# Images recommended for WebP conversion (.jpg / .png / .jpeg)\n")
    f.write("# Run after rename. Suggested cmd:\n")
    f.write("#   cwebp -q 82 input.jpg -o output.webp\n")
    f.write("#\n")
    f.write("# Or batch with ImageMagick:\n")
    f.write("#   magick input.jpg -quality 82 output.webp\n\n")
    for r in rows:
        if r["is_webp_candidate"]:
            f.write(f"{r['proposed_path']}\n")

# 4) by-section.txt
by_section = defaultdict(list)
for r in rows:
    by_section[(r["section"], r["subfolder"])].append(r)

with open(OUT / "by-section.txt", "w", encoding="utf-8") as f:
    f.write("# Proposed destination tree\n\n")
    sections = sorted(by_section.keys())
    last_section = None
    for (section, sub), items in sections and [(k, by_section[k]) for k in sorted(by_section)]:
        if section != last_section:
            f.write(f"\n/images/{section}/  ({sum(len(v) for k,v in by_section.items() if k[0]==section)} files)\n")
            last_section = section
        if sub:
            f.write(f"    {sub}/  ({len(items)} files)\n")
            for r in items:
                f.write(f"        {r['proposed_filename']}\n")
        else:
            for r in items:
                f.write(f"    {r['proposed_filename']}\n")

# 5) rename.sh — applies the rename on a LOCAL downloaded copy of the
# bunny tree. Assumes the user has downloaded the current adarimages/
# folder into ./bunny-current/ and wants to build a new ./bunny-new/
# tree alongside it.
with open(OUT / "rename.sh", "w", encoding="utf-8") as f:
    f.write("#!/usr/bin/env bash\n")
    f.write("# Build the reorganized image tree under ./bunny-new/ from a local\n")
    f.write("# mirror of the current Bunny storage in ./bunny-current/.\n")
    f.write("#\n")
    f.write("# Usage:\n")
    f.write("#   rclone copy bunny:adar-storage ./bunny-current --progress\n")
    f.write("#   bash rename.sh\n")
    f.write("#   # review ./bunny-new/ before sync.sh\n")
    f.write("\n")
    f.write("set -euo pipefail\n")
    f.write('SRC="${SRC:-./bunny-current}"\n')
    f.write('DST="${DST:-./bunny-new}"\n\n')
    seen_src = set()
    for r in rows:
        if not r["is_cdn"]:
            continue
        src_rel = r["current_path"].lstrip("/")
        # adarimages/foo/bar.jpg -> foo/bar.jpg inside the storage root
        src_rel = src_rel.replace("adarimages/", "", 1)
        if src_rel in seen_src:
            continue
        seen_src.add(src_rel)
        dst = r["proposed_path"]
        f.write(f'mkdir -p "$DST/$(dirname \'{dst}\')"\n')
        f.write(f'cp -n "$SRC/{src_rel}" "$DST/{dst}"\n')
os.chmod(OUT / "rename.sh", 0o755)

# 6) sync.sh — rclone the new tree up to Bunny
with open(OUT / "sync.sh", "w", encoding="utf-8") as f:
    f.write("#!/usr/bin/env bash\n")
    f.write("# Upload the reorganized ./bunny-new/ tree to Bunny Storage.\n")
    f.write("# Pre-req: rclone configured with a remote called `bunny`.\n")
    f.write("#\n")
    f.write("# IMPORTANT: This is a DESTRUCTIVE sync — it will mirror local to remote.\n")
    f.write("# Test with --dry-run first.\n\n")
    f.write("set -euo pipefail\n")
    f.write('REMOTE="${REMOTE:-bunny:adar-storage/images}"\n')
    f.write('LOCAL="${LOCAL:-./bunny-new/images}"\n\n')
    f.write('rclone sync "$LOCAL" "$REMOTE" --progress --transfers 8 --checkers 16 \\\n')
    f.write('  --exclude ".DS_Store" --exclude "Thumbs.db"\n\n')
    f.write("# When you're ready to flip the website to the new paths, run the\n")
    f.write("# url-rewrite step (see rewrite-urls.py).\n")
os.chmod(OUT / "sync.sh", 0o755)

# 7) url-rewrite map — JSON mapping current URLs to the new CDN URL once
# the rename is applied. This is what the codebase needs to be updated
# against. Use sed or a small Python script to apply it across src/.
url_map = {r["current_url"]: f"{CDN_PREFIX}{r['proposed_path'].replace('images/', '', 1)}"
           for r in rows if r["is_cdn"]}
with open(OUT / "url-rewrite-map.json", "w", encoding="utf-8") as f:
    json.dump(url_map, f, indent=2, ensure_ascii=False, sort_keys=True)

# 8) INVENTORY.md
sections_summary = Counter((r["section"], r["subfolder"]) for r in rows)
section_total = Counter(r["section"] for r in rows)

with open(OUT / "INVENTORY.md", "w", encoding="utf-8") as f:
    f.write("# ADAR — Image library reorganization plan\n\n")
    f.write(f"Total unique images referenced from src/: **{len(rows)}**\n")
    f.write(f"  · on Bunny CDN: **{sum(1 for r in rows if r['is_cdn'])}**\n")
    f.write(f"  · local /public or similar: **{sum(1 for r in rows if not r['is_cdn'])}**\n")
    f.write(f"  · WebP-candidate (jpg/png): **{sum(1 for r in rows if r['is_webp_candidate'])}**\n")
    f.write(f"  · cross-section reuse (→ shared): **{len(cross_section)}**\n")
    f.write(f"  · filename collisions: **{len(duplicate_filenames)}**\n\n")

    f.write("## Proposed top-level tree\n\n")
    f.write("```\n")
    f.write("/images/\n")
    for section in sorted(section_total.keys()):
        f.write(f"    {section}/   ({section_total[section]} files)\n")
        # list subfolders for memoria + news
        subs = sorted({s for (sec, s) in sections_summary if sec == section and s})
        for s in subs[:6]:
            f.write(f"        {s}/\n")
        if len(subs) > 6:
            f.write(f"        … ({len(subs) - 6} more)\n")
    f.write("```\n\n")

    f.write("## Output files in this folder\n\n")
    f.write("| File | What it is |\n|---|---|\n")
    f.write("| `INVENTORY.md` | This summary |\n")
    f.write("| `migration.csv` | Per-image migration map (the master spreadsheet) |\n")
    f.write("| `by-section.txt` | Plain-text tree, grouped by destination folder |\n")
    f.write("| `duplicates.txt` | Filename collisions + cross-section reuse to review |\n")
    f.write("| `candidates.txt` | List of jpg/png paths recommended for WebP conversion |\n")
    f.write("| `url-rewrite-map.json` | old CDN URL → new CDN URL, ready to feed into a sed/codemod |\n")
    f.write("| `rename.sh` | Builds the new tree locally from a downloaded mirror |\n")
    f.write("| `sync.sh` | Pushes the new tree to Bunny via rclone |\n")
    f.write("| `rewrite-urls.py` | (manual step) apply the URL map to src/ |\n\n")

    f.write("## Naming convention applied\n\n")
    f.write("- lowercase, hyphen-separated, no spaces, no accents, no special chars\n")
    f.write("- Memoria de Acciones folders use the strict pattern `YYYY-MM-DD-slug`\n")
    f.write("- Cross-section reuse moves to `/images/shared/`\n")
    f.write("- Extension is preserved; WebP conversion is a separate, optional pass\n\n")

    f.write("## How to read the CSV\n\n")
    f.write("Each row is one image URL referenced from the source tree.\n")
    f.write("`Page Using Image` lists up to 6 source files (markdown/astro/json).\n")
    f.write("`Status` starts as `pending` and you flip it to `done` after applying.\n\n")

    f.write("## Workflow\n\n")
    f.write("1. Review this report. Adjust categorization rules in the script if a\n")
    f.write("   section feels wrong (e.g., a page that should be `team` ended up in\n")
    f.write("   `shared`). Re-run the script and regenerate.\n")
    f.write("2. `rclone copy bunny:adar-storage ./bunny-current --progress` — pulls the\n")
    f.write("   current image tree to a local mirror.\n")
    f.write("3. `bash rename.sh` — builds `./bunny-new/` with the proposed layout.\n")
    f.write("4. Spot-check `./bunny-new/` for obvious gaps.\n")
    f.write("5. `bash sync.sh` (dry-run first by editing in `--dry-run`).\n")
    f.write("6. `python3 rewrite-urls.py` — patches every `featured_image:` and inline\n")
    f.write("   `src=\"…\"` in src/ to the new CDN URLs from `url-rewrite-map.json`.\n")
    f.write("7. `npm run build` to verify no broken references.\n")
    f.write("8. Commit.\n")

# 9) rewrite-urls.py — runnable, but NOT executed automatically
with open(OUT / "rewrite-urls.py", "w", encoding="utf-8") as f:
    f.write('''#!/usr/bin/env python3
"""Apply url-rewrite-map.json across the source tree.

Run only AFTER the new tree has been uploaded to Bunny and you have
verified the new URLs return 200.
"""
import json, os, sys
from pathlib import Path

REPO = Path(__file__).resolve().parent.parent
MAP = json.loads((Path(__file__).parent / "url-rewrite-map.json").read_text())

EXCLUDE_DIRS = {".git", "node_modules", "dist", ".astro", "image-migration"}
EXT = (".md", ".mdx", ".astro", ".json", ".ts", ".tsx", ".html", ".css", ".js")

changed = 0
for root, dirs, files in os.walk(REPO):
    dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
    for fn in files:
        if not fn.endswith(EXT):
            continue
        p = Path(root) / fn
        text = p.read_text(encoding="utf-8", errors="replace")
        new = text
        for old, replacement in MAP.items():
            if old in new:
                new = new.replace(old, replacement)
        if new != text:
            p.write_text(new, encoding="utf-8")
            print(f"patched {p.relative_to(REPO)}")
            changed += 1

print(f"Done. {changed} files modified.")
''')

print(f"Rows: {len(rows)}")
print(f"Sections: {dict(section_total)}")
print(f"Duplicates: {len(duplicate_filenames)} filename groups")
print(f"Cross-section: {len(cross_section)}")
print(f"WebP candidates: {sum(1 for r in rows if r['is_webp_candidate'])}")
print(f"Outputs written to {OUT}")
