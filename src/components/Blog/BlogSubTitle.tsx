import { ReactNode } from 'react';

interface SubTitleProps {
  children: ReactNode;
  style?: string;
}

export const SubTitle = ({ children, style }: SubTitleProps) => {
  return (
    <h1
      className={`text-2xl font-medium !leading-[30.72px] text-darkBlack ${style}`}
    >
      {children}
    </h1>
  );
};

export default SubTitle;
