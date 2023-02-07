export function MenuButton({ Icon, title, onClick }) {
	return (
		<button
			type="button"
			className="w-24 h-24 border-white border-4 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full p-1.5"
			onClick={onClick}
		>
			<div className="w-full h-full bg-gradient-to-b from-blue-800 to-blue-600 rounded-full flex flex-col items-center justify-center gap-1 hover:from-blue-600 hover:to-blue-800 transition">
				<Icon className="w-6 h-6" />
				<div>{title}</div>
			</div>
		</button>
	);
}
