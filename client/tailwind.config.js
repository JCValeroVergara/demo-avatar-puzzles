/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            height: {
                'screen': '100vh',
            },
            width: {
                'screen': '100vw',
            },
            colors: {
            primary: '#f72585',
            borderPrimary: '#cc2973',
            textos: '#5e6470',
            tablero: '#636D82',
            tableroborder: '#bfbcbb',
            tablerobg: '#454C5B',
            },
        },
    },
    plugins: [
        require('tailwindcss-animated')
    ],
};
