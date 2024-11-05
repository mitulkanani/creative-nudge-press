import { blogPageData } from '@/utils/content';
import Description1 from '../Common/Description1';
import Heading1 from '../Common/Heading1';
import Heading3 from '../Common/Heading3';

const ExploreOurContent = () => {
  const { exploreOurContent } = blogPageData;
  return (
    <div className="mt-10 bg-snow py-10 md:mt-[84px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-5 md:gap-16 xl:px-[148px]">
        <div className="flex flex-col gap-1">
          <Heading1 title={exploreOurContent?.title} />
          <Description1 description={exploreOurContent?.description} />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:gap-9">
          {exploreOurContent?.cards?.map((card, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 rounded-r-lg bg-white p-5 md:p-9"
            >
              <Heading3 title={card?.cardTitle} />
              <div className="flex flex-col gap-3">
                {card?.articles?.map((article, articleIndex) => (
                  <p
                    key={articleIndex}
                    style={{ color: card?.textColor }}
                    className="ffont-lora text-sm text-slateGray md:text-base"
                  >
                    {article}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreOurContent;
