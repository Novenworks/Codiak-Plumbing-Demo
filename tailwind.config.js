module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#121315', 2: '#1c1e22', 3: '#0b0c0d' },
        paper: { DEFAULT: '#f6f3ee', 2: '#ece7df' },
        line: '#d8d1c5',
        muted: '#555b62',
        signal: { DEFAULT: '#d7262e', dark: '#b01c23', light: '#ff6b70', bright: '#ee3d44' },
      },
      fontFamily: {
        sans: ['var(--font-archivo)', 'system-ui', 'sans-serif'],
      },
    },
  },
};
