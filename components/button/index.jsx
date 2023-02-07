export function ButtonInverse({ title, className, onClick, type }) {
	return (
		<button
			className={`bg-gradient-to-b from-white to-gray-400 py-2 px-10 text-brand block text-center rounded-full font-semibold hover:opacity-90 transition shadow-lg ${
				className || ''
			}`}
			onClick={onClick ? () => onClick() : () => {}}
			type={type || 'button'}
		>
			{title}
		</button>
	);
}

export function Button({ title, className, onClick, type }) {
	return (
		<button
			type={type || 'button'}
			className={`bg-gradient-to-b from-brand to-brand-dark py-2 px-16 text-white block text-center rounded-full font-semibold hover:opacity-90 transition ${
				className || ''
			}`}
			onClick={onClick ? () => onClick() : () => {}}
		>
			{title}
		</button>
	);
}
