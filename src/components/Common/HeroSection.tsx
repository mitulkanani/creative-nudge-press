import Image from 'next/image';
import React from 'react';
import { PropsHeroSectionCommon } from '@/utils/types';
import Heading2 from './Heading2';
import Description1 from './Description1';

const HeroSection = ({
  data,
  style,
  isRightImgRotate,
}: PropsHeroSectionCommon) => {
  const { title, description, backgroundImg, leftIcon, rightIcon } = data;
  return (
    <div className={`relative -mt-[112px] h-full w-full ${style}`}>
      <Image
        fill
        alt="herosection bg"
        src={backgroundImg}
        priority={true}
        className="inset-0 h-full min-h-[550px] w-full object-cover xl:object-fill"
      />

      <div className="mx-auto flex w-full max-w-[1440px] justify-end px-5 xl:pr-[90px]">
        <div className="relative mb-[109px] mt-[191px] flex w-full max-w-[722px] flex-col gap-2 rounded-3xl bg-frost/75 px-6 py-[72px] backdrop-blur-md">
          <Heading2 title={title} style="text-center" />
          <Description1 description={description} style="text-center" />
          <Image
            width={66.69}
            height={64}
            alt="left icon"
            src={leftIcon}
            className="absolute -bottom-5 -left-5"
          />
          <Image
            width={67}
            height={50}
            alt="right icon"
            src={rightIcon}
            className={`absolute ${isRightImgRotate ? '-top-8 right-5 rotate-[41deg]' : '-right-5 -top-5'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
