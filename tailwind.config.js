/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutrals
        ink: { DEFAULT: "#172626", soft: "#4b5c5c", faint: "#7a8a88" },
        rule: "#dfe4e2",
        band: "#f3f5f4",
        // Theme colours: one per part of Sheridan's world. `DEFAULT` is the
        // strong tone for text and marks, `tint` is the soft fill behind it.
        money: { DEFAULT: "#0c5e64", tint: "#e3f0ef" },               // Owly, households
        run: { DEFAULT: "#4f6b00", tint: "#eef8c8", mark: "#c3e23a" }, // Run With Run Club
        biz: { DEFAULT: "#b8204f", tint: "#fbe6ec" },                 // Nurture, business
        impact: { DEFAULT: "#2d6a3e", tint: "#e4f1e7" },              // charity, conservation
      },
      fontFamily: {
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', '"Helvetica Neue"', "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
