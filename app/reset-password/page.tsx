'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ResetPasswordPage() {
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleReset = () => {
		const storedUser = localStorage.getItem('user');

		if (!storedUser) {
			alert('Something went wrong');
			return;
		}

		const user = JSON.parse(storedUser);

		user.password = btoa(password); // encode password
		localStorage.setItem('user', JSON.stringify(user));

		alert('Password reset successful');
		router.push('/login');
	};

	return (
		<div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded">
			<h2 className="text-xl mb-4">Reset Password</h2>

			<Input type="password" placeholder="New password" onChange={(e) => setPassword(e.target.value)} />

			<Button onClick={handleReset} className="mt-4">
				Reset Password
			</Button>
		</div>
	);
}
