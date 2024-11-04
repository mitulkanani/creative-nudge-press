import Description2 from '@/components/Common/Description2';
import Heading3 from '@/components/Common/Heading3';
import { blogPageData } from '@/utils/content';
import Image from 'next/image';

type Params = Promise<{ slug: string[] }>;
const BlogDetails = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const { articles } = blogPageData;
  const blog = articles?.blogs.find((item) => item?.id === Number(slug));

  return (
    <div className="my-20 flex items-center justify-center">
      {blog && (
        <div className="flex w-full max-w-[404px] flex-col gap-5">
          <Image
            src={blog.image}
            alt=""
            width={404}
            height={350}
            className="h-full max-h-[350px] w-full max-w-[404px]"
          />
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <Heading3
                title={blog.title}
                style="!text-[20px] !leading-[25.6px] !font-normal line-clamp-1"
              />
              <div className="flex flex-col">
                <Description2 description={blog.description} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogDetails;
