import { HomeHeroData } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Button from './Common/Button';
import Heading1 from './Common/Heading1';
import Description2 from './Common/Description2';

const HeroSection = () => {
  const { HeroSection } = HomeHeroData;
  return (
    <div className="relative -mt-[112px] flex h-full min-h-[524px] w-full xl:min-h-[1125px]">
      <Image
        src={HeroSection.image}
        alt=""
        fill
        className="inset-0 h-full w-full object-cover"
      />

      <div className="mx-auto flex h-fit w-full max-w-[1440px] justify-end px-5 py-[100px] lg:mr-[90px] xl:mt-[234px]">
        <div className="relative flex w-full max-w-[722px] flex-col items-center gap-9 rounded-[24px] bg-lightwhite px-5 py-[72px] md:px-[49px]">
          <div className="flex flex-col gap-5">
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Heading1
                title={HeroSection.title}
                style="!text-yellow !text-center"
              />
              <Description2
                description={HeroSection.description}
                style="!text-center"
              />
            </div>

            <h3 className="text-center font-lora text-[18px] leading-6 text-lightBlack">
              {HeroSection.slogan}
            </h3>
          </div>
          <Button label={HeroSection.button.label} />
          <Image
            src="/svg/sparrow.svg"
            alt=""
            width={82.28}
            height={59.18}
            className="absolute -top-8 right-5"
          />
          <Image
            src="/svg/star.svg"
            alt=""
            width={66.69}
            height={64}
            className="absolute -bottom-5 -left-5"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
