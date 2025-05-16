/* Imports */
import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'

/* Relative Imports */
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { AppStackParamList } from '../../models/navigation/AppStackParamList'
import Wrapper from '../../components/Wrapper'

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

	/* States */

	/* Functions */

	/* Side-Effects */

	/* Output */
	return (
		<Wrapper>
			<Text>Welcome to Lernex</Text>
		</Wrapper>
	)
}

export default Home
