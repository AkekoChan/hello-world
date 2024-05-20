import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "waikawa-gray": {
        "50": "#f2f7fb",
        "100": "#e7f0f8",
        "200": "#d3e2f2",
        "300": "#b9cfe8",
        "400": "#9cb6dd",
        "500": "#839dd1",
        "600": "#6a7fc1",
        "700": "#6374ae",
        "800": "#4a5989",
        "900": "#414e6e",
        "950": "#262c40",
      },
    },
    extend: {
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
export default config;
