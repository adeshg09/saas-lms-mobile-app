/* Imports */
import React from 'react'
// import { Text } from 'react-native'

/* Relative Imports */
import { Provider } from 'react-redux'

/* Local Imports */
import Router from './src/router'
import { ThemeProvider } from './src/context/ThemeContext'
import store from './src/store/store'

// -------------------------------------------------------------------------------------------------------------------------

/* Components */
const App = () => {
	return (
		<ThemeProvider>
			<Provider store={store}>
				<Router />
			</Provider>
		</ThemeProvider>
	)
}

export default App
