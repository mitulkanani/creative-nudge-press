import React from 'react';
import Heading1 from '../Common/Heading1';
import { aboutPageData } from '@/utils/content';
import Description2 from '../Common/Description2';
import Image from 'next/image';

const OurMissionAndVision = () => {
  const { outMissionAndVision } = aboutPageData;
  const { title, content, description, elements } = outMissionAndVision;
  return (
    <div className="relative mt-[64px] bg-snow py-10 md:py-[84px]">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-10 px-5 md:gap-[72px] lg:flex-row xl:px-[90px]">
        <div className="flex w-full max-w-[450px] flex-col gap-1">
          <Heading1 title={title} />
          <Description2 description={description} />
        </div>
        <div className="flex flex-col gap-5 md:gap-12">
          {content?.map((item, index) => (
            <div key={index} className="flex gap-5 md:gap-9">
              <Image src={item?.icon} width={64} height={64} alt="icon" />
              <div className="flex flex-col gap-1">
                <h3 className="font-lora text-[20px] leading-[25.6px] text-darkBlack">
                  {item?.subTitle}
                </h3>
                <p className="font-lora text-base text-slateGray opacity-90">
                  {item?.subDescription}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {elements && (
        <>
          <Image
            width={elements[0]?.width}
            height={elements[0]?.height}
            alt="star"
            src={elements[0]?.icon}
            className="absolute -bottom-5 left-0 hidden lg:block"
          />
          <Image
            width={elements[1]?.width}
            height={elements[1]?.height}
            alt="star"
            src={elements[1]?.icon}
            className="absolute bottom-0 left-52 hidden lg:block"
          />
        </>
      )}
    </div>
  );
};

export default OurMissionAndVision;
