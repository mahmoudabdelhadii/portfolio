import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      GTWalshPro: ["GT Walsheim Pro", "sans-serif"],
    },
    container: {
      center: true,
      

      screens: {
        '2xl': '3000px',
      },
    },
    extend: {
      keyframes: {
        'accordion-down': {
          from: { height: "0" },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: "0" },
        },
        animatedgradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        gradient: 'animatedgradient 6s ease infinite alternate',
      },
      colors: {
        primary: '#0C0C0F',
        secondary: '#F5F5F5',
        accent: '#689af8',
        white: '#F5F5F5',
        beige: '#F8F7F4',
        black:'#0C0C0F'
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
 
}
export default config
