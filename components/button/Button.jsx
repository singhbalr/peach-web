import { fontWeight, sizeClass, variantClass } from './buttonClass';

export function Button({ type, className, children, variant, size, outline, pill, weight, onClick }) {
	return (
		<button
			type={type || 'button'}
			className={`border-2 inline-flex items-center justify-center ${fontWeight(weight)} ${
				outline ? 'hover:shadow' : 'shadow hover:shadow-none'
			} ${pill ? 'rounded-full' : 'rounded-lg'} ${variantClass(variant, outline)} ${sizeClass(size)}  ${
				className || ''
			}`}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
