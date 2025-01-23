import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      mobile: '360px',
      foldable: '523px',
      tablet: '768px',
    },
    extend: {
      colors: {
        primary: '#5372EE',
        primary2: '#879DF4',
        primary3: '#BAC7F8',
        primary4: '#EEF1FE',
        primary5: '#F5F5F5',
        dark: '#293259',
        dark2: '#676A75',
        dark3: '#A6ACC2',
        dark4: '#D7DBEB',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
