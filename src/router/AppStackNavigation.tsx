/* Imports */
import React from 'react'

/* Relative Imports */
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* Local Imports */
import { AppStackParamList } from '../models/navigation/AppStackParamList'
import Home from '../screens/Home'

// -------------------------------------------------------------------------------------------------------------------------

const AppStackNavigator = createNativeStackNavigator<AppStackParamList>()

// -------------------------------------------------------------------------------------------------------------------------

/* Components */
const AppStackNavigation: React.FC = () => {
	/* Output */
	return (
		<AppStackNavigator.Navigator>
			<AppStackNavigator.Screen
				options={{ headerShown: false }}
				name="Home"
				component={Home}
			/>
		</AppStackNavigator.Navigator>
	)
}

export default AppStackNavigation
