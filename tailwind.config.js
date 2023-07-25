export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary'  :" #856df2"
      },
      fontFamily : {
        'nunito' : 'Nunito'
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}