/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        //2500px Up
        largeScreenUp: { min: "2500px" },
        // 1600px Up
        desktopUp: { min: "1600px" },
        desktopDown: { max: "1600px" },
        midScreen: { min: "1280px", max: "1600px" },
        midScreenUp: { min: "1601px" },
        "laptop-portrait": { min: "1025px", max: "1280px" },
        //short height
        "laptop-landscape": {
          raw: "(min-width: 1200px) and (max-height: 950px)",
        },
        largeLaptopDown: { max: "1400px" },
        laptopportraitUp: { min: "1280px" },
        laptopDown: { max: "1200px" },
        laptopUp: { min: "1200px" },
        navDown: { max: "1199px" },
        navUp: { min: "1200px" },
        lg: { max: "991px" },
        "lg-up": { min: "992px" },
        ipad: { max: "1024px" },
        tabletlarge: { min: "992px", max: "1024px" },
        tablet: { min: "768px", max: "991px" },
        md: { max: "767px" },
        mdDown: { max: "768px" },
        "md-up": { min: "768px" },
        phablet: { min: "596px", max: "767px" },
        sm: { max: "595px" },
        "sm-up": { min: "596px" },
        phone: { min: "376px", max: "595px" },
        xs: { max: "375px" },
        "xs-up": { min: "376px" },
        xxs: { max: "360px" },
        "xl-up": { min: "1601px" },
        deskDown: { max: "1540px" },
        largeDesktopUp: { min: "1401px" },
      },
    },
  },
  plugins: [],
};
