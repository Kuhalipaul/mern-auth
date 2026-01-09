'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		router.push('/login');
	};

	return (
		<div className="flex justify-between items-center px-6 py-4 bg-white shadow">
			<h1 className="text-lg font-semibold">My App</h1>
			<button onClick={logout} className="text-sm text-red-600 hover:underline">
				Logout
			</button>
		</div>
	);
}
