/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                qatar: "#8A1538",
            },
            boxShadow: {
                custom: "0 0 12px rgba(0,0,0,0.4)",
                light: "0 0 8px rgba(0,0,0,0.1)",
            },
            fontFamily: {
                poppins: "poppins,sans-serif",
            },
        },
    },
    plugins: [],
};
