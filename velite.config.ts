import { defineConfig, defineCollection, s } from 'velite';
import rehypeSlug from 'rehype-slug';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split('/').slice(1).join('/'),
});

const posts = defineCollection({
  name: 'Post',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      slug: s.path(),
      // id: s.number().optional(),
      title: s.string().max(99),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      author: s.string(),
      content: s.mdx(),
      coverImage: s.string().optional(),
      additionalImages: s.array(s.string()).optional(),
      tags: s.array(s.string()).optional(),
      readingTime: s.string().optional(),
      heroBackground: s.string().optional(),
      featuredImages: s
        .array(
          s.object({
            src: s.string(),
            alt: s.string(),
            caption: s.string(),
          }),
        )
        .optional(),

      // btnText: s.string().optional(),
      // leftIcon: s.string().optional(),
      // rightIcon: s.string().optional(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: 'src/content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-dark' }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['subheading-anchor'],
            ariaLabel: 'Link to section',
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
