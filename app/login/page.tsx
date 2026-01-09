'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginUser } from '../lib/auth';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const router = useRouter();

	const handleLogin = () => {
		const success = loginUser(email, password);
		if (success) router.push('/dashboard');
		else alert('Invalid credentials');
	};

	return (
		<div className="max-w-sm mx-auto mt-20 bg-white p-6 rounded">
			<h2 className="text-xl mb-4">Login</h2>
			<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
			<Input
				type="password"
				placeholder="Password"
				onChange={(e) => setPassword(e.target.value)}
				className="mt-3"
			/>
			<Button onClick={handleLogin} className="mt-4">
				Login
			</Button>
		</div>
	);
}
