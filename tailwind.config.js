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
        sans: ['Questrial', 'sans-serif'],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacing: {
        display: '-0.045em',
      },
    },
  },
  plugins: [],
}
