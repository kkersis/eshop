module.exports = {
    purge: ['./src/**/*.{js,jsx}', './public/index.html'],
    darkMode: false,
    theme: {
      extend: {
        maxHeight: {
          '3/4': '75%'
        },
        keyframes: {
          'slide-in': {
            '0%': {transform: 'translateX(100%)'},
            '100%': {transform: 'translateX(0%)'}
          },
          'slide-out': {
            '0%': {transform: 'translateX(0%)'},
            '100%': {transform: 'translateX(200%)'}
          }
        },
        animation: {
          'slide-in': 'slide-in 0.5s',
          'slide-out': 'slide-out 0.5s'
        }
      },
    },
    variants: {
      extend: {
        translate: ['active']
      },
    },
    plugins: [],
  }