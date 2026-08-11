/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: 'hsl(var(--background))',
        ink: 'hsl(var(--foreground))',
        paper: 'hsl(var(--paper))',
        muted: 'hsl(var(--muted))',
        line: 'hsl(var(--line))',
        accent: 'hsl(var(--accent))',
        secondary: 'hsl(var(--secondary))',
        brandblack: 'hsl(var(--black))',
        cat: {
          public: 'hsl(var(--cat-public))',
          jury: 'hsl(var(--cat-jury))',
          architects: 'hsl(var(--cat-architects))',
        },
      },
      borderRadius: {
        soft: 'var(--radius-soft)',
        card: 'var(--radius-card)',
        shell: 'var(--radius-shell)',
      },
      boxShadow: {
        panel: '0 30px 80px -40px hsl(var(--shadow) / 0.28)',
      },
      fontFamily: {
        sans: ['Gellix', 'Jost', 'sans-serif'],
      },
      fontSize: {
        // Sedm stupňů podle manuálu — "maximálně pár úrovní velikostí textů".
        // Bez letterSpacing — komponenty si tracking řídí vlastními třídami
        // a zapečené hodnoty by se s nimi praly v kaskádě.
        display: ['clamp(2.75rem, 6vw, 5.75rem)', { lineHeight: '1' }],
        h1: ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.08' }],
        h2: ['clamp(1.5rem, 2.5vw, 2rem)', { lineHeight: '1.15' }],
        body: ['1rem', { lineHeight: '1.75' }],
        lead: ['1.125rem', { lineHeight: '1.75' }],
        small: ['0.875rem', { lineHeight: '1.6' }],
        label: ['0.75rem', { lineHeight: '1.4' }],
      },
      fontWeight: {
        // Dva řezy, nic víc. Staré font-bold/semibold třídy spadnou na 500,
        // takže se nikde nesyntetizuje falešný tučný řez.
        thin: '400',
        extralight: '400',
        light: '400',
        normal: '400',
        medium: '500',
        semibold: '500',
        bold: '500',
        extrabold: '500',
        black: '500',
      },
      letterSpacing: {
        display: '-0.045em',
      },
    },
  },
  plugins: [],
}
