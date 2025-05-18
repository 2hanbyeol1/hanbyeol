import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

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
      desktop: '1280px',
    },
    extend: {
      fontFamily: {
        pretendard: 'var(--font-pretendard)',
      },
      colors: {
        primary: '#5372EE',
        primary2: '#879DF4',
        primary3: '#BAC7F8',
        primary4: '#EEF1FE',
        primary5: '#F5F5F5',
        dark: '#293259',
        dark2: '#676A75',
        dark3: '#797d89',
        dark4: '#D7DBEB',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(9deg)' },
        },
        check: {
          '0%': { strokeDashoffset: '100', strokeDasharray: '100' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        check: 'check 2s ease forwards',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: { color: '#293259' },
      });
    }),
  ],
} satisfies Config;
