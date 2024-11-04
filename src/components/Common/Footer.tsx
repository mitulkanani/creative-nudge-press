import { footerData } from '@/utils/content';
import React from 'react';
import Heading1 from './Heading1';
import Description1 from './Description1';
import Image from 'next/image';
import Description2 from './Description2';
import Link from 'next/link';

const Footer = () => {
  const {
    btnLink,
    btnText,
    description,
    content,
    emailPlaceholder,
    image,
    rights,
    title,
    element,
  } = footerData;
  return (
    <>
      <div className="mx-auto mt-[64px] flex max-w-[1440px] flex-col items-center gap-10 px-5 md:gap-[106.81px] lg:flex-row xl:pl-[148px] xl:pr-[77.81px]">
        <div className="relative order-2 flex flex-col gap-10 md:gap-[72px] lg:order-1">
          <div className="flex flex-col gap-2">
            <Heading1 title={title} />
            <Description2 description={description} />
            {content?.map((item, index) => (
              <Description2 key={index} description={item} />
            ))}
          </div>
          <div className="flex w-fit items-stretch bg-icy">
            <input
              type="email"
              placeholder={emailPlaceholder}
              className="w-full max-w-[304px] rounded-l-[4px] border border-silverMist bg-transparent px-5 py-3.5 font-lora text-lg leading-[23.04px] text-slateGray outline-none"
            />
            <Link
              href={btnLink}
              className="w-fit rounded-r-[4px] bg-cyanBlue px-5 py-3.5 font-lora text-lg leading-[23.04px] text-softCloud"
            >
              {btnText}
            </Link>
          </div>
          <Image
            src={element}
            width={67}
            height={64}
            alt="star"
            className="absolute -top-16 right-5"
          />
        </div>
        <Image
          src={image}
          alt="footer image"
          width={659.38}
          height={460}
          className="order-1 lg:order-2"
        />
      </div>
      <div className="mt-10 bg-oranges py-4 text-center md:mt-[109px]">
        <Description1
          style="!text-white !leqading-[23.04px]"
          description={rights}
        />
      </div>
    </>
  );
};

export default Footer;
