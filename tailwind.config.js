/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      overpass: ["Overpass", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
    fontSize: {
      display: "58px",
      h1: "48px",
      h2: "34px",
      h3: "28px",
      h2s: "24px",
      h3s: "20px",
      p1: "16px",
      p2: "14px",
      caption: "12px",
    },
    colors: {
      "primary-900": "#382a78",
      "primary-500": "#6C45E5",
      "primary-400": "#a59cf1",
      "primary-300": "#c3baf8",
      "primary-200": "#E0D7FF",
      "neutral-900": "#0F0A18",
      "orange-500": "#F28705",
      "yellow-500": "#F2C31B",
      "pink-500": "#CE10A4",
      "blue-500": "#75CAE4",
      "error-100": "#F8DDDE",
      white: "#FFFFFF",
      black: "#000000",
      error: "#CB0B0B",
      ...defaultTheme.colors,
    },
    spacing: {
      8: "32px",
      11: "44px",
      12: "48px",
      14: "56px",
      18: "72px",
      25: "100px",
      29: "116px",
      36: "144px",
      41: "84px",
      43: "176px",
      53: "212px",
      60: "240px",
      100: "400px",
      144: "576px",
      ...defaultTheme.spacing,
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
