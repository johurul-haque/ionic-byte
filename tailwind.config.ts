import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      keyframes: {
        pulse: {
          from: { opacity: '0.25' },
          '50%': { opacity: '0.4' },
          to: { opacity: '0.25' },
        },
        scale: {
          from: { scale: '0' },
          to: { scale: '1' },
        },
      },
      animation: {
        'long-pulse': 'pulse 6.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        size: 'scale .4s cubic-bezier(0.4, 0, 0.6, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
} satisfies Config;

export default config;
