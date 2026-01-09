import axios from 'axios';
import { getValidToken, removeToken } from './token';

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// REQUEST INTERCEPTOR
api.interceptors.request.use(
	(config) => {
		const token = getValidToken();

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error) => Promise.reject(error),
);

// RESPONSE INTERCEPTOR
api.interceptors.response.use(
	(response) => response,
	(error) => {
		if (error.response?.status === 401) {
			// token invalid or expired
			removeToken();
			localStorage.removeItem('user');
			window.location.href = '/login';
		}
		return Promise.reject(error);
	},
);

export default api;
