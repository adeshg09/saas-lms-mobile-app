/* Relative Imports */
import { configureStore } from '@reduxjs/toolkit'

// -------------------------------------------------------------------------------------------------------------------------

const store = configureStore({
	reducer: {
		login: () => ({}), // demo
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
