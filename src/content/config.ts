import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: image().optional(),
		author: z.string().optional(),
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),
	}),
});

const portfolio = defineCollection({
	schema: ({ image }) => z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: image().optional(),
		techStack: z.array(z.string()).optional(),
		ctaLink: z.string().optional(),
		ctaText: z.string().optional(),
		company: z.string().optional(),
		whereToPlay: z.array(
			z.object({
				platform: z.string(),
				url: z.string(),
			})
		).optional(),
		screenshots: z.array(image()).optional(),
		trailer: z.string().optional(),
		tags: z.array(z.string()).optional(),
	}),
});

export const collections = { blog, portfolio };
