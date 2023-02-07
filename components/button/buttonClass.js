export function variantClass(variant, outline = false) {
	let variantClass = '';

	switch (variant) {
		case 'brand':
			variantClass = outline
				? 'border-brand text-brand hover:text-white hover:bg-brand'
				: 'bg-brand border-brand text-brand-inverse hover:bg-gray-600 hover:border-gray-600';
			break;

		case 'brand-inverse':
			variantClass = outline
				? 'border-brand-inverse text-brand-inverse hover:text-brand hover:bg-brand-inverse'
				: 'bg-brand-inverse border-brand-inverse text-brand hover:bg-brand hover:text-white';
			break;

		case 'danger':
			variantClass = outline
				? 'border-red-500 text-red-500 hover:text-white hover:bg-red-500'
				: 'bg-red-500 border-red-500 text-white hover:bg-red-700 hover:border-red-700';
			break;

		case 'success':
			variantClass = outline
				? 'border-green-500 text-green-500 hover:text-white hover:bg-green-500'
				: 'bg-green-500 border-green-500 text-white hover:text-green-500 hover:bg-transparent';
			break;

		case 'warning':
			variantClass = outline
				? 'border-yellow-700 text-yellow-700 hover:text-yellow-900 hover:bg-yellow-400'
				: 'bg-yellow-400 border-yellow-400 text-yellow-900 hover:text-yellow-700 hover:border-yellow-700 hover:bg-transparent';
			break;

		case 'info':
			variantClass = outline
				? 'border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400'
				: 'bg-yellow-400 border-yellow-400 text-white hover:text-yellow-400 hover:bg-transparent';
			break;

		default:
			variantClass = outline
				? 'border-brand text-brand hover:text-white hover:bg-brand'
				: 'bg-brand border-brand text-white hover:text-white hover:bg-blue-500';
			break;
	}

	return variantClass;
}

export function sizeClass(size) {
	let sizeClass = '';

	switch (size) {
		case 'xs':
			sizeClass = 'py-0.2 px-0.6 text-[0.65rem] gap-1';
			break;

		case 'sm':
			sizeClass = 'py-0.5 px-1 text-xs gap-1.5';
			break;

		case 'lg':
			sizeClass = 'py-2 px-8 text-base gap-3';
			break;

		case 'xl':
			sizeClass = 'py-3 px-10 text-lg gap-3';
			break;

		default:
			sizeClass = 'py-1 px-4 text-sm gap-2';
			break;
	}

	return sizeClass;
}

export function fontWeight(weight) {
	let weightClass = '';

	switch (weight) {
		case 'thin':
			weightClass = 'font-thin';
			break;

		case 'normal':
			weightClass = 'font-normal';
			break;

		case 'bold':
			weightClass = 'font-bold';
			break;

		default:
			weightClass = 'font-medium';
			break;
	}

	return weightClass;
}
