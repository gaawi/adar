#!/usr/bin/env python3
"""Strip leading whitespace from HTML lines in content markdown files.

Markdown treats lines indented by 4+ spaces as code blocks. Since our content
is raw HTML migrated from WordPress, we strip the leading whitespace so the
parser leaves the HTML alone.
"""
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CONTENT = ROOT / "src" / "content"


def process(path: Path) -> bool:
    text = path.read_text(encoding="utf-8")
    m = re.match(r"^(---\n.*?\n---\n)(.*)$", text, re.DOTALL)
    if not m:
        return False
    fm, body = m.group(1), m.group(2)
    # Strip leading whitespace per line, preserve blank lines
    new_body_lines = []
    for line in body.splitlines():
        new_body_lines.append(line.lstrip())
    new_body = "\n".join(new_body_lines) + ("\n" if body.endswith("\n") else "")
    if new_body == body:
        return False
    path.write_text(fm + new_body, encoding="utf-8")
    return True


def main() -> None:
    changed = 0
    total = 0
    for kind in ("pages", "posts"):
        for path in (CONTENT / kind).rglob("*.md"):
            total += 1
            if process(path):
                changed += 1
    print(f"Processed {total} files, {changed} updated.")


if __name__ == "__main__":
    main()
