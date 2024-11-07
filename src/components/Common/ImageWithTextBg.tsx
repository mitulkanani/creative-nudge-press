import { upcomingBooksProps } from '@/utils/types';
import Image from 'next/image';
import Description2 from './Description2';
import Heading3 from './Heading3';
import Description3 from './Description3';

const ImageWithTextBg = ({ data }: upcomingBooksProps) => {
  return (
    <div className={`${data?.isTextBgWhite ? 'bg-white' : 'bg-icy'} w-full`}>
      <div
        className={`relative mx-auto flex h-auto w-full max-w-[1440px] flex-col items-center justify-center gap-9 px-5 py-10 md:py-[100px] lg:flex-row xl:px-[148px]`}
      >
        <div
          className={`${data?.textOrder === 1 ? 'lg:order-1' : 'lg:order-2'} ${data?.isTextBgWhite ? 'bg-icy' : 'bg-white'} order-2 flex w-full flex-col justify-between p-9 ${data?.keymessage?.key || data?.keymessage?.value ? 'gap-[10px] lg:gap-[129px] lg:py-[72px]' : 'gap-0 lg:py-[36px]'} `}
        >
          <div className="flex flex-col gap-2">
            <Heading3 title={data?.title} />
            <div className="flex flex-col gap-6">
              {data?.description?.map((item, index) => (
                <Description2 key={index} description={item} />
              ))}
            </div>
          </div>
          {data?.keymessage && (
            <div className="flex items-center gap-1">
              {data?.keymessage?.key && (
                <Heading3
                  title={data?.keymessage?.key}
                  style="!text-[14px] !font-medium "
                />
              )}
              {data?.keymessage?.value && (
                <Description3
                  description={data?.keymessage?.value}
                  style="!text-darkBlack"
                />
              )}
            </div>
          )}
        </div>
        <div
          className={`relative ${data?.textOrder === 1 ? 'lg:order-2' : 'lg:order-1'} order-1 h-auto lg:w-full lg:max-w-[400px]`}
        >
          <Image
            src={data?.sideImage}
            alt="side image"
            width={400}
            height={400}
            className="h-full w-full md:h-full md:max-h-[400px] md:w-full md:max-w-[400px]"
          />
        </div>
        {data?.rightIcon && (
          <Image
            src={data?.rightIcon}
            alt="icons"
            width={70}
            height={64}
            className="mah-h-[100px] absolute bottom-20 right-[10%] z-[999] hidden max-w-[100px] lg:block"
          />
        )}
        {data?.leftIcon && (
          <Image
            src={data?.leftIcon}
            alt="icons"
            width={70}
            height={64}
            className="absolute left-[35%] top-20 z-[999] hidden max-h-[100px] max-w-[100px] -scale-x-90 lg:block"
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithTextBg;
