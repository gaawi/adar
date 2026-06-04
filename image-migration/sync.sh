#!/usr/bin/env bash
# Upload the reorganized ./bunny-new/ tree to Bunny Storage.
# Pre-req: rclone configured with a remote called `bunny`.
#
# IMPORTANT: This is a DESTRUCTIVE sync — it will mirror local to remote.
# Test with --dry-run first.

set -euo pipefail
REMOTE="${REMOTE:-bunny:adar-storage/images}"
LOCAL="${LOCAL:-./bunny-new/images}"

rclone sync "$LOCAL" "$REMOTE" --progress --transfers 8 --checkers 16 \
  --exclude ".DS_Store" --exclude "Thumbs.db"

# When you're ready to flip the website to the new paths, run the
# url-rewrite step (see rewrite-urls.py).
