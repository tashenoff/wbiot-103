/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {

    container: {
        padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem',
        },
    },

    extend: {


        keyframes: {
            slidein: {
                from: {
                    opacity: "0",
                    transform: "translateY(-10px)",
                },
                to: {
                    opacity: "1",
                    transform: "translateY(0)",
                },
            },
        },
        animation: {

            slidein300: "slidein 1s ease 300ms forwards",
            slidein500: "slidein 1s ease 500ms forwards",
            slidein700: "slidein 1s ease 700ms forwards",
            slidein900: "slidein 1s ease 900ms forwards",

        },
        colors: {
            secondary: '#619045',
            primary: '#da373d'
        }
    }
},
  plugins: [],
}

