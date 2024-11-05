import { currentBookProps } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import Heading3 from './Common/Heading3';

import Description2 from './Common/Description2';
import Button from './Common/Button';

const CurrentBook = ({ currentBook }: { currentBook: currentBookProps }) => {
  return (
    <div>
      <div className="bg-yellowish py-12 text-center font-lora text-[36px] leading-[46.08px] text-white">
        {currentBook?.heading}
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[72px] px-5 py-[100px] xl:px-[148px]">
        <div className="flex flex-col items-center gap-9 lg:flex-row">
          {' '}
          <Image
            src={currentBook.image}
            alt=""
            width={400}
            height={448}
            className="h-full w-full md:max-h-[448px] md:max-w-[400px]"
          />
          <div className="flex flex-col gap-6 rounded-lg bg-icy p-5 md:p-9">
            <div className="flex flex-col gap-1">
              <Heading3 title={currentBook?.title} />
              <div>
                {currentBook?.points?.map((point, index) => (
                  <div key={index} className="text-base leading-6 text-gray">
                    {' '}
                    - {point}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <Heading3
                title={currentBook?.title1}
                style="!text-[18px] !font-normal"
              />
              <Description2 description={currentBook?.desc} />
            </div>
            <Button label={currentBook?.button?.btnText} />
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {currentBook?.cards?.map((card, index) => (
            <div
              key={index}
              className="flex w-full max-w-[209px] flex-col items-center gap-8"
            >
              <Image
                src={card?.icon}
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
      </div>
    </div>
  );
};

export default CurrentBook;
