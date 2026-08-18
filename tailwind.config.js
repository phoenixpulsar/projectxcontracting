export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--bg)', surface: 'var(--surface)', ink: 'var(--ink)',
        primary: 'var(--primary)', deep: 'var(--primary-deep)', secondary: 'var(--secondary)',
        muted: 'var(--muted)', line: 'var(--line)', linestrong: 'var(--line-strong)',
        accent: 'var(--accent)', accentdark: 'var(--accent-dark)', band: 'var(--band)', bandink: 'var(--band-ink)'
      },
      fontFamily: {
        heading: ['"Libre Franklin"', 'sans-serif'],
        body: ['"Source Sans 3"', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
