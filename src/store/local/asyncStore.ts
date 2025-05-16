/* Relative Imports */
import AsyncStorage from '@react-native-async-storage/async-storage'

// --------------------------------------------------------------------------------------------------

const localStoreKeys = {}

const setItem = async (key: string, value: any) => {
	try {
		const data = JSON.stringify(value)
		await AsyncStorage.setItem(key, data)
	} catch (error) {
		console.log(`Error saving data for key ${key}:`, error)
	}
}

const fetchItem = async (key: string) => {
	try {
		const value = await AsyncStorage.getItem(key)
		if (value !== null) {
			return JSON.parse(value)
		}
		return null
	} catch (error) {
		console.log(`Error retrieving data for key ${key}:`, error)
		return null
	}
}

const removeItem = async (key: string) => {
	try {
		await AsyncStorage.removeItem(key)
		return null
	} catch (error) {
		console.log(`Error removing data for key ${key}:`, error)
		return null
	}
}

export { setItem, fetchItem, removeItem, localStoreKeys }
