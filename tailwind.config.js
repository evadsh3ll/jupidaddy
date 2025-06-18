/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        'electric-blue': '#00d4ff',
        'lime-green': '#00ff88',
        'neon-purple': '#8b5cf6',
        'neon-green': '#00ff88',
        'neon-blue': '#00d4ff',
        'neon-pink': '#ff0080',
      },
      animation: {
        'float-up': 'float-up 0.6s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 3s ease infinite',
      },
      keyframes: {
        'float-up': {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0)' 
          }
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(0, 255, 136, 0.3)' 
          },
          '100%': { 
            boxShadow: '0 0 30px rgba(0, 255, 136, 0.6)' 
          }
        },
        'gradient': {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center'
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center'
          }
        }
      }
    },
  },
  plugins: [],
};