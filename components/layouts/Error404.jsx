import Image from 'next/image';
import Container from './Container';
import Head from 'next/head';

export default function Error404() {
	return (
		<>
			<Head>
				<title>Error 404!</title>
			</Head>

			<Container>
				<div className="min-h-screen-inner flex items-center justify-center flex-col gap-2 text-center">
					<Image src="/assets/images/ilustrations/not-found.svg" height="400" width="400" className="w-10/12" />
					<h1 className="text-red-500 font-bold text-3xl">Error 404!</h1>
					<p className="text-gray-500 text-sm px-10">Halaman tidak ditemukan. Silahkan kembali ke halaman sebelumya.</p>
				</div>
			</Container>
		</>
	);
}
