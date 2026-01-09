'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function DashboardPage() {
	const router = useRouter();

	useEffect(() => {
		if (!localStorage.getItem('token')) {
			router.push('/login');
		}
	}, [router]);

	return (
		<>
			<Navbar />
			<div className="p-6">
				<h2 className="text-2xl">Welcome to Dashboard</h2>
			</div>
		</>
	);
}
