import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
	type: 'content',
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			publicationDate: z.coerce.date(),
			cover: z
				.object({
					image: image(),
					alt: z.string(),
					caption: z.string().optional(),
				})
				.optional(),
		}),
});

export const collections = {
	articles: articleCollection,
};
