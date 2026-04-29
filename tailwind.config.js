/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "gradient-blue": "#A8E5FE",
        "gradient-purple": "#64149C",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
};
