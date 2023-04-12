/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
		"./src/app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				mirage: {
					50: "#f4f6fb",
					100: "#e8ebf6",
					200: "#ccd6eb",
					300: "#9fb3da",
					400: "#6c8cc4",
					500: "#496eae",
					600: "#375592",
					700: "#2d4577",
					800: "#293c63",
					900: "#263454",
					950: "#161d30",
				},
				"burnt-orange": {
					50: "#fffcea",
					100: "#fff4c4",
					200: "#ffe884",
					300: "#ffd544",
					400: "#ffc019",
					500: "#ff9d00",
					600: "#e47400",
					700: "#cc5500",
					800: "#993c07",
					900: "#7e3109",
					950: "#481800",
				},
			},
		},
	},
	plugins: [],
};
