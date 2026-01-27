import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			// Transform string to Date object
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			tags: z.array(z.string()).optional(),
			category: z.string().optional(),
			author: z.string().optional(),
		}),
});

const portfolio = defineCollection({
	loader: glob({ base: './src/content/portfolio', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: image().optional(),
			icon: z.string().optional(), // SVG string or path
			tags: z.array(z.string()).optional(),
			techStack: z.string().optional(),
			ctaLink: z.string().optional(),
			ctaText: z.string().optional(),
			category: z.string().optional(),

			// New fields
			company: z.string().optional(),
			whereToPlay: z.array(
				z.object({
					platform: z.string(),
					url: z.string().url(),
				})
			).optional(),
			screenshots: z.array(image()).optional(),
			trailer: z.string().url().optional(), // Youtube URL
		}),
});

export const collections = { blog, portfolio };
