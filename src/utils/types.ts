export type PropsHeroSectionCommon = {
  data: {
    title: string;
    description: string;
    backgroundImg: string;
    leftIcon: string;
    rightIcon: string;
  };
  style?: string;
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
