/* Imports */
import React, { useEffect } from 'react'

/* Relative Imports */
import { NavigationContainer } from '@react-navigation/native'
import { hideNavigationBar } from 'react-native-navigation-bar-color'

/* Local Imports */
import { useTheme } from '../hooks/useTheme'
import AppStackNavigation from './AppStackNavigation'

// -----------------------------------------------------------------------------

/* Components */
const Router = () => {
	/* Hooks */
	const { theme, toggleTheme } = useTheme()

	/* Side-Effects */
	useEffect(() => {
		// changeNavigationColor(
		// 	getThemeColor(theme, colors.others.white, colors.dark.dark1),
		// )
		hideNavigationBar()
	}, [])

	/* Output */
	return (
		<NavigationContainer>
			<AppStackNavigation />
		</NavigationContainer>
	)
}

export default Router
