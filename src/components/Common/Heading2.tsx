import { PropsHeading } from '@/utils/types';
import React from 'react';

const Heading2 = ({ title, style }: PropsHeading) => {
  return (
    <h2
      className={`${style} font-lora text-2xl font-medium text-yellowish md:text-4xl md:!leading-[46.08px]`}
    >
      {title}
    </h2>
  );
};

export default Heading2;
