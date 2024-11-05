import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        frost: '#FFF8E6',
        darkBlack: '#323232',
        yellowish: '#FFB703',
        slateGray: '#727272',
        snow: '#FBFBFB',
        oranges: '#FB8500',
        icy: '#FBFBFF',
        silverMist: '#D7D7D7',
        softCloud: '#F6F6F6',
        cyanBlue: '#219EBC',
        yellow: '#FFB703',
        gray: '#727272',
        lightBlack: '#323232',
        lightwhite: '#FFF8E6BF',
        lightyellow: '#FFF8E6',
        mist: '#F1F1F1',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
