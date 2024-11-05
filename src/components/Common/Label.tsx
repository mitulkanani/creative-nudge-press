import { PropsLabel } from '@/utils/types';
import React from 'react';

const Label = ({ labelText, style, error }: PropsLabel) => {
  return (
    <label
      htmlFor={labelText}
      className={`${style} text-xl font-medium capitalize !leading-[25.6px] text-darkBlack ${error && '!text-red-500'}`}
    >
      {labelText}
    </label>
  );
};

export default Label;
