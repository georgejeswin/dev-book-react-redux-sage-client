/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      colors: {
        lbg_screen: "#ebecf0",
        dbg_navbar: "#1f1f1f",
        dbg_screen: "#262626",
        dtext_color: "#B8B8B8",
        dbody_bg: "#C0C0C0	",
      },
      boxShadow: {
        card_shadow: "4px 4px 12px rgba(0, 0, 0, 0.301983)",
        input_shadow: "inset 2px 2px 5px #141414, inset -5px -5px 10px #212121",
        button_shadow: "-5px -5px 20px #212121,  5px 5px 20px #141414",
        button_shadow_hover: "-2px -2px 5px #212121, 2px 2px 5px #141414",
        lbutton_shadow:
          "12px 12px 24px 0 rgba(0, 0, 0, 0.2),-12px -12px 24px 0 rgba(255, 255, 255, 0.5)",
        linput_shadow:
          "inset 8px 8px 16px 0 rgba(0, 0, 0, 0.2),inset -8px -8px 16px 0 rgba(255, 255, 255, 0.4);",
      },
      borderColor: {
        borderOneSide: "2px solid rgba(65, 64, 64, 0.356)",
      },
    },
  },
  plugins: [],
};
