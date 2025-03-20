/* eslint-disable import/no-anonymous-default-export */
/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    flowbite.content(),
  ],
  theme: {
    colors: {
      // Color scales
      blue: {
        100: "#8EB2EB",
        200: "#78A1E2",
        300: "#5C8BD6",
        400: "#3566B6",
        500: "#2252A0",
        600: "#174082",
      },
      green: {
        100: "#BEEFE8",
        200: "#98E1D7",
        300: "#66CCBE",
        400: "#2C968C",
        500: "#1B7E74",
        600: "#00665B",
      },
      yellow: {
        100: "#FFF3C2",
        200: "#F5DF84",
        300: "#F5D970",
        400: "#EED163",
        500: "#E4C443",
        600: "#C49D05",
      },
      purple: {
        100: "#DCB6F7",
        200: "#CC9DF1",
        300: "#C086EA",
        400: "#7C46A4",
        500: "#693091",
        600: "#532277",
      },
      red: {
        100: "#E9A5AD",
        200: "#DF9098",
        300: "#D1757E",
        400: "#B1384A",
        500: "#A82431",
        600: "#8E0B18",
      },
      // Monochrome scales
      black: {
        100: "#667085",
        200: "#4E576A",
        300: "#373F4E",
        400: "#303645",
        500: "#212631",
        600: "#0A0E15",
      },
      white: {
        100: "#FFFFFF",
        200: "#F0F1F5",
        300: "#E0E4EB",
        400: "#D1D6E0",
        500: "#C6CDDB",
        600: "#BFC6D4",
      },
      gray: {
        200: "#E0E4EB",
        700: "#303645",
      },
    },
    extend: {
      backgroundColor: {
        "surface-primary": "rgb(var(--surface-primary))",
      },
      textColor: {
        primary: "rgb(var(--text-primary))",
        body: "rgb(var(--text-body))",
      },
      fontFamily: {
        archiv: ["Archiv Grotesk", "sans-serif"],
        work: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        // Desktop typography
        "d-h1": ["80px", { lineHeight: "96px", letterSpacing: "-3.2px" }],
        "d-h2": ["61px", { lineHeight: "73.2px", letterSpacing: "-2.44px" }],
        "d-h3": ["47px", { lineHeight: "56.4px", letterSpacing: "-1.88px" }],
        "d-h4": ["36px", { lineHeight: "43.2px", letterSpacing: "-1.44px" }],
        "d-h5": ["27px", { lineHeight: "32.4px", letterSpacing: "-1.08px" }],
        "d-h6": ["21px", { lineHeight: "25.2px", letterSpacing: "-0.84px" }],
        "d-subtitle": [
          "18px",
          { lineHeight: "21.6px", letterSpacing: "-0.72px" },
        ],
        "d-body": ["16px", { lineHeight: "19.2px", letterSpacing: "-0.64px" }],
        "d-label": ["14px", { lineHeight: "16.8px", letterSpacing: "-0.56px" }],
        "d-tooltip": ["10px", { lineHeight: "12px", letterSpacing: "-0.4px" }],

        // Mobile typography
        "m-h1": ["64px", { lineHeight: "76.8px", letterSpacing: "-2.56px" }],
        "m-h2": ["52px", { lineHeight: "62.4px", letterSpacing: "-2.08px" }],
        "m-h3": ["44px", { lineHeight: "52.8px", letterSpacing: "-1.76px" }],
        "m-h4": ["36px", { lineHeight: "43.2px", letterSpacing: "-1.44px" }],
        "m-h5": ["27px", { lineHeight: "32.4px", letterSpacing: "-1.08px" }],
        "m-h6": ["21px", { lineHeight: "25.2px", letterSpacing: "-0.84px" }],
        "m-subtitle": [
          "18px",
          { lineHeight: "21.6px", letterSpacing: "-0.72px" },
        ],
        "m-body": ["16px", { lineHeight: "19.2px", letterSpacing: "-0.64px" }],
        "m-label": ["14px", { lineHeight: "16.8px", letterSpacing: "-0.56px" }],
        "m-tooltip": ["10px", { lineHeight: "12px", letterSpacing: "-0.4px" }],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
