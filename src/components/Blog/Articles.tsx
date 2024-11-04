import { blogPageData } from '@/utils/content';
import Image from 'next/image';
import Description1 from '../Common/Description1';
import Description2 from '../Common/Description2';
import Heading1 from '../Common/Heading1';
import Heading3 from '../Common/Heading3';
import Link from 'next/link';

const Articles = () => {
  const { articles } = blogPageData;
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 pt-10 md:pt-[84px] xl:px-[90px]">
      <div className="flex flex-col items-center gap-[64px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <Heading1 title={articles?.title} />
          <Description1
            description={articles?.description}
            style="!leading-[24px]"
          />
        </div>
        <div className="grid items-stretch justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles?.blogs.map((card, index) => (
            <div
              key={index}
              className="flex w-full flex-col gap-5 md:max-w-[404px]"
            >
              <Image
                src={card.image}
                alt=""
                width={404}
                height={350}
                className="h-full w-full md:max-h-[350px] md:max-w-[404px]"
              />
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <Heading3
                    title={card?.title}
                    style="!text-[20px] !leading-[25.6px] !font-normal line-clamp-1"
                  />
                  <div className="flex flex-col">
                    <Description2 description={card?.description} />
                  </div>
                </div>
                <Link
                  href={`/blog/${card?.id}`}
                  className="text-base font-semibold text-cyanBlue"
                >
                  {card?.btnText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;