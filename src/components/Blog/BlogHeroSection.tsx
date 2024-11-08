import { BlogPost } from '@/utils/types';
import Image from 'next/image';
import Description1 from '../Common/Description1';
import Heading2 from '../Common/Heading2';

const BlogHeroSection = ({ herosection }: { herosection: BlogPost }) => {
  return (
    <div
      className={`relative -mt-[112px] flex h-full w-full justify-center md:min-h-[808px]`}
    >
      {herosection?.heroBackground ? (
        <Image
          fill
          alt="herosection bg"
          src={herosection?.heroBackground}
          className="inset-0 h-full w-full object-cover xl:object-fill"
        />
      ) : null}

      <div className="mx-auto flex h-fit w-full max-w-[1440px] justify-center px-5">
        <div className="relative my-40 flex w-fit flex-col items-center gap-2 rounded-3xl bg-lightyellow/75 px-5 py-10 backdrop-blur-md md:mb-[109px] md:mt-[278px] md:p-[72px]">
          <Heading2
            title={herosection?.title}
            style="text-center max-w-[800px] !text-xl !leading-6 md:!text-[32px] md:!leading-[40.96px]"
          />
          {herosection?.description ? (
            <Description1
              description={herosection?.description}
              style="text-center max-w-[800px] "
            />
          ) : null}

          <Image
            width={66.69}
            height={64}
            alt="left icon"
            src={herosection?.leftIcon || '/svg/redsparrow.svg'}
            className="absolute -bottom-5 -left-5 -scale-x-90"
          />

          <Image
            width={82.28}
            height={59}
            alt="right icon"
            src={herosection?.rightIcon || '/svg/sparrow.svg'}
            className={`absolute -top-10 right-5`}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogHeroSection;
