import { Book } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Heading3 from './Common/Heading3';
import Description2 from './Common/Description2';

const TheDayIMetSeries = () => {
  const { TheDayIMetSeries } = Book;

  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-[100px] xl:px-[148px]">
      <div className="flex flex-col items-center gap-9 lg:flex-row">
        <div className="order-2 flex w-full flex-col gap-[57px] bg-icy p-5 md:p-9 lg:order-1 lg:max-w-[708px]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <Heading3 title={TheDayIMetSeries?.title} />
              <Description2 description={TheDayIMetSeries?.desc} />
            </div>
            <div className="flex flex-col items-start gap-1 md:flex-row">
              <Heading3 title={TheDayIMetSeries?.title1} style="!text-[18px]" />
              <Description2
                description={TheDayIMetSeries?.desc1}
                style="!leading-6 "
              />
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-10">
            {TheDayIMetSeries?.cards?.map((card, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <Image
                  src={card?.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-full max-h-[36px] w-full max-w-[36px]"
                />
                <div className="flex flex-col items-center">
                  <Heading3 title={card?.title} style="!text-base" />
                  <Description2 description={card?.desc} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <Image
          src={TheDayIMetSeries?.image}
          alt=""
          width={400}
          height={400}
          className="lg::order-2 order-1 h-full w-full md:max-h-[400px] md:max-w-[400px]"
        />
      </div>
    </div>
  );
};

export default TheDayIMetSeries;
