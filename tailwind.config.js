module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#050714',
        'deep-navy': '#0A1128',
        'gold': '#D4AF37',
        'cosmic-teal': '#39A0A0',
        'cosmic-purple': '#6B3FA0',
        'stellar-pink': '#FF5A8C',
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
        'display': ['Impact', 'sans-serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(to right, #050714, #0A1128)',
      },
      animation: {
        'star-pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}
