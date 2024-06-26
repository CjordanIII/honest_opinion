import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#848484',
      secondary: "#444444",
      background: "#f4f4f4",
      accentcolor: "#1c1c24",
      textcolor:"#f4f4f4"
      
    }
  },
  plugins: [],
};
export default config;
