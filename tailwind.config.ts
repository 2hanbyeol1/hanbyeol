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
      },
      animation: {
        'bounce-xy': 'bouncexy 1s linear infinite;',
      },
    },
  },
  plugins: [],
}
export default config
