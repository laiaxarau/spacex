/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'regal-blue': '#243c5a',
				'black2': '#0B0205',
				'purple': '#17022e',
				'violet': '#724C9D',
				'malva': '#DCCAE9',
				'lila': '#9356A0',
				'verd': '#032b40',
				'plom': '#4C5D8B',
				'blau': '#1B1F4',
			},
		},
	},
	plugins: [],
}