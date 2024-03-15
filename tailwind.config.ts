import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradientGame': 'linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0,0,0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
};
export default config;
