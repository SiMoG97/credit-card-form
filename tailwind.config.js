import containerQueries from "@tailwindcss/container-queries";
/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

    theme: {
        extend: {
            colors: {
                "grayviolet-200": "hsl(270, 3%, 87%)",
                "grayviolet-400": "hsl(279, 6%, 55%)",
                "myviolet-900": "hsl(278, 68%, 11%)",
            },
            backgroundColor: {
                "grayviolet-200": "hsl(270, 3%, 87%)",
                "grayviolet-400": "hsl(279, 6%, 55%)",
                "myviolet-900": "hsl(278, 68%, 11%)",
            },
        },
    },
    plugins: [containerQueries],
};
// - White: hsl(0, 0%, 100%)
// - Light grayish violet: hsl(270, 3%, 87%)
// - Dark grayish violet: hsl(279, 6%, 55%)
// - Very dark violet: hsl(278, 68%, 11%)
