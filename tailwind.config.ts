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
        cyanBlue: '#219EBC',
        yellow: '#FFB703',
        gray: '#727272',
        lightBlack: '#323232',
        lightwhite: '#FFF8E6BF',
        lightyellow: '#FFF8E6',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;
