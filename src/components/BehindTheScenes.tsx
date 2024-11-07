import { behindTheScenesProps } from '@/utils/types';
import React from 'react';
import Heading1 from './Common/Heading1';
import Image from 'next/image';

const BehindTheScenes = ({
  behindTheScenes,
}: {
  behindTheScenes: behindTheScenesProps;
}) => {
  return (
    <div className="relative bg-lightyellow/95 py-[100px]">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-16 px-5 xl:px-[148px]">
        <Image
          width={116}
          height={84}
          alt=" behind the scenes"
          src={behindTheScenes?.centericon}
          className=""
        />
        <div>
          <Heading1 title={behindTheScenes?.title} />
        </div>
        <div className="grid h-full w-full grid-cols-1 gap-3 md:grid-cols-2">
          <div className="grid h-full w-full grid-cols-1 gap-3">
            <Image
              width={566}
              height={300}
              alt=" behind the scenes"
              src={behindTheScenes?.images[0]}
              className="w-full"
            />
            <Image
              width={566}
              height={300}
              alt=" behind the scenes"
              src={behindTheScenes?.images[1]}
              className="w-full"
            />
          </div>
          <Image
            width={566}
            height={600}
            alt=" behind the scenes"
            src={behindTheScenes?.images[2]}
            className="w-full"
          />
        </div>
        <Image
          src={behindTheScenes?.lefticon}
          width={82}
          height={60}
          alt="instagram"
          className="absolute left-5 top-5 h-full max-h-[110px] w-full max-w-[95px] -scale-x-90 sm:left-[5%] sm:top-[1%] lg:left-[15%] lg:top-[15%]"
        />
        <Image
          src={behindTheScenes?.righticon}
          width={150}
          height={94.4}
          alt="instagram"
          className="absolute right-5 top-5 h-full max-h-[150px] w-full max-w-[94.4px] sm:right-[2%] sm:top-[5%] lg:right-[10%] lg:top-[0%]"
        />
      </div>
      <Image
        src={'/images/flowerlayer.png'}
        alt=""
        fill
        className="inset-0 z-[-1] h-full w-full object-cover"
      />
    </div>
  );
};

export default BehindTheScenes;
