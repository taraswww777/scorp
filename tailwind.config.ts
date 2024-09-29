import type { Config } from 'tailwindcss/types/config';
import  { Config } from 'tailwindcss';

// type TailwindConfig = RequiredConfig & Partial<OptionalConfig>;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/uiKit/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: "var(--neutral)",
        subtle: "var(--subtle)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '2.25': '0.5625rem', // Пример: добавляем 2.25 (0.5625rem)
      }
    },
  },
  plugins: [],
};
export default config;
