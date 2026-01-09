'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import { getValidToken } from '../lib/token';

type User = {
	email: string;
};

export default function DashboardPage() {
	const router = useRouter();

	// store user from localStorage
	const [user, setUser] = useState<User | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = getValidToken();
		const storedUser = localStorage.getItem('user');

		// if token missing or expired → redirect
		if (!token) {
			router.push('/login');
			return;
		}

		// get user data from localStorage
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}

		setLoading(false);
	}, [router]);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-100">
				<p className="text-gray-600">Loading dashboard...</p>
			</div>
		);
	}

	return (
		<>
			<Navbar />

			<div className="min-h-screen bg-gray-100 p-6">
				<div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow">
					<h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

					{user ? (
						<div className="border rounded p-4 bg-gray-50">
							<p className="text-gray-700">
								<strong>Email:</strong> {user.email}
							</p>
							<p className="text-sm text-gray-500 mt-2">This data is loaded from localStorage.</p>
						</div>
					) : (
						<p className="text-red-600">User data not found.</p>
					)}
				</div>
			</div>
		</>
	);
}
