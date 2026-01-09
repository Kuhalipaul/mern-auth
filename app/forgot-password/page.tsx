'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import Button from '../components/Button';

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState('');
	const router = useRouter();

	const handleSubmit = () => {
		const storedUser = localStorage.getItem('user');

		if (!storedUser) {
			alert('No user found. Please register first.');
			return;
		}

		const user = JSON.parse(storedUser);

		if (user.email !== email) {
			alert('Email not found');
			return;
		}

		// simulate email verification success
		router.push('/reset-password');
	};

	return (
		<div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded">
			<h2 className="text-xl mb-4">Forgot Password</h2>

			<Input placeholder="Enter your registered email" onChange={(e) => setEmail(e.target.value)} />

			<Button onClick={handleSubmit} className="mt-4">
				Continue
			</Button>
		</div>
	);
}
