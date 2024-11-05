import { InputFieldProps } from '@/utils/types';
import React from 'react';

const InputField: React.FC<InputFieldProps> = ({
  name,
  type = 'text',
  placeholder = 'Enter value',
  value,
  onChange,
  error,
  touched,
  labelText,
}) => {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={labelText}
        className={`text-lg font-medium capitalize text-darkBlack md:text-xl md:!leading-[25.6px] ${touched && error && '!text-red-500'}`}
      >
        {labelText}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border border-mist bg-snow px-5 py-3.5 text-base text-darkBlack outline-none ${touched && error && 'border-red-500'} transition-all`}
      />
      {touched && error && <p className="text-base text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
