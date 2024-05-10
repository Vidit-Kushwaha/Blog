import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss'

// const pluginFunction =

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '2xs': '0.625rem',
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      fontWeight: {
        bold: '700',
        semibold: '600',
        medium: '500',
        regular: '400',
        light: '300',
      },
      lineHeight: {
        tight: '1.2',
      },
      colors: {
        'dark-100': '#1E1E1E',
        'dark-200': '#121212',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addBase, theme }: any) {
      addBase({
        h1: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.sans'),
        },
        h2: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        h4: {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
        },
        h5: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.semibold'),
        },
        h6: {
          fontSize: theme('fontSize.sm'),
          fontWeight: theme('fontWeight.semibold'),
        },
        p: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.regular'),
        },
        a: {
          fontSize: theme('fontSize.base'),
          fontWeight: theme('fontWeight.regular'),
          color: theme('colors.blue.500'),
          hover: theme('textDecoration.underline'),
          onmouseenter: theme('colors.blue.600'),
          
        },
      })
    },
  ],
}

export default config
