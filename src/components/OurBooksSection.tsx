import { HomeHeroData } from '@/utils/content';
import Image from 'next/image';
import React from 'react';
import Heading1 from './Common/Heading1';
import Description1 from './Common/Description1';
import Heading3 from './Common/Heading3';
import Description2 from './Common/Description2';
import Link from 'next/link';

const OurBooksSection = () => {
  const { OurBooksSection } = HomeHeroData;
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 py-[84px] md:px-0">
      <div className="flex flex-col gap-[64px]">
        <div className="flex flex-col items-center justify-center gap-1">
          <Heading1 title={OurBooksSection.title} />
          <Description1 description={OurBooksSection.description} />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {OurBooksSection.cards.map((card, index) => (
            <Link
              href={`/detailbook/${card?.title.replace(/\s+/g, '-')}`}
              key={index}
              className="flex w-full max-w-[404px] flex-col gap-5"
            >
              <div className="h-full max-h-[404px] w-full max-w-[404px]">
                <Image
                  src={card.image}
                  alt=""
                  width={404}
                  height={404}
                  className="h-full w-full rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-1">
                <Heading3
                  title={card.title}
                  style="!text-[20px] !leading-[25.6px] "
                />

                <div className="flex flex-col gap-5">
                  {card.description.map((desc, index) => (
                    <div key={index}>
                      <Description2 description={desc} />
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurBooksSection;
