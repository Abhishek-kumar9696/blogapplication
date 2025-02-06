// // /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlueGray: "#2f454f",
        customDarkGreen: "#1a3d2f",
        customOrange: "#ff6600",
        customPurple: "#7d3cff",
        customTeal: "#4dcfb2", // Added #4dcfb2
        customSkyBlue: "#66a1bd", // Added #66a1bd
        nearTeal:"#008080",
        customTT:"#52B5B5",
        customDeepTeal: "#388383", // Added #388383
      },
    },
  },
  plugins: [],
};
