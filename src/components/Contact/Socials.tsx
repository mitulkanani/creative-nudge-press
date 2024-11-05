import { contactPageData } from '@/utils/content';
import React from 'react';
import Heading3 from '../Common/Heading3';
import Image from 'next/image';
import { SocialLink } from '@/utils/types';
import Description2 from '../Common/Description2';
import Link from 'next/link';

const Socials = () => {
  const { socialLinks }: { socialLinks: SocialLink[] } = contactPageData;

  return (
    <div className="bg-snow px-5 py-10 md:py-[100px] xl:px-[148px]">
      <div className="mx-auto grid max-w-[1440px] gap-5 md:grid-cols-2 lg:gap-9">
        {socialLinks?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-lg bg-white p-5 md:gap-6 md:p-9"
          >
            <Heading3 title={item?.title} />
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                {item?.links?.map((img, imgIndex) => (
                  <Link href={img?.link || '#'} key={imgIndex}>
                    <Image
                      src={img?.icon}
                      width={36}
                      height={36}
                      alt={img?.alt || 'icon'}
                      className="max-w-[30px] md:max-w-none"
                    />
                  </Link>
                ))}
              </div>
              <Description2 description={item?.description} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Socials;
