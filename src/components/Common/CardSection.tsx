import { data } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import Heading1 from './Heading1';
import Description1 from './Description1';
import Heading3 from './Heading3';
import Description2 from './Description2';

const CardSection = ({ data }: data) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-[84px] xl:px-[90px]">
      <div className="flex flex-col items-center gap-[72px]">
        <div className="flex flex-col items-center gap-1">
          <Heading1 title={data?.title} />

          <Description1
            description={data?.description}
            style="!max-w-[800px] w-full !text-center"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {data?.cards?.map((card) => (
            <div
              key={card?.id}
              className="flex w-full max-w-[297px] flex-col items-center gap-8"
            >
              <Image
                src={card?.image}
                alt=""
                width="64"
                height="64"
                className="h-full max-h-[64px] w-full max-w-[64px]"
              />
              <div className="flex flex-col items-center justify-center gap-1">
                <Heading3 title={card?.title} style="!text-[20px] " />

                <Description2 description={card?.desc} style="!text-center" />
              </div>
            </div>
          ))}
        </div>
        <p
          className={`max-w-[875px] text-center font-lora text-base text-gray ${data?.isDescriptionTop && 'hidden'}`}
        >
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default CardSection;
