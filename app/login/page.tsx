'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginUser } from '../lib/auth';

export default function LoginPage() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const router = useRouter();

	const handleLogin = () => {
		setError('');
		const success = loginUser(email, password);

		if (success) {
			router.push('/dashboard');
		} else {
			setError('Invalid email or password');
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
				<h2 className="text-2xl font-semibold text-center mb-6">Login</h2>

				<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

				<Input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					className="mt-3"
				/>

				{error && <p className="text-red-500 text-sm mt-3">{error}</p>}

				<Button onClick={handleLogin} className="mt-5 w-full" disabled={!email || !password}>
					Login
				</Button>
			</div>
		</div>
	);
}
