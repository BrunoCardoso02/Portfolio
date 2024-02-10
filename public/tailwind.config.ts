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
        'about-me-container': '65rem',
        '100': '400px',
      },
      borderRadius: {
        'profile-image': '40px'
      },
      margin: {
        'primary-custom-margin': '200px',
        'second-custom-margin': '600px'
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
        black: '900',
      },
      fontSize: {
        introduceTextSize: '5rem',
        introduceSecondTextSize: '2.40rem', // 36px
        introduceThirdTextSize: '2.30rem', // 36px
      },
      lineHeight: {
        introduceSecondLineHeight: '2.5rem', // 40px
      },
      skew: {
        'up': '-40deg',
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }

        'md': '768px',
        // => @media (min-width: 768px) { ... }

        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }

        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1382px',
        // => @media (min-width: 1536px) { ... }
        '3xl': '1420px',
        '4xl': '1515px',
        '5xl': '1610px',

      }
    },
  },
  plugins: [],
};
export default config;
