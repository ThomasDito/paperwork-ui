import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"
import colors from "tailwindcss/colors"

export default {
  darkMode: ["class"],
  content: [],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      ...defaultTheme,
      colors: {
        ...defaultTheme.colors,
        ...colors,
        body: {
          DEFAULT: "hsl(var(--body, 222 84% 98%))",
        },
        // white:{
        //   DEFAULT: "hsl(var(--white, 20 0% 100%))",
        // },
        silver: {
          DEFAULT: "hsl(var(--silver, 210 31% 97%))",
        },
        "grey-blue": {
          DEFAULT: "hsl(var(--grey-blue, 210 29% 75%))",
        },
        "light-grey": {
          DEFAULT: "hsl(var(--light-grey, 210 10% 58%))",
        },
        grey: {
          DEFAULT: "hsl(var(--grey, 0 0% 44%))",
        },
        "dark-grey": {
          DEFAULT: "hsl(var(--dark-grey, 0 0% 30%))",
        },
        // black:{
        //   DEFAULT: "hsl(var(--black, 0 0% 13%))",
        // },
        "rose-pink": {
          DEFAULT: "hsl(var(--rose-pink, 342 99% 71%))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          50: "hsl(var(--primary-50, 315 98% 47%))",
          100: "hsl(var(--primary-100, 315 98% 47%))",
          150: "hsl(var(--primary-150, 315 98% 38%))",
          200: "hsl(var(--primary-200, 315 99% 34%))",
          250: "hsl(var(--primary-250, 315 99% 31%))",
          300: "hsl(var(--primary-300, 315 100% 21%))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          50: "hsl(var(--success-50, 160 53% 96%))",
          100: "hsl(var(--success-100, 160 59% 70%))",
          150: "hsl(var(--success-150, 160 60% 49%))",
          200: "hsl(var(--success-200, 160 100% 29%))",
          250: "hsl(var(--success-250, 160 61% 27%))",
          300: "hsl(var(--success-300, 160 69% 21%))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          50: "hsl(var(--warning-50, 38 100% 96%))",
          100: "hsl(var(--warning-100, 36 100% 79%))",
          150: "hsl(var(--warning-150, 36 100% 72%))",
          200: "hsl(var(--warning-200, 36 100% 63%))",
          250: "hsl(var(--warning-250, 36 100% 57%))",
          300: "hsl(var(--warning-300, 36 100% 45%))",
        },
        danger: {
          DEFAULT: "hsl(var(--danger))",
          50: "hsl(var(--danger-50, 5 100% 97%))",
          100: "hsl(var(--danger-100, 4 79% 72%))",
          150: "hsl(var(--danger-150, 4 100% 66%))",
          200: "hsl(var(--danger-200, 4 77% 50%))",
          250: "hsl(var(--danger-250, 4 94% 45%))",
          300: "hsl(var(--danger-300, 4 68% 46%))",
        },

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        ...defaultTheme.borderRadius,
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        ...defaultTheme.fontFamily,
        sans: [
          `var(--font-sans, var(--font-fallbacks, ${defaultTheme.fontFamily.sans.join(", ")}))`,
        ],
      },
      keyframes: {
        ...defaultTheme.keyframes,
        "accordion-down": {
          from: { height: "0px" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0px" },
        },
      },
      animation: {
        ...defaultTheme.animation,
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
