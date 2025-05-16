/* Imports */
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

/* Relative Imports */
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../models/navigation/AppStackParamList'
import Wrapper from '../../components/Wrapper'
import { useTheme } from '../../hooks/useTheme'
import { styles } from './index.styles'
import colors from '../../static/colors'
import { getTypographyStyles } from '../../static/gstyles'
import { changeNavigationColor, getThemeColor } from '../../utils/helpers'

/* Local Imports */

// -------------------------------------------------------------------------------------------------------------------------

/* Interface */

type PropsHome = NativeStackScreenProps<AppStackParamList, 'Home'>
// -------------------------------------------------------------------------------------------------------------------------

/**
 * Component to create the Home Screen.
 *
 * @component
 */
const Home: React.FC<PropsHome> = ({ navigation, route }) => {
	/* Constants */

	/* Hooks */
	const { theme, toggleTheme } = useTheme()
	console.log('theme', theme)

	/* States */

	/* Functions */

	/* Side-Effects */

	/* Output */
	return (
		<Wrapper
			statusBarColor={getThemeColor(
				theme,
				colors.others.white,
				colors.dark.dark1,
			)}>
			<View
				style={[
					styles.container,
					theme === 'dark'
						? { backgroundColor: colors.dark.dark1 }
						: { backgroundColor: colors.others.white },
				]}>
				<Text
					onPress={toggleTheme}
					style={{
						...getTypographyStyles(theme).headingH5Bold,
						color: colors.others.red,
					}}>
					Welcome to Lernex
				</Text>
				<TouchableOpacity
					onPress={toggleTheme}
					style={{
						backgroundColor: colors.primary[500],
					}}>
					<Text>Toggle</Text>
				</TouchableOpacity>
			</View>
		</Wrapper>
	)
}

export default Home
