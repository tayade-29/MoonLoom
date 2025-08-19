/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dior': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'logo-float': 'logoFloat 3s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-in forwards',
        'slide-left': 'slideLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
      },
      keyframes: {
        logoFloat: {
          '0%': { 
            transform: 'translate(-50%, -50%) scale(2)', 
            top: '50%', 
            left: '50%',
            position: 'fixed'
          },
          '100%': { 
            transform: 'translate(-50%, 0) scale(1)', 
            top: '20px', 
            left: '50%',
            position: 'fixed'
          }
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        slideLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
}