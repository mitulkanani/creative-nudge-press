import { PropsDescription } from '@/utils/types';
import React from 'react';

const Description2 = ({ description, style }: PropsDescription) => {
  return (
    <p className={`${style} font-lora text-sm text-slateGray md:text-base`}>
      {description}
    </p>
  );
};

export default Description2;
