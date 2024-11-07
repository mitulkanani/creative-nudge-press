import React from 'react';
import Heading1 from './Common/Heading1';
import { socialDataProps } from '@/utils/types';
import Image from 'next/image';
import Heading3 from './Common/Heading3';
import Link from 'next/link';

const ArtisticJourney = ({ socialData }: { socialData: socialDataProps }) => {
  return (
    <div className="bg-icy">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-16 px-5 py-[100px] xl:px-[148px]">
        <Heading1 title={socialData?.title} style="!text-center" />
        <div className="grid grid-cols-1 gap-9 md:grid-cols-2">
          {socialData?.icons?.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-6 rounded-lg bg-white p-6"
            >
              <Heading3 title={item?.title} />
              <div className="flex gap-6">
                <Image
                  src={item?.icon}
                  width={48}
                  height={48}
                  alt="instagram"
                  className="h-full max-h-[48px] w-full max-w-[48px]"
                />
                <div className="flex flex-col">
                  <Heading3 title={item?.username} style="!text-[18px]" />
                  <Link href={item?.link} className="text-lightBlue">
                    {item?.link}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={socialData?.lefticon}
          width={66.69}
          height={64}
          alt="instagram"
          className="absolute left-[10%] top-0 h-full max-h-[64px] w-full max-w-[66.69px] xl:left-[18%] xl:top-[32%]"
        />
        <Image
          src={socialData?.righticon}
          width={150}
          height={94.4}
          alt="instagram"
          className="absolute -bottom-[5%] right-[10%] h-full max-h-[150px] w-full max-w-[94.4px] xl:bottom-[10%] xl:right-[8%]"
        />
      </div>
    </div>
  );
};

export default ArtisticJourney;
