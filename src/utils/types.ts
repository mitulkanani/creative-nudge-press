import { ChangeEvent } from 'react';

export type PropsHeroSectionCommon = {
  data: {
    title: string;
    description: string;
    backgroundImg: string;
    leftIcon: string;
    rightIcon: string;
  };
  style?: string;
  isRightImgRotate?: boolean;
};

export type PropsHeading = {
  title: string;
  style?: string;
};

export type PropsDescription = {
  description: string;
  style?: string;
};

export type PropsImageWithText = {
  data: {
    title: string;
    description: string[];
    sideImage: string;
    imgOrder: number;
    textOrder: number;
    textLeftIcon?: string;
    textRightIcon?: string;
    imgRightIcon?: string;
  };
  style?: string;
};

export type ButtonProps = {
  label: string;
  style?: string;
  link?: string;
  variant?: string;
};
export enum Variant {
  PRIMARY = 'primary',
  OUTLINED = 'outlined',
}
export type data = {
  data: {
    title: string;
    description: string;
    isDescriptionTop?: boolean;
    cards: {
      id: number;
      image: string;
      title: string;
      desc: string;
    }[];
  };
};

export interface BlogDetailsProps {
  params: {
    slug: string;
  };
}

export type PropsLabel = {
  labelText: string;
  style?: string;
  error?: string;
};

export interface InputFieldProps {
  name: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  labelText: string;
}

export interface Link {
  icon: string;
  link?: string;
  alt?: string;
}

export interface SocialLink {
  title: string;
  links: Link[];
  description: string;
}
