/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundClip: ["hover", "focus"],
      screens: {
        about_width: { min: "600px", max: "1390px" },
        about_width_mobile: { max: "600px" },
        about_width_font: { max: "460px" },
        about_width_logo: { min: "640px", max: "1140px" },
        about_width_logo_mobile: { min: "450px", max: "640px" },
        about_width_logo_mobile_small: { max: "450px" },
        em: { min: "550px", max: "730px" },
        emobile: { min: "490px", max: "550px" },
        es: { max: "490px" },
      },
      colors: {
        text: {
          50: "#f7ebfa",
          100: "#eed7f4",
          200: "#ddafe9",
          300: "#cd87de",
          400: "#bc5fd3",
          500: "#ab37c8",
          600: "#892ca0",
          700: "#672178",
          800: "#441650",
          900: "#220b28",
          950: "#110514",
        },
        background: {
          50: "#f7ebfa",
          100: "#eed6f5",
          200: "#ddadeb",
          300: "#cd85e0",
          400: "#bc5cd6",
          500: "#ab33cc",
          600: "#8929a3",
          700: "#671f7a",
          800: "#441452",
          900: "#220a29",
          950: "#110514",
        },
        primary: {
          50: "#eefaeb",
          100: "#ddf4d7",
          200: "#bbeaae",
          300: "#99df86",
          400: "#77d45e",
          500: "#56c936",
          600: "#44a12b",
          700: "#337920",
          800: "#225115",
          900: "#11280b",
          950: "#091405",
        },
        secondary: {
          50: "#f6ebfa",
          100: "#edd7f4",
          200: "#dcafe9",
          300: "#ca87de",
          400: "#b85fd3",
          500: "#a637c8",
          600: "#852ca0",
          700: "#642178",
          800: "#431650",
          900: "#210b28",
          950: "#110514",
        },
        accent: {
          50: "#eefaeb",
          100: "#ddf4d7",
          200: "#bbeaae",
          300: "#99df86",
          400: "#77d45e",
          500: "#56c936",
          600: "#44a12b",
          700: "#337920",
          800: "#225115",
          900: "#11280b",
          950: "#091405",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },

      fontFamily: {
        OpenSans: ["Open Sans", " sans-serif"],
        NotoSans: ["Noto Sans", " sans-serif"],
      },
      backgroundImage: {
        herobg: "url('/src/assets/herobg.webp')",
        herobgMobile: "url('/src/assets/herobgMobile.webp')",
        alumini: "url('/src/assets/TimelineWebsite.webp')",
        aluminiMobile: "url('/src/assets/TimelineMobile.webp')",
      },
    },
  },
  plugins: ["daisyui"],
};
