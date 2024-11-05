import { Book } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Heading3 from './Common/Heading3';
import Description2 from './Common/Description2';
import Description3 from './Common/Description3';

const ChildrenBooks = () => {
  const { ChildrenBooks } = Book;
  return (
    <div className="bg-icy">
      <div className="bg-cyanBlue py-12 text-center font-lora text-[36px] leading-[46.08px] text-white">
        {ChildrenBooks?.heading}
      </div>
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-[100px] xl:px-[148px]">
        <div className="flex flex-col items-center gap-9 md:flex-row">
          <Image
            src={ChildrenBooks?.image}
            alt=""
            width={400}
            height={400}
            className="h-full max-h-[400px] w-full max-w-[400px]"
          />
          <div className="flex flex-col gap-[60px] rounded-lg bg-white p-5 md:p-9">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <Heading3 title={ChildrenBooks?.title} />
                <Description2 description={ChildrenBooks?.desc} />
              </div>
              <div className="flex flex-col gap-1">
                <Heading3 title={ChildrenBooks?.title1} style="!text-[18px]" />
                <Description2
                  description={ChildrenBooks?.desc1}
                  style="!leading-6"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 lg:flex-row lg:items-center">
              <Heading3
                title={ChildrenBooks?.title2}
                style=" !text-[14px] !leading-[20px]"
              />
              <Description3 description={ChildrenBooks?.desc2} />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-12 rounded-[8px] bg-offwhiteyellow px-5 py-6 md:flex-row md:px-12 lg:mx-[72px]">
          <Image
            src={ChildrenBooks?.icon}
            alt=""
            width={72}
            height={72}
            className="h-full max-h-[72px] w-full max-w-[72px]"
          />
          <div className="flex flex-col items-center md:items-start">
            <Heading3 title={ChildrenBooks?.title3} style="!text-[18px]" />
            <Description2
              description={ChildrenBooks?.desc3}
              style="!leading-6 !text-center md:!text-start"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChildrenBooks;
