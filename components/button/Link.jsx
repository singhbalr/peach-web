import NextLink from 'next/link';
import { fontWeight, sizeClass, variantClass } from './buttonClass';

export function Link({ href, children, className, title }) {
	return (
		<NextLink href={href} passHref={true}>
			<a title={title || ''} className={className || ''}>
				{children}
			</a>
		</NextLink>
	);
}

export function LinkButton({ href, children, className, title, variant, size, outline, pill, weight }) {
	return (
		<NextLink href={href} passHref={true}>
			<a
				title={title || ''}
				className={`border-2 inline-flex items-center justify-center ${fontWeight(weight)} ${
					outline ? 'hover:shadow' : 'shadow hover:shadow-none'
				} ${pill ? 'rounded-full' : 'rounded-lg'} ${variantClass(variant, outline)} ${sizeClass(size)} ${
					className || ''
				}`}
			>
				{children}
			</a>
		</NextLink>
	);
}
