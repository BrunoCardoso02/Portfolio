import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-gray': '#262626',
        'second-gray': '#565656',
        'third-gray': '#999',
      },
      width: {
        'profile-container': '32rem',
      },
      borderRadius: {
        'profile-image': '40px'
      },
      margin: {
        'customMargin': '200px'
      },
      fontWeight: {
        thin: '100',
        hairline: '280',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        'extra-bold': '800',
        black: '900',
      }
    },
  },
  plugins: [],
};
export default config;
