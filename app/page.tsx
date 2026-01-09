'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		const user = localStorage.getItem('user');

		if (token) {
			router.replace('/dashboard');
		} else if (user) {
			router.replace('/login');
		} else {
			router.replace('/register');
		}
	}, [router]);

	return null;
}
