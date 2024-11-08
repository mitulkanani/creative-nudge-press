import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{md,mdx}',
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
        offwhiteyellow: '#FBFAF6',
        offWhiteBlack: '#D3D3D3',
        lightBlue: ' #0C9BCB',
        mist: '#F1F1F1',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [typography],
};
export default config;
