#!/usr/bin/env python3
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
