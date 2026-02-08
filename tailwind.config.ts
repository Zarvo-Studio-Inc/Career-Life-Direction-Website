import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand color palette
        brand: {
          DEFAULT: '#09366d',
          50: '#e8f0f9',
          100: '#c1d9ef',
          200: '#96c0e4',
          300: '#6ba7d9',
          400: '#4b94d1',
          500: '#2a81c8',
          600: '#2573b8',
          700: '#1e62a3',
          800: '#17528e',
          900: '#09366d',
        },
        // Calm, neutral color palette
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
}
export default config
