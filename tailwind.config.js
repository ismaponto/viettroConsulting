/** @type {import('tailwindcss').Config} */

module.exports = {
    theme: {
        colors: {


            red: colors.rose,
            pink: colors.fuchsia,
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {

            colors: {
                // Define your custom colors here
                // For example:
                primary: '#3490dc',
                secondary: '#ffed4a',
            },

            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            fontFamily: {
                manrope: ['Manrope', 'sans-serif'],
            },
        },
    }
}