const { nextui } = require("@nextui-org/react");
//import type { Config } from "tailwindcss";

const config: any = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // 👇 Add CSS variables
        nunito: ["var(--font-nunito)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
    colors: {
      primary: "#2dd4bf",
      secondary: "#064e3b",
      white: "#fff",
      red: "#D00000",
      stroke: "#EBEBEB",
    },
  },
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary: "#2dd4bf",
            secondary: "#064e3b",
            white: "#ffffff",
            red: "#D00000",
            stroke: "#EBEBEB",
            primaryLight: "#e3eeef",
            textlight: "#6B7280",
            lightYellow: "#FFF7E9",
            green: "#70B944",
            blue: "#4A8CDA",
            orange: "#EC8153",
            purple: "#6647BF",
            black: "#181818",
            yellow: "#FFAB1F",
          },
        },
      },
    }),
  ],
};
export default config;
