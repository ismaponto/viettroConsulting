const colors = require("tailwindcss/colors"); // Import the colors module

module.exports = {
    theme: {
        colors: {
            gray: colors.Gray,
            blue: colors.sky,
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
    },
};