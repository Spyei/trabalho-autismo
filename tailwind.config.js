/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "banner": "url('/src/assets/bannerautismo.jpg')",
            },
            screens: {
                'xl': { max: '580px' },
                'xp': { min: '580px' }
            }
        },
    },
    plugins: [],
};
