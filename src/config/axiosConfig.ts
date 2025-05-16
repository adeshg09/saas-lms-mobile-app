/* Relative Imports */
import axios, { AxiosInstance } from 'axios'

/* Local Imports */
import { envConfig } from './envConfig'

// -------------------------------------------------------------------------------------------------------------------------

export function axiosInstance(token: string): AxiosInstance {
	let baseUrl
	let headers

	baseUrl = envConfig.base.baseUrl

	if (token) {
		headers = {
			Authorization: `Bearer ${token}`,
		}
	}

	const axiosConfig = axios.create({
		baseURL: baseUrl,
		headers: headers,
	})

	axiosConfig.interceptors.response.use(
		response => {
			return response
		},
		error => {
			if (error.response) {
				if (error.response.status === 401) {
					console.log('response intercept error 401')
					// logout()
				}
			}
			return Promise.reject(error)
		},
	)

	return axiosConfig
}

export const baseUrl = axios.create({ baseURL: envConfig.base.baseUrl })
