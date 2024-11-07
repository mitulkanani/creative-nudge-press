import BlogHeroSection from '@/components/Blog/BlogHeroSection';
import getPostMetaData from '@/utils/helper/getPostMetadata';
import { BlogHerosectionProps } from '@/utils/types';
import fs from 'fs';
import matter from 'gray-matter';
import Markdown from 'markdown-to-jsx';

type Params = Promise<{ slug: string[] }>;

function getPostContent(slug: string[]) {
  const folder = 'src/content/blog/';
  const file = folder + `${slug}.mdx`;
  const content = fs.readFileSync(file, 'utf8');
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetaData('src/content/blog');
  return posts?.map((post) => ({
    slug: post?.slug,
  }));
};

// export async function generateMetaData({
//   params,
// }: {
//   params: {
//     slug: string;
//   };
// }): Promise<Metadata> {
//   const par = await params;
//   const id = par?.slug ? '.' + par?.slug : '';
//   return {
//     title: `Creative Nudge Press 1 ${id?.replaceAll('_', ' ')} ''}`,
//   };
// }

const BlogDetails = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = getPostContent(slug);

  const herosectionData: BlogHerosectionProps = {
    title: post?.data.title ?? '',
    description: post?.data.description ?? '',
    heroBackground: post?.data.heroBackground,
    leftIcon: post?.data.leftIcon,
    rightIcon: post?.data.rightIcon,
    author: post?.data.author,
    btnText: post?.data.btnText,
    coverImage: post?.data.coverImage,
    date: post?.data.date,
    id: post?.data.id,
  };

  return (
    <main className="flex flex-col gap-[100px]">
      <BlogHeroSection herosection={herosectionData} />
      <article className="mx-auto max-w-[1440px] px-5">
        <Markdown>{post?.content}</Markdown>
      </article>
    </main>
  );
};

export default BlogDetails;
