/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      colors: {
        main: "#4CAF50",
        primary: "#0F172A"
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
        NunitoSans: ["Nunito Sans", "sans-serif"],
        Kumbh: ["Kumbh Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        DMSans: ["DM Sans", "sans-serif"],
        Outfit: ["Outfit", "serif"],
      },
      // fontWeight: {
      //   extrabold: '1000',
      // },
    },
  },
  plugins: [],
}




// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   prefix: "tw-",
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         main: "#1b1b1b",
//         dark: "#1c1c1c",
//         plain: "#2C2C2C",
//         primary: "#1E6EE7",
//         mygray: "#585858",
//         blue: "#4D8BD9",
//       },
//     },
//   },
// });
