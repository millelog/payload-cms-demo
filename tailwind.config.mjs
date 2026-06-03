/** @type {import('tailwindcss').Config} */
const config = {
  theme: {
    extend: {
      colors: {
        teal: '#2AC2C6',
        'brand-dark': '#1E1E1E',
        'brand-charcoal': '#303030',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        pill: '100px',
      },
      typography: {
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: '700',
                marginBottom: '0.25em',
              },
              h2: {
                fontWeight: '600',
              },
              h3: {
                fontWeight: '600',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '3rem',
              },
              h2: {
                fontSize: '1.5rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '4.5rem',
              },
              h2: {
                fontSize: '2rem',
              },
            },
          ],
        },
      },
    },
  },
}

export default config
