import Image from 'next/image';

interface CustomImageProps {
  alt: string;
  width: number;
  height: number;
  className?: string;
  src: string;
}

// Custom Image Component
const CustomImage = ({
  src,
  alt,
  className,
  width = 500,
  height = 500,
}: CustomImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className} `}
    />
  );
};

export default CustomImage;
