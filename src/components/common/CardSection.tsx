import { data } from '@/utils/types';
import Image from 'next/image';
import React from 'react';

const CardSection = ({ data }: data) => {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-[84px] xl:px-[90px]">
      <div className="flex flex-col gap-[72px]">
        <div className="flex flex-col items-center gap-1">
          <h1 className="font-lora text-[40px] font-medium leading-[51.2px] text-lightBlack">
            {data?.title}
          </h1>
          <p className="font-lora text-[18px] leading-6 text-gray">
            {data?.description}
          </p>
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
                <h1 className="font-lora text-[20px] leading-[25.6px] text-lightBlack">
                  {card?.title}
                </h1>
                <p className="text-center font-lora text-base leading-6 text-gray">
                  {card?.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
