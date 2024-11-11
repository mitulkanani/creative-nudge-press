import { aboutPageData } from '@/utils/content';
import Image from 'next/image';
import Description3 from '../Common/Description3';
import Heading3 from '../Common/Heading3';
import Description2 from '../Common/Description2';

const Profile = () => {
  const { profile } = aboutPageData;
  return (
    <div className="relative bg-snow py-10 md:py-[100px]">
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-[72px] px-5 xl:px-[148px]">
        <div className="flex flex-col items-center gap-9 lg:flex-row">
          <Image src={profile?.image} width={400} height={559} alt="profile" />
          <div className="flex flex-col gap-6 lg:max-w-[708px] lg:px-9">
            <div className="flex flex-col gap-1">
              <Heading3 title={profile?.name} />
              <Description3 description={profile?.description1} />
            </div>
            <div className="flex flex-col gap-6">
              {profile?.description2?.map((item, index) => (
                <Description2 key={index} description={item} />
              ))}
            </div>
          </div>
          {profile?.element && (
            <Image
              src={profile?.element}
              width={124.32}
              height={84}
              alt="element"
              className="absolute -top-10 right-2"
            />
          )}
        </div>
        <div className="flex flex-wrap items-stretch justify-center gap-6 md:flex-nowrap">
          {profile?.expertise?.map((item, index) => (
            <div
              key={index}
              className="flex h-full w-fit flex-col items-center gap-4 md:w-full"
            >
              <Image
                src={item?.icon}
                width={36}
                height={36}
                alt={item?.title}
                className=""
              />
              <p className="text-center font-lora text-base font-medium leading-[20.48px] text-darkBlack">
                {item?.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
