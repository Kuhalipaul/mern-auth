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
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="w-full max-w-sm bg-white p-6 rounded-lg shadow">
				<h2 className="text-2xl font-semibold text-center mb-6">Create an account</h2>

				<Input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

				<Input
					type="password"
					placeholder="Password"
					onChange={(e) => setPassword(e.target.value)}
					className="mt-3"
				/>

				<Button onClick={handleRegister} className="mt-5 w-full" disabled={!email || !password}>
					Register
				</Button>

				<p className="text-sm text-center text-gray-600 mt-4">
					Already have an account?{' '}
					<span
						className="text-blue-600 cursor-pointer hover:underline"
						onClick={() => router.push('/login')}
					>
						Login
					</span>
				</p>
			</div>
		</div>
	);
}
