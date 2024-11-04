import { PropsDescription } from '@/utils/types';
import React from 'react';

const Description1 = ({ description, style }: PropsDescription) => {
  return (
    <p
      className={`${style} font-lora text-base text-slateGray md:text-lg md:!leading-[26px]`}
    >
      {description}
    </p>
  );
};

export default Description1;
