/* Imports */
import React from 'react'
// import { Text } from 'react-native'

/* Relative Imports */
import { Provider } from 'react-redux'

/* Local Imports */
import Router from './src/router'
import store from './src/store/store'

// -------------------------------------------------------------------------------------------------------------------------

/* Components */
const App = () => {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	)
}

export default App
