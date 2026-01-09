export const registerUser = (email: string, password: string) => {
	const user = { email, password: btoa(password) };
	localStorage.setItem('user', JSON.stringify(user));
};

export const loginUser = (email: string, password: string) => {
	if (email && password) {
		const tokenData = {
			token: 'dummy-token',
			expiresAt: Date.now() + 60 * 60 * 1000,
		};

		localStorage.setItem('token', JSON.stringify(tokenData));
		localStorage.setItem('user', JSON.stringify({ email }));

		return true;
	}
	return false;
};

export const isAuthenticated = () => {
	return !!localStorage.getItem('token');
};
