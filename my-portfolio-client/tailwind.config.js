/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary-color':'#28E98C'
        
      }
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),

  ],
}

