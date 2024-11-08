import Image from 'next/image';
import * as runtime from 'react/jsx-runtime';
import Heading3 from './Common/Heading3';
import Description2 from './Common/Description2';
import CustomImage from './Common/CutomImage';
import Heading1 from './Common/Heading1';
import BlogImageWithText from './Blog/BlogImageWithText';
// const useMDXComponent = (code: string) => {
//   const fn = new Function(code);
//   return fn({ ...runtime }).default;
// };

const useMDXComponent = (code: string) => {
  const fn = new Function('components', code);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => fn({ ...runtime, components }).default(props);
};

const components = {
  Image,
  Heading1,
  Heading3,
  Description2,
  CustomImage,
  BlogImageWithText,
};

interface MdxProps {
  code: string;
}

export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={components} />;
}
