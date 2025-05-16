/* Interface */
interface Colors {
	primary: Record<100 | 200 | 300 | 400 | 500, string>
	secondary: Record<100 | 200 | 300 | 400 | 500, string>

	success: string
	info: string
	warning: string
	error: string
	disabled: string
	disabledButton: string

	grey: Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>

	gradient: {
		blue: string
		yellow: string
		green: string
		orange: string
		red: string
	}

	dark: {
		dark1: string
		dark2: string
		dark3: string
	}

	others: {
		white: string
		black: string
		red: string
		pink: string
		purple: string
		deepPurple: string
		indigo: string
		blue: string
		lightBlue: string
		cyan: string
		teal: string
		green: string
		lightGreen: string
		lime: string
		yellow: string
		amber: string
		orange: string
		deepOrange: string
		brown: string
		blueGrey: string
	}

	background: {
		blue: string
		green: string
		orange: string
		pink: string
		yellow: string
		purple: string
	}

	transparent: {
		blue: string
		orange: string
		yellow: string
		red: string
		green: string
		purple: string
		cyan: string
	}
}

// -------------------------------------------------------------------------------------------------------------------------

const colors: Colors = {
	// Main
	primary: {
		100: '#EBEFFE',
		200: '#ADBFFC',
		300: '#859EFA',
		400: '#5C7EF9',
		500: '#3366FF',
	},
	secondary: {
		100: '#FFFBE6',
		200: '#FFED99',
		300: '#FFE566',
		400: '#FFDC33',
		500: '#FFD300',
	},

	// Alert & Status
	success: '#4ADE80',
	info: '#246BFD',
	warning: '#FACC15',
	error: '#F75555',
	disabled: '#D8D8D8',
	disabledButton: '#4360C9',

	// Greyscale
	grey: {
		50: '#FAFAFA',
		100: '#F5F5F5',
		200: '#EEEEEE',
		300: '#E0E0E0',
		400: '#BDBDBD',
		500: '#9E9E9E',
		600: '#757575',
		700: '#616161',
		800: '#424242',
		900: '#212121',
	},

	// Gradients

	gradient: {
		blue: 'linear-gradient(286.17deg, #335EF7 0%, #5F82FF 100%)',
		yellow: 'linear-gradient(286.17deg, #FACC15 0%, #FFE580 100%)',
		green: 'linear-gradient(286.17deg, #22BB9C 0%, #35DEBC 100%)',
		orange: 'linear-gradient(286.17deg, #FB9400 0%, #FFAB38 100%)',
		red: 'linear-gradient(286.17deg, #FF4D67 0%, #FF8A9B 100%)',
	},

	// Dark Colors
	dark: {
		dark1: '#181A20',
		dark2: '#1F222A',
		dark3: '#35383F',
	},

	// Others
	others: {
		white: '#FFFFFF',
		black: '#000000',
		red: '#F54336',
		pink: '#EA1E61',
		purple: '#9D28AC',
		deepPurple: '#673AB3',
		indigo: '#3F51B2',
		blue: '#1A96F0',
		lightBlue: '#00A9F1',
		cyan: '#00BCD3',
		teal: '#009689',
		green: '#4AAF57',
		lightGreen: '#8BC255',
		lime: '#CDDC4C',
		yellow: '#FFEB4F',
		amber: '#FFC02D',
		orange: '#FF981F',
		deepOrange: '#FF5726',
		brown: '#7A5548',
		blueGrey: '#607D8A',
	},

	// Background
	background: {
		blue: '#F6FAFD',
		green: '#F2FFFC',
		orange: '#FFF8ED',
		pink: '#FFF5F5',
		yellow: '#FFFEE0',
		purple: '#FCF4FF',
	},
	// Transparent Variants
	transparent: {
		blue: 'rgba(51, 94, 247, 0.08)',
		orange: 'rgba(255, 152, 0, 0.08)',
		yellow: 'rgba(250, 204, 21, 0.08)',
		red: 'rgba(247, 85, 85, 0.08)',
		green: 'rgba(76, 175, 80, 0.08)',
		purple: 'rgba(156, 39, 176, 0.08)',
		cyan: 'rgba(0, 188, 212, 0.08)',
	},
}

export default colors
