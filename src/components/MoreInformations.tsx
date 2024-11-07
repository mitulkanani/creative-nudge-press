import { moreInformationsProps } from '@/utils/types';
import React from 'react';
import Heading1 from './Common/Heading1';
import Description3 from './Common/Description3';
import Image from 'next/image';
import Heading3 from './Common/Heading3';

const MoreInformations = ({
  moreInformations,
}: {
  moreInformations: moreInformationsProps;
}) => {
  return (
    <div className="relative bg-icy py-[100px]">
      <div className="relative mx-auto max-w-[1440px] px-5 xl:px-[148px]">
        <div className="flex flex-col gap-[72px] lg:flex-row">
          <div className="flex flex-col gap-1">
            <Heading1 title={moreInformations?.title} />
            <Description3 description={moreInformations?.desc} />
          </div>
          <div className="flex flex-col gap-12">
            {moreInformations?.cards?.map((card, index) => (
              <div key={index}>
                <div className="flex gap-9">
                  <Image
                    width={64}
                    height={64}
                    alt="left icon"
                    src={card?.icon}
                    className="h-full max-h-[64px] w-full max-w-[64px]"
                  />
                  <div className="flex flex-col gap-1">
                    <Heading3 title={card?.title} />
                    <Description3 description={card.desc} />
                    <div className="flex flex-col">
                      {card?.points?.map((point, index) => (
                        <div key={index} className="flex flex-col gap-1">
                          <Description3 description={point} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Image
          src={'/svg/sparrow.svg'}
          alt=""
          width={83}
          height={60}
          className="absolute bottom-[55%] right-[20%] hidden object-cover md:block lg:bottom-1/2 lg:left-[20%] lg:size-max"
        />
      </div>
      <div className="absolute bottom-0 left-0 flex items-end justify-end">
        <Image
          src={'/svg/multiplebooks.svg'}
          alt=""
          width={281.54}
          height={202.37}
          className="bottom-0 left-0 size-24 -scale-x-90 object-cover lg:size-max"
        />
        <Image
          src={'/svg/pencil.svg'}
          alt=""
          width={193.58}
          height={200}
          className="bottom-0 left-[8%] -ml-8 size-24 object-cover lg:size-max"
        />

        <Image
          src={'/svg/smallrainbow.svg'}
          alt=""
          width={153}
          height={90.71}
          className="bottom-0 left-[18%] -ml-5 object-cover lg:size-max"
        />
      </div>

      <Image
        src={'/svg/starWithRainbow.svg'}
        alt=""
        width={193.58}
        height={200}
        className="absolute bottom-[55%] left-0 size-24 object-cover lg:bottom-1/2 lg:size-max"
      />
    </div>
  );
};

export default MoreInformations;
