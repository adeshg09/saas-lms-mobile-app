import changeNavigationBarColor from 'react-native-navigation-bar-color'

export const changeNavigationColor = async (color: string) => {
	try {
		const response = await changeNavigationBarColor(color)
	} catch (e) {
		console.log(e)
	}
}
