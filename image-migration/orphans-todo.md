# Orphan detection — pending CDN listing

This repo can tell you which images are **referenced** by the source code
(that's what `migration.csv` and `INVENTORY.md` are built from). It can't
tell you which images **exist on Bunny but are unused** without seeing the
actual storage listing.

To finish the orphan audit:

```bash
# 1. Pull a listing of every file on the Bunny storage
rclone lsf bunny:adar-storage --files-only -R > bunny-listing.txt

# 2. Compare against the referenced set
python3 - <<'PY'
import csv
from urllib.parse import urlparse

# Every URL the codebase references
referenced = set()
with open("migration.csv") as f:
    r = csv.DictReader(f)
    for row in r:
        if row["Is CDN?"] == "yes":
            referenced.add(row["Current Path"].lstrip("/").replace("adarimages/", "", 1))

# Every file on Bunny
present = set()
with open("bunny-listing.txt") as f:
    for line in f:
        present.add(line.strip())

orphans = sorted(present - referenced)
missing = sorted(referenced - present)

with open("orphans.txt", "w") as f:
    f.write(f"# {len(orphans)} files on Bunny not referenced anywhere in src/\n\n")
    for o in orphans:
        f.write(o + "\n")

with open("missing.txt", "w") as f:
    f.write(f"# {len(missing)} URLs referenced in src/ but NOT on Bunny (broken links!)\n\n")
    for m in missing:
        f.write(m + "\n")
PY
```

This produces:
- `orphans.txt` — safe to delete (or move to `/images/uploads-legacy/` if you
  want to preserve them for archival)
- `missing.txt` — broken references that need fixing or removal from src/
