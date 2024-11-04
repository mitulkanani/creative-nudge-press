import { HomeHeroData } from '@/utils/content';
import Image from 'next/image';
import React from 'react';

const OurBooksSection = () => {
  const { OurBooksSection } = HomeHeroData;
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-[84px] md:px-0">
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <h1 className="font-lora text-[40px] font-medium leading-[51.2px] text-lightBlack">
            {OurBooksSection.title}
          </h1>
          <p className="font-lora text-[18px] leading-6 text-gray">
            {OurBooksSection.description}
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {OurBooksSection.cards.map((card, index) => (
            <div
              key={index}
              className="flex w-full max-w-[404px] flex-col gap-5"
            >
              <Image
                src={card.image}
                alt=""
                width={404}
                height={350}
                className="h-full max-h-[350px] w-full max-w-[404px]"
              />
              <div className="flex flex-col">
                <h1 className="font-lora text-[20px] leading-[25.6px] text-lightBlack">
                  {card.title}
                </h1>
                <div className="flex flex-col">
                  {card.description.map((desc, index) => (
                    <p
                      key={index}
                      className="font-lora text-base leading-6 text-gray"
                    >
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBooksSection;
