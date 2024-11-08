import React from 'react';
import Heading3 from './Common/Heading3';

const TitleWithVideo = ({
  videoLink,
  title,
}: {
  videoLink: string;
  title: string;
}) => {
  return (
    <div className="mx-auto flex w-fit flex-col gap-5 text-center md:gap-10">
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
    </div>
  );
};

export default TitleWithVideo;
