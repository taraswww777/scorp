import type { Config } from 'tailwindcss/types/config';

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
        borderDefault: "var(--borderDefault)",
        textDefault: "var(--textDefault)",
      },
      spacing: {
        '2.25': '0.5625rem', // 2.25 * 0.25rem = 0.5625rem
        '2.75': '0.6875rem', // 2.75 * 0.25rem = 0.6875rem
        '12': '3.25rem', // 12 * 0.25rem = 3.25rem
        '12.25': '3.0625rem', // 12.25 * 0.25rem = 3.0625rem
        '12.5': '3.125rem', // 12.5 * 0.25rem = 3.125rem
        '13': '3.25rem', // 13 * 0.25rem = 3.25rem
        '13.25': '3.3125rem', // 13.25 * 0.25rem = 3.3125rem
        '13.5': '3.375rem', // 13.5 * 0.25rem = 3.375rem
      },
    },
  },
  plugins: [],
};
export default config;
