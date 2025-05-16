/* Imports */
import React from 'react'

/* Relative Imports */
import { NavigationContainer } from '@react-navigation/native'
import AppStackNavigation from './AppStackNavigation'

// -----------------------------------------------------------------------------

/* Components */
const Router = () => {
	return (
		<NavigationContainer>
			<AppStackNavigation />
		</NavigationContainer>
	)
}

export default Router
