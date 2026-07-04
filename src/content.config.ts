import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const langEnum = z.enum(['es', 'en', 'ast']);

const baseSchema = z.object({
  title: z.string(),
  slug: z.string(),
  lang: langEnum,
  date: z.coerce.date().optional(),
  modified: z.coerce.date().optional(),
  status: z.string().default('publish'),
  wp_id: z.number().optional(),
  original_url: z.string().optional(),
  permalink: z.string(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  featured_image: z.string().optional(),
  excerpt: z.string().optional(),
  author: z.string().optional(),
  parent_id: z.number().optional(),
  menu_order: z.number().optional(),
  translation_group: z.string().optional(),
});

// Folder-qualified id: the default glob id is the filename only, so two
// files with the same basename in different language folders (e.g.
// es/nota-de-prensa-adar-2026.md and ast/nota-de-prensa-adar-2026.md)
// collide and one silently overwrites the other. Include the subfolder.
const byPath = ({ entry }: { entry: string }) => entry.replace(/\.md$/, '');

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages', generateId: byPath }),
  schema: baseSchema,
});

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts', generateId: byPath }),
  schema: baseSchema,
});

export const collections = { pages, posts };
