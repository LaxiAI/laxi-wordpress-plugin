/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                purple: {
                    700: '#9254de', // Primary brand color
                    800: '#732fd2', // Darker shade
                    900: '#4C1D95', // Darkest
                }
            },
            boxShadow: {
                sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
            },
        },
    },
    plugins: [],
    corePlugins: {
        preflight: false, // Disable Tailwind's reset to avoid conflicts with WordPress styles
    },
};