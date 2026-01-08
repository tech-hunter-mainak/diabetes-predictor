/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				kucoinGreen: '#20C997',
				lightGreyBorder: '#E5E7EB'
			},
			borderRadius: {
				card: '12px'
			},
			boxShadow: {
				card: '0 2px 6px rgba(0,0,0,0.07)'
			}
		}
	},
	plugins: []
};
