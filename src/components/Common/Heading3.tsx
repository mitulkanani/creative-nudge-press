import { PropsHeading } from '@/utils/types';
import React from 'react';

const Heading3 = ({ title, style }: PropsHeading) => {
  return (
    <h2
      className={`${style || ''} w-full font-lora text-xl font-medium text-darkBlack md:text-2xl md:!leading-[30.72px]`}
    >
      {title}
    </h2>
  );
};

export default Heading3;
