/** @type {import('tailwindcss').Config} */
// Tailwind is only used for utility classes; theme colors live in
// CSS variables in src/styles/global.css, so theme.extend stays empty.
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};