module.exports = {
  content: [
    './index.html',            // Include the root HTML file
    './src/**/*.{js,ts,jsx,tsx}', // Include all JS/TS/JSX/TSX files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        work: ['"Work Sans"', 'sans-serif'], 
        montserrat: ['"Montserrat"', 'sans-serif'], 
        nunito: ['"Nunito Sans"', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};
