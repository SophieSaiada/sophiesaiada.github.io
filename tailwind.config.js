import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "#0A0A0A",
        "tinted-text": "#ffade4",
        "white-text": "#fbdff2"
      },
      fontFamily: {
        "elder-magic": ["Elder Magic", ...defaultTheme.fontFamily.sans],
        caveat: ["Caveat", "Assistant", ...defaultTheme.fontFamily.sans],
        recursive: ["Recursive", "Assistant", ...defaultTheme.fontFamily.serif]
      },
      textShadow: {
        dino: "0px 0px 10px #FF30FF"
      }
    }
  },
  plugins: [],
  corePlugins: {
    preflight: false
  }
};
