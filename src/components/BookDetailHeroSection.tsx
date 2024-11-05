import Image from 'next/image';
import React from 'react';
import Description1 from './Common/Description1';
import Heading1 from './Common/Heading1';
import { herosectionProps } from '@/utils/types';

const BookDetailHeroSection = ({
  herosection,
}: {
  herosection: herosectionProps;
}) => {
  // const { herosection } = detailBooksData;
  return (
    <div
      className={`relative -mt-[112px] h-full w-full bg-cyanBlue pb-[158px]`}
    >
      <Image
        fill
        alt="herosection bg"
        src={herosection?.backgroundImg}
        className="inset-0 h-full min-h-[802px] w-full object-cover xl:object-fill"
      />

      <div className="mx-auto flex w-full max-w-[1440px] justify-center px-5">
        <div className="relative mb-[109px] mt-[278px] flex w-full max-w-[944px] flex-col gap-2 rounded-3xl bg-lightyellow/75 px-6 py-[72px] backdrop-blur-md">
          <Heading1 title={herosection?.title} style="text-center" />
          <Description1
            description={herosection?.description}
            style="text-center"
          />
          <Image
            width={66.69}
            height={64}
            alt="left icon"
            src={herosection?.leftIcon}
            className="absolute -bottom-5 -left-5"
          />
          <Image
            width={128}
            height={74}
            alt="right icon"
            src={herosection?.rightIcon}
            className={`absolute -right-5 -top-5`}
          />
        </div>
      </div>
    </div>
  );
};

export default BookDetailHeroSection;
