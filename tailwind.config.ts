import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        bouncexy: {
          '0%, 100%': { transform: 'translate(-25%, -25%)' },
          '50%': { transform: 'translate(0, 0)' },
        },
        scale: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.3)' },
        },
      },
      animation: {
        'bounce-xy': 'bouncexy 1s linear infinite;',
        'scale-up': 'scale 1s linear forwards',
      },
    },
  },
  plugins: [],
}
export default config
