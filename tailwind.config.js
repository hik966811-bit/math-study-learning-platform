/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: {
            50: '#eef8ff',
            100: '#d8efff',
            200: '#b9e3ff',
            300: '#86d2ff',
            400: '#4cb7ff',
            500: '#00d2ff',
            600: '#0070f3',
            700: '#0051b3',
            800: '#0b1938',
            900: '#060d24',
            950: '#030714',
          },
          neon: '#00f0ff',
          pink: '#ff007f',
          purple: '#9d00ff',
          green: '#00ff66',
          amber: '#ffaa00',
        }
      },
      fontFamily: {
        gaming: ['"Orbitron"', '"Rajdhani"', 'system-ui', 'sans-serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 210, 255, 0.45)',
        'neon-purple': '0 0 20px rgba(157, 0, 255, 0.45)',
        'neon-pink': '0 0 20px rgba(255, 0, 127, 0.45)',
        'neon-green': '0 0 20px rgba(0, 255, 102, 0.45)',
        'glow-lg': '0 0 35px rgba(0, 210, 255, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glow: {
          '0%': { filter: 'drop-shadow(0 0 8px rgba(0, 210, 255, 0.6))' },
          '100%': { filter: 'drop-shadow(0 0 20px rgba(0, 210, 255, 0.9))' },
        }
      }
    },
  },
  plugins: [],
}
