import { PropsImageWithText } from '@/utils/types';
import Image from 'next/image';
import Heading1 from './Heading1';
import Description2 from './Description2';

const ImageWithText = ({ data, style }: PropsImageWithText) => {
  return (
    <div
      className={`mx-auto flex max-w-[1440px] flex-col items-center gap-[90px] px-5 py-10 md:py-[100px] lg:flex-row xl:px-[90px] ${style}`}
    >
      <div
        className={`${data?.textOrder === 1 ? 'lg:order-1' : 'lg:order-2'} relative order-2 flex w-full flex-col gap-2`}
      >
        <Heading1 title={data?.title} />
        <div className="flex flex-col gap-6">
          {data?.description?.map((item, index) => (
            <Description2 key={index} description={item} />
          ))}
        </div>
        {data?.textLeftIcon && (
          <Image
            width={66.69}
            height={64}
            alt="left icon"
            src={data?.textLeftIcon}
            className="absolute -bottom-20 left-0"
          />
        )}
        {data?.textRightIcon && (
          <Image
            width={82.28}
            height={59.18}
            alt="right icon"
            src={data?.textRightIcon}
            className="absolute -top-10 right-10 md:-top-24"
          />
        )}
      </div>
      <div
        className={`relative ${data?.textOrder === 1 ? 'lg:order-1' : 'lg:order-2'} order-1`}
      >
        <Image
          src={data?.sideImage}
          alt="side image"
          width={450}
          height={400}
          className="h-full w-full lg:h-auto lg:max-h-[400px] lg:w-auto lg:max-w-[450px]"
        />
        {data?.imgRightIcon && (
          <Image
            width={115.7}
            height={84}
            alt="right icon"
            src={data?.imgRightIcon}
            className="absolute -bottom-7 right-2 max-w-[80px] md:-bottom-10 md:max-w-none"
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithText;
