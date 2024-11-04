import { HomeHeroData } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Button from './common/Button';

const JoinOurCreativeCommunity = () => {
  const { JoinOurCreativeCommunitySection } = HomeHeroData;
  return (
    <div className="relative bg-lightyellow/95">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center gap-[72px] px-5 py-[100px] pb-[150px] xl:px-[90px] xl:pb-[100px]">
        <div className="flex flex-col items-center justify-center gap-12">
          <Image
            src={JoinOurCreativeCommunitySection?.image}
            alt=""
            width={116}
            height={84}
            className="h-full max-h-[84px] w-full max-w-[116px]"
          />
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="flex flex-col items-center justify-center gap-2">
              <h1 className="text-center font-lora text-[40px] font-medium leading-[51.2px] text-yellow">
                {JoinOurCreativeCommunitySection?.title}
              </h1>
              <p className="w-full max-w-[676px] text-center font-lora text-[20px] leading-[30px] text-lightBlack">
                {JoinOurCreativeCommunitySection?.description}
              </p>
            </div>
            <p className="w-full max-w-[600px] text-center font-lora text-base leading-6 text-gray">
              {JoinOurCreativeCommunitySection?.subdescritpion}
            </p>
          </div>
        </div>
        <Button label={JoinOurCreativeCommunitySection?.button?.label} />
        <Image
          src={'/images/flowerlayer.png'}
          alt=""
          fill
          className="inset-0 z-[-1] h-full w-full object-cover"
        />

        <div className="absolute bottom-0 right-0 flex items-end justify-end">
          <Image
            src={'/svg/smallrainbow.svg'}
            alt=""
            width={153}
            height={90.71}
            className="bottom-0 right-[18%] object-cover lg:size-max"
          />
          <Image
            src={'/svg/pencil.svg'}
            alt=""
            width={193.58}
            height={200}
            className="bottom-0 right-[8%] size-24 object-cover lg:size-max"
          />
          <Image
            src={'/svg/multiplebooks.svg'}
            alt=""
            width={281.54}
            height={202.37}
            className="bottom-0 right-0 size-24 object-cover lg:size-max"
          />
        </div>
        <Image
          src={'/svg/redsparrow.svg'}
          alt=""
          width={71.92}
          height={70.3}
          className="absolute right-[10%] top-[5%] object-cover md:right-[15%] md:top-[20%]"
        />
        <Image
          src={'/svg/plane.svg'}
          alt=""
          width={145}
          height={94.4}
          className="absolute bottom-[20%] left-[5%] size-20 object-cover md:size-max"
        />
        <Image
          src={'/svg/bluesparrow.svg'}
          alt=""
          width={145}
          height={94.4}
          className="absolute left-[2%] top-[16%] size-20 object-cover md:left-[15%] md:top-[20%] md:size-max"
        />
      </div>
    </div>
  );
};

export default JoinOurCreativeCommunity;
