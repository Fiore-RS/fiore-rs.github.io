/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        // pantalla grande y con suficiente alto: la página encaja justo en la ventana (home y archivo)
        fit: { raw: '(min-width: 1024px) and (min-height: 600px)' },
      },
      // Los valores reales están en src/index.css (:root). Para cambiar la paleta, se edita solo ahí.
      colors: {
        noche: 'rgb(var(--noche) / <alpha-value>)', // fondo
        ciruela: 'rgb(var(--ciruela) / <alpha-value>)', // tarjetas
        borde: 'rgb(var(--borde) / <alpha-value>)',
        crema: 'rgb(var(--crema) / <alpha-value>)', // texto principal
        lila: 'rgb(var(--lila) / <alpha-value>)', // texto secundario claro
        bruma: 'rgb(var(--bruma) / <alpha-value>)', // texto apagado
        acento: {
          DEFAULT: 'rgb(var(--acento) / <alpha-value>)',
          claro: 'rgb(var(--acento-claro) / <alpha-value>)',
        },
        'sobre-acento': 'rgb(var(--sobre-acento) / <alpha-value>)', // texto encima del acento
        menta: 'rgb(var(--menta) / <alpha-value>)', // estado "disponible"
      },
      fontFamily: {
        display: ['"Archivo Variable"', 'Archivo', 'system-ui', 'sans-serif'],
        sans: ['"Hanken Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slide: {
          '0%': { opacity: '0', transform: 'translateX(48px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        rise: 'rise 700ms cubic-bezier(.2,.7,.2,1) both',
        slide: 'slide 800ms cubic-bezier(.2,.7,.2,1) both',
        fade: 'fade 350ms ease-out both',
      },
    },
  },
  plugins: [],
}
