import { PropsDescription } from '@/utils/types';
import React from 'react';

const Description3 = ({ description, style }: PropsDescription) => {
  return (
    <p className={`${style} font-lora text-xs text-slateGray md:text-sm`}>
      {description}
    </p>
  );
};

export default Description3;
