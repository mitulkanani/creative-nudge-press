import { PropsHeading } from '@/utils/types';
import React from 'react';

const Heading1 = ({ title, style }: PropsHeading) => {
  return (
    <h1
      className={`${style} font-lora text-3xl font-medium text-darkBlack md:text-[40px] md:leading-[51.2px]`}
    >
      {title}
    </h1>
  );
};

export default Heading1;
