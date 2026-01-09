import './globals.css';

export const metadata = {
	title: 'Auth App',
	description: 'Next.js Auth with LocalStorage',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="bg-gray-100">{children}</body>
		</html>
	);
}
