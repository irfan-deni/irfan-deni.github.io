import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		category: z.string(),
		tags: z.array(z.string()).default([]),
		readingTime: z.string().optional(),
		image: z.string().optional(),
		imageAlt: z.string().optional(),
	}),
});

const art = defineCollection({
	loader: glob({ base: './src/content/art', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		year: z.number().int().optional(),
		tools: z.array(z.string()).default([]),
		image: z.string().optional(),
		tags: z.array(z.string()).default([]),
	}),
});

export const collections = { blog, art };
