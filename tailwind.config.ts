import type { Config } from 'tailwindcss'

export default {
  content: ['./src/pages/**/*.{html,js,tsx,jsx}',
  './src/components/**/*.{html,js,tsx,jsx}',
  '/public/**/*.{html,js,tsx,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

