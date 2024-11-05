'use client';
import { ButtonProps, Variant } from '@/utils/types';
import { useRouter } from 'next/navigation';
import React from 'react';

const Button = ({
  label,
  style,
  link,
  variant = Variant.PRIMARY,
}: ButtonProps & { variant?: Variant }) => {
  const router = useRouter();

  const handleClick = () => {
    if (link) {
      router.push(link);
    }
  };

  const baseStyles = `w-fit rounded-[4px] px-5  py-[14px] font-lora font-normal leading-[20.48px] transition-all disabled:opacity-50 ${style}`;

  const variantStyles: Record<Variant, string> = {
    [Variant.PRIMARY]: `bg-cyanBlue text-white `,
    [Variant.OUTLINED]: `bg-transparent text-cyanBlue border-[1.5px] border-cyanBlue `,
  };

  return (
    <button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]}`}
    >
      {label}
    </button>
  );
};

export default Button;
