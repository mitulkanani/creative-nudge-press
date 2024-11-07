// src/components/Image.tsx

import NextImage, { ImageProps } from 'next/image';

interface CustomImageProps extends ImageProps {
  alt: string;
}

const CustomImage = ({ alt, ...props }: CustomImageProps) => {
  return <NextImage {...props} alt={alt} />;
};

export default CustomImage;
