import { posts } from '#site/content';
import BlogHeroSection from '@/components/Blog/BlogHeroSection';
import { MDXContent } from '@/components/mdx-components';
import { BlogPost, PostPageParams } from '@/utils/types';
import { notFound } from 'next/navigation';
async function getPostFromParams(params: PostPageParams['params']) {
  const slug = (await params)?.slug?.join('/');
  const post = posts.find((post) => post.slugAsParams === slug);

  return post;
}

export async function generateStaticParams(): Promise<{ slug: string[] }[]> {
  return posts.map((post) => ({ slug: post.slugAsParams.split('/') }));
}

const BlogDetails = async ({ params }: PostPageParams) => {
  const post = await getPostFromParams(params);
  if (!post) {
    notFound();
  }

  const herosectionData: BlogPost = {
    author: post?.author,
    coverImage: post.coverImage,
    date: post?.date,
    description: post?.description ?? '',
    heroBackground: post?.heroBackground,
    title: post?.title ?? '',
    slug: post?.slug,
    content: post?.content,
  };

  return (
    <main className="flex flex-col gap-10 md:gap-[100px]">
      <BlogHeroSection herosection={herosectionData} />
      <article className="blog prose mx-auto w-full max-w-[1440px] px-5 font-lora xl:px-[148px]">
        <MDXContent code={post?.content}></MDXContent>
      </article>
    </main>
  );
};

export default BlogDetails;
