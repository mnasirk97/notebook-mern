import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["forest"]
    // themes: ["light", "dark", "cupcake", "forest", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "lofi", "dracula", "cmyk", "business", "acid", "lemonade", "night"],
  },
}