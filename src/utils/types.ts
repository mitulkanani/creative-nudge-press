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
    cards: {
      id: number;
      image: string;
      title: string;
      desc: string;
    }[];
  };
};
