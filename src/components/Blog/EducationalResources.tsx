import { blogPageData } from '@/utils/content';
import Description2 from '../Common/Description2';
import Heading1 from '../Common/Heading1';
import Heading3 from '../Common/Heading3';
import Button from '../Common/Button';
import Image from 'next/image';

const EducationalResources = () => {
  const { educationResources } = blogPageData;
  return (
    <div className="mx-auto mt-10 flex max-w-[1440px] flex-col gap-16 px-5 py-10 lg:mt-[100px] lg:py-[100px] xl:px-[148px]">
      <div className="relative">
        <Heading1 title={educationResources?.title} style="text-center" />
        {educationResources?.elements && (
          <>
            <Image
              width={educationResources?.elements[0]?.width}
              height={educationResources?.elements[0]?.height}
              src={educationResources?.elements[0]?.source}
              alt={educationResources?.elements[0]?.alt}
              className="absolute -bottom-20 left-0 max-w-[100px] -scale-x-90 md:max-w-none xl:-left-10"
            />
            <Image
              width={educationResources?.elements[1]?.width}
              height={educationResources?.elements[1]?.height}
              src={educationResources?.elements[1]?.source}
              alt={educationResources?.elements?.[1]?.alt}
              className="absolute -top-12 right-0 max-w-[66px] rotate-[30deg] md:max-w-none"
            />
          </>
        )}
      </div>
      <div className="grid gap-5 md:grid-cols-2 lg:gap-9">
        {educationResources?.cards?.map((card, cardIndex) => (
          <div
            key={cardIndex}
            className="flex w-full flex-col gap-6 rounded-lg bg-snow p-9"
          >
            <div className="flex flex-col gap-2">
              <Heading3 title={card.cardTitle} />
              <div>
                <Description2 description={card.description} />
                <ul className="ml-6 list-disc">
                  {card?.descriptionDetails?.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-slateGray md:text-base"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Button
              label={card?.button?.btnText}
              link={card?.button?.btnLink}
              variant={card?.button?.variant}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationalResources;