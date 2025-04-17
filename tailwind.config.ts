import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        rosaClaro: '#FADADD',
        rosaMedio: '#F4A8B4',
        marrom: '#6B4C3B',
        marromEscuro: '#4A2E23',
        fundo: '#FFF9F9',
      },
      fontFamily: {
        sans: ['var(--font-quicksand)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
    },
  },
  plugins: [],
}

export default config
