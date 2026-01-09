'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import { registerUser } from '../lib/auth';

export default function RegisterPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleRegister = () => {
		registerUser(email, password);
		router.push('/login');
	};

	return (
		<div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded">
			<h2 className="text-xl mb-4">Register</h2>
			<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
			<Input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				className="mt-3"
			/>
			<Button onClick={handleRegister} className="mt-4">
				Register
			</Button>
		</div>
	);
}
