# ADAR — Image library reorganization plan

Total unique images referenced from src/: **345**
  · on Bunny CDN: **328**
  · local /public or similar: **17**
  · WebP-candidate (jpg/png): **338**
  · cross-section reuse (→ shared): **6**
  · filename collisions: **15**

## Proposed top-level tree

```
/images/
    about/   (1 files)
    artists/   (16 files)
    home/   (10 files)
    logos/   (19 files)
    map/   (2 files)
    memoria-de-acciones/   (243 files)
        2022-08-08-conciertu-visual-el-francu-2022/
        2022-08-09-conciertu-visual-sotu-del-barcu-2022/
        2022-08-10-conciertu-ilesia-santa-maria-sabada-colunga-2022/
        2022-08-11-conciertu-aire-llibre-llanes-2022/
        2022-08-12-conciertu-miranda-valdecarzana-grau-2022/
        2022-08-13-conciertu-clausura-balmonte-2022/
        … (30 more)
    news/   (3 files)
        2024-08-07-prensa-elcomercio-revitalizar-2024-ast/
        2024-08-08-prensa-ayto-llanes-bedon-2024-ast/
        2024-08-11-prensa-nortes-patrimonio-2024-ast/
    open-call/   (2 files)
    partners/   (1 files)
    residencies/   (2 files)
    shared/   (7 files)
    team/   (1 files)
    venues/   (38 files)
```

## Output files in this folder

| File | What it is |
|---|---|
| `INVENTORY.md` | This summary |
| `migration.csv` | Per-image migration map (the master spreadsheet) |
| `by-section.txt` | Plain-text tree, grouped by destination folder |
| `duplicates.txt` | Filename collisions + cross-section reuse to review |
| `candidates.txt` | List of jpg/png paths recommended for WebP conversion |
| `url-rewrite-map.json` | old CDN URL → new CDN URL, ready to feed into a sed/codemod |
| `rename.sh` | Builds the new tree locally from a downloaded mirror |
| `sync.sh` | Pushes the new tree to Bunny via rclone |
| `rewrite-urls.py` | (manual step) apply the URL map to src/ |

## Naming convention applied

- lowercase, hyphen-separated, no spaces, no accents, no special chars
- Memoria de Acciones folders use the strict pattern `YYYY-MM-DD-slug`
- Cross-section reuse moves to `/images/shared/`
- Extension is preserved; WebP conversion is a separate, optional pass

## How to read the CSV

Each row is one image URL referenced from the source tree.
`Page Using Image` lists up to 6 source files (markdown/astro/json).
`Status` starts as `pending` and you flip it to `done` after applying.

## Workflow

1. Review this report. Adjust categorization rules in the script if a
   section feels wrong (e.g., a page that should be `team` ended up in
   `shared`). Re-run the script and regenerate.
2. `rclone copy bunny:adar-storage ./bunny-current --progress` — pulls the
   current image tree to a local mirror.
3. `bash rename.sh` — builds `./bunny-new/` with the proposed layout.
4. Spot-check `./bunny-new/` for obvious gaps.
5. `bash sync.sh` (dry-run first by editing in `--dry-run`).
6. `python3 rewrite-urls.py` — patches every `featured_image:` and inline
   `src="…"` in src/ to the new CDN URLs from `url-rewrite-map.json`.
7. `npm run build` to verify no broken references.
8. Commit.
