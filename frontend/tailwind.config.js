/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './src/entities/projectView/ui/project.css'],
  theme: {
    extend: {
      'scale-up-center': {
        '0%': {
          transform: 'scale(0.5)',
        },
        '100%': {
          transform: 'scale(1)',
        },
      },
    },
  },
  plugins: [],
};
