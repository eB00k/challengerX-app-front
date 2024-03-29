/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#0D1117",
        "dark-secondary": "#161B22",
        "main-clr": "#4A77FF",
        "txt-white": "#FFFFFF",
        "txt-gray": "#A4B8D5",
        "txt-gray-2": "#D0DFFF",
        "border-clr": "#1F2937",
        "dark-content": "#242C38",
        "box-25": "#3453B3",
        "box-50": "#3F65D9",
        "box-75": "#537EFF",
        "box-100": "#6E92FF",
      },
      gridTemplateColumns: {
        layout: "240px 1fr",
        "layout-non-active-menu": "80px 1fr",
        "layout-mobile": "1fr",
        "layout-home": "1fr",
      },
      gridTemplateRows: {
        layout: "4rem 1fr",
        "layout-mobile": "4rem 1fr",
        "layout-home": "4rem 1fr",
      },
      gridTemplateAreas: {
        layout: ["sidebar navbar", "sidebar main"],
        "layout-mobile": ["navbar", "main"],
        "layout-home": ["nabar", "main"],
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas"), require("daisyui")],
};
