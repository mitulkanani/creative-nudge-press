import React from 'react';

import { Book } from '@/utils/content';
import Description2 from './Common/Description2';

import Heading3 from './Common/Heading3';
import Image from 'next/image';

const Nonfiction = () => {
  const { Nonfiction } = Book;
  return (
    <div className="bg-icy">
      <div className="bg-yellowish py-12 text-center font-lora text-[36px] leading-[46.08px] text-white">
        {Nonfiction?.heading}
      </div>

      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-6 px-5 py-[100px] xl:px-[148px]">
        <div className="flex flex-col items-center gap-9 lg:flex-row">
          <Image
            src={Nonfiction?.image}
            alt=""
            width={400}
            height={400}
            className="h-full max-h-[400px] w-full max-w-[400px]"
          />
          <div className="flex flex-col gap-6 rounded-lg bg-white p-5 md:p-9 md:pb-[58px]">
            <div className="flex flex-col gap-1">
              <Heading3 title={Nonfiction?.title} />
              <Description2
                description={Nonfiction?.description}
                style="!leading-6"
              />
            </div>
            <div>
              {Nonfiction?.points?.map((point, index) => (
                <div key={index}>
                  <li className="text-base leading-6 text-gray">{point}</li>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nonfiction;
