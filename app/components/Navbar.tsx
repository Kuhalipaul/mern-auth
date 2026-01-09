'use client';

import { useRouter } from 'next/navigation';

export default function Navbar() {
	const router = useRouter();

	const logout = () => {
		localStorage.removeItem('token');
		router.push('/login');
	};

	return (
		<nav className="flex justify-between p-4 bg-white shadow">
			<h1 className="font-bold">Dashboard</h1>
			<button onClick={logout} className="text-red-500">
				Logout
			</button>
		</nav>
	);
}
