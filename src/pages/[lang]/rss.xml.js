import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_DESCRIPTION, SITE_TITLE } from '../../consts';

export function getStaticPaths() {
  return [
    { params: { lang: 'pt-br' } },
  ];
}

export async function GET(context) {
    const { lang } = context.params;
	const posts = await getCollection('blog');
    const filteredPosts = posts.filter(p => p.id.startsWith(lang + '/'));
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: filteredPosts.map((post) => ({
			...post.data,
			link: `/${lang}/blog/${post.id.replace(new RegExp(`^${lang}/`), '')}/`,
		})),
	});
}
