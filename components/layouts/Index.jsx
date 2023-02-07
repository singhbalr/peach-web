import { useRouter } from 'next/dist/client/router';
import { FaArrowLeft } from 'react-icons/fa';
import Container from './Container';
import Head from './Head';
import { Header } from './Header';

export function TicketTemplate({ children, title, description, image, type, showSearch }) {
	const router = useRouter();

	return (
		<>
			<Head title={title} description={description} image={image} type={type} />

			<div className="w-full relative pb-20 pt-12 min-h-screen">
				<div className="w-full relative z-20">
					<div className="fixed inset-x-0 top-0">
						<Container>
							<div className="flex gap-2 items-center -mx-4 px-4 text-white bg-brand">
								<button type="button" className="py-3" onClick={() => router.back()}>
									<FaArrowLeft className="w-5 h-5" />
								</button>
								<h1 className="font-bold">{title} </h1>
							</div>
						</Container>
					</div>
				</div>

				<div>{children}</div>
			</div>
		</>
	);
}

export function Template({ children, title, description, image, type, searchCallback }) {
	return (
		<>
			<Head title={title} description={description} image={image} type={type} />

			<div className="w-full relative pb-20 pt-11 min-h-screen">
				<Header title={title} searchCallback={searchCallback} />

				<div>{children}</div>
			</div>
		</>
	);
}
