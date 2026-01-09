type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: ButtonProps) {
	return (
		<button {...props} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
			{children}
		</button>
	);
}
