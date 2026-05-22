/**
 * Mimics WordPress sanitize_title():
 * 1. Lowercase
 * 2. Strip accents (NFD then remove combining marks)
 * 3. Remove characters that aren't [a-z0-9_-\s]
 * 4. Whitespace → hyphens
 * 5. Collapse multiple hyphens
 * 6. Trim leading/trailing hyphens
 */
export function wpSlugify(input: string): string {
  return input
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s_-]+/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}
