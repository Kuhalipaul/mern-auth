type TokenData = {
	token: string;
	expiresAt: number;
};

/**
 * Get valid token (checks expiry)
 */
export const getValidToken = (): string | null => {
	const storedToken = localStorage.getItem('token');
	if (!storedToken) return null;

	try {
		const tokenData: TokenData = JSON.parse(storedToken);

		// check expiry
		if (Date.now() > tokenData.expiresAt) {
			removeToken();
			return null;
		}

		return tokenData.token;
	} catch {
		// fallback if token is corrupted
		removeToken();
		return null;
	}
};

/**
 * Store token with expiry
 */
export const setToken = (token: string, expiresInMs: number) => {
	const tokenData: TokenData = {
		token,
		expiresAt: Date.now() + expiresInMs,
	};

	localStorage.setItem('token', JSON.stringify(tokenData));
};

/**
 * Remove token
 */
export const removeToken = () => {
	localStorage.removeItem('token');
};
