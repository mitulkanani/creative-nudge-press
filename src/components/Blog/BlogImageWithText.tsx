import { PropsBlogImageWithText } from '@/utils/types';
import Image from 'next/image';
import React from 'react';
import Heading3 from '../Common/Heading3';
import Description2 from '../Common/Description2';

const BlogImageWithText = ({
  coverImage,
  title,
  description,
  keywords,
  className = '',
  imageOrder = 1,
  imageWidth = 400,
  imageHeight = 300,
  alt = '',
}: PropsBlogImageWithText) => {
  return (
    <div
      className={`${className} flex flex-col items-center gap-5 md:flex-row md:gap-12`}
    >
      {coverImage ? (
        <Image
          src={coverImage}
          width={imageWidth}
          height={imageHeight}
          alt={alt}
          className={`${imageOrder === 1 ? 'md:order-1' : 'md:order-2'} order-1 w-full md:hidden`}
        />
      ) : null}
      {coverImage ? (
        <Image
          src={coverImage}
          width={imageWidth}
          height={imageHeight}
          alt={alt}
          className={`${imageOrder === 1 ? 'md:order-1' : 'md:order-2'} order-1 hidden md:block`}
        />
      ) : null}
      <div
        className={`${imageOrder === 1 ? 'md:order-2' : 'md:order-1'} order-2`}
      >
        <div className="flex flex-col gap-4">
          <Heading3 title={title} style="m-0" />
          <Description2 description={description} style="m-0" />
        </div>
        {keywords ? (
          <p className="m-0 mt-3 text-sm text-slateGray md:mt-6">
            <span className="font-bold">Keywords:</span>
            {keywords}
          </p>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default BlogImageWithText;
