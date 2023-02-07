export default function Container({ children, className }) {
	return <div className={`mx-auto w-full max-w-app relative px-4 ${className || ''}`}>{children}</div>;
}
