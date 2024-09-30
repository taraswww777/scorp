import type { Config } from 'tailwindcss/types/config';
import { Config } from 'tailwindcss';

// type TailwindConfig = RequiredConfig & Partial<OptionalConfig>;

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/uiKit/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px',
        // => @media (min-width: 480px) { ... },
        '2xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      },
      colors: {
        hover: "var(--hover)",
        textDark: "var(--textDark)",
        textSecondary: "var(--textSecondary)",
        neutral: "var(--neutral)",
        subtle: "var(--subtle)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      spacing: {
        '2.25': '0.5625rem', // 2.25 * 0.25rem = 0.5625rem
        '2.75': '0.6875rem', // 2.75 * 0.25rem = 0.6875rem
      }
    },
  },
  plugins: [],
};
export default config;
