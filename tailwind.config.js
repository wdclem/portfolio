// import { myFont } from "@/app/layout"

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(star.cur), pointer',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      borderRadius: {
        extraLarge: '12rem'
      },
      // fontFamily: {
      //   reg: [myFont.localFont[0]],
      //   // bold: [myFont[1]],
      //   // light: [myFont[2]],
      //   // medium: [myFont[3]],
      //   // thin: [myFont[4]],
      // }, 
    },
  },
  plugins: [
    require('tailwindcss-no-scrollbar')
  ],
}
