export const registerUser = (email: string, password: string) => {
	const user = { email, password: btoa(password) };
	localStorage.setItem('user', JSON.stringify(user));
};

export const loginUser = (email: string, password: string): boolean => {
	const stored = localStorage.getItem('user');
	if (!stored) return false;

	const user = JSON.parse(stored);
	if (user.email === email && atob(user.password) === password) {
		localStorage.setItem('token', 'dummy-token');
		return true;
	}
	return false;
};

export const isAuthenticated = () => {
	return !!localStorage.getItem('token');
};
