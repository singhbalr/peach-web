import { FaSpinner } from 'react-icons/fa';

export default function FullScreenLoading() {
	return (
		<div className="fixed inset-0 left-0 top-0 z-30 flex items-center justify-center gap-5">
			<div>
				<img src="/assets/images/logo.png" alt="Bioverse" className="max-w-full w-2/3 mx-auto m-10" />

				<div className="flex items-center justify-center gap-5 font-semibold animate-pulse mt-10">
					<FaSpinner className="w-10 h-20 animate-spin" />
					Loading . . .
				</div>
			</div>
		</div>
	);
}
