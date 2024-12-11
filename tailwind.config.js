/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        name:["Yuji Mai"]
      ,fontas:["open sans"]
      },
    },
  },
  plugins: [],
}