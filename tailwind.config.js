/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        xsm: ['10px', '18px'],
        sm: ['12px', '16px'],
        md: ['16px', '24px'],
        base: ['20px', '30px'],
        lg: ['44px', '58px'],
        larger: ['36px', '52px'],
      },
      colors: {
        primary: '#8C8C8C',
        secondary: '#FF868E',
        'secondary-100': '#FBE0DC',
        background: '#FFFFFF0D',
      },
    },
  },
  plugins: [],
};
