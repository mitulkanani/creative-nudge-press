import React from 'react';
import Heading3 from './Common/Heading3';
import Image from 'next/image';

const TitleWithVideo = ({
  videoLink,
  title,
}: {
  videoLink: string;
  title: string;
}) => {
  return (
    <div className="relative mx-auto flex w-fit flex-col gap-5 text-center md:gap-10">
      <Heading3 title={title} />

      <video
        width="720"
        height="405"
        src={videoLink}
        title="YouTube video player"
        muted
        autoPlay
        className="rounded-lg"
      />
      <Image
        src={'/svg/star.svg'}
        width={67}
        height={64}
        alt="star"
        className="absolute left-0 top-0 hidden sm:block xl:-left-32 xl:bottom-10 xl:top-auto"
      />
      <Image
        src={'/svg/sparrowYellow.svg'}
        width={124.32}
        height={84}
        alt="sparrowYellow"
        className="absolute -top-0 right-0 hidden max-w-20 -translate-y-1/2 sm:block md:max-w-none xl:-right-52 xl:top-1/2"
      />
    </div>
  );
};

export default TitleWithVideo;
