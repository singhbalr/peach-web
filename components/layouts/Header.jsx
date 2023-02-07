import { Transition } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaBars, FaEllipsisH, FaHome, FaQrcode, FaSearch, FaUserAlt, FaWallet, FaBell, FaQuestionCircle  } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { accountRoute, walletRoute } from '../../configs/routes';
import { Link } from '../button/Link';
import Container from './Container';

export function IndexHeader() {
	return (
		<div className="text-brand fixed inset-x-0 left-0 top-0 z-30 mb-2">
			<Container>
				<div className="flex items-center gap-3 justify-between bg-white py-1 -mx-4 px-4">
					<div className="flex gap-1 items-start">
            <FaBars className='w-5 h-5 right-8 mt-8' />
						{/* <img src="/assets/images/logo.png" alt="Bioverse Logo" className="h-14" /> */}
						<span className="bg-brand py-0.5 px-3 text-lg text-black ml-2 mt-6">Your Bioverse</span>
					</div>

					<div className="flex items-center gap-3">
            <div className='relative'>
              <span className="absolute right-36 -top-1 flex items-center w-12 h-4 text-black border-gray-50 text-[10px] rounded-full ring-black ring-1">English</span>
            </div>
            <div className="relative">
              <span className="absolute right-16 -top-1 flex items-center w-16 h-4 text-black border-gray-50 text-[14px]">
                Settings
              </span>
            </div>
						<div className="relative">
							<span className="absolute -right-1 -top-1 flex items-center w-16 h-4 text-black border-gray-50 text-[14px]">
								Log out
							</span>
						</div>

					</div>
				</div>
			</Container>
		</div>
	);
}

function MobileNav({ href, Icon, title, onClick }) {
	const router = useRouter();

	if (onClick) {
		return (
			<button
				type="button"
				className="pt-2 pb-1 px-1 flex flex-col justify-center items-center gap-0.5 text-[.6rem] w-full"
				onClick={onClick}
			>
				<Icon className="h-5 w-5" />
				{title}
			</button>
		);
	}

	if (href) {
		return (
			<Link
				href={href}
				className={`pt-2 pb-1 px-1 flex flex-col justify-center items-center gap-0.5 text-[.6rem] w-full ${
					(href !== '/' && router.pathname.includes(href)) || router.pathname === href ? 'text-brand' : ''
				}`}
				title={title}
			>
				<Icon className="h-5 w-5" />
				{title}
			</Link>
		);
	}

	return <></>;
}

export function MoreMenuButton({ Icon, title, onClick }) {
	return (
		<button
			type="button"
			className="bg-white py-3 px-5 flex items-center gap-5 w-full font-semibold hover:opacity-80"
			onClick={onClick}
		>
			<Icon className="w-5 h-5 text-brand" />
			{title}
		</button>
	);
}

function SearchApp({ searchCallback }) {
	const [showSearch, setShowSearch] = useState(false);
	const [search, setSearch] = useState('');

	useEffect(() => {
		searchCallback(search);
	}, [search]);

	return (
		<div
			className={`flex items-center gap-2 ml-auto bg-white ${
				showSearch ? 'absolute w-full left-0 top-0 h-full px-4' : ''
			}`}
		>
			<Transition
				show={showSearch}
				enterFrom="scale-x-0"
				leaveTo="scale-x-0"
				className="transition origin-right w-full"
			>
				<input
					type="text"
					className="border-gray-300 border py-1 px-2 rounded bg-white w-full text-sm"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
					placeholder="Type to search..."
					autoFocus
				/>
			</Transition>

			<button
				type="button"
				className="py-3 ml-auto flex-shrink-0"
				onClick={() => {
					if (showSearch) {
						setSearch('');
					}

					setShowSearch(!showSearch);
				}}
			>
				{!showSearch ? <FaSearch className="w-5 h-5" /> : <HiX className="w-5 h-5" />}
			</button>
		</div>
	);
}

export function Header({ title, searchCallback }) {
	const router = useRouter();

	return (
		<>
			<div className="w-full relative z-20">
				{router.pathname !== '/' && (
					<div className={`fixed inset-x-0 top-0`}>
						<Container>
							<div className={`flex gap-2 items-center -mx-4 px-4 relative text-brand bg-white`}>
								<button
									type="button"
									className="py-3"
									onClick={() => {
										let pathNames = router.pathname.split('/');
										pathNames.pop();

										const path = ('/' + pathNames.join('/')).replace('//', '/');

										if (path.includes('[slug]')) {
											router.back();
										} else {
											router.push(path);
										}
									}}
								>
									<FaArrowLeft className="w-5 h-5" />
								</button>

								<h1 className="font-bold">{title}</h1>

								{searchCallback && <SearchApp searchCallback={searchCallback} />}
							</div>
						</Container>
					</div>
				)}
			</div>
		</>
	);
}

export function BottomHeaderMenu() {
	const router = useRouter();

	return (
		<div className="text-gray-400 fixed inset-x-0 bottom-0 z-30 bg-white border-t">
			<Container>
				<div className="flex justify-between gap-2 items-center">
					<MobileNav title="Home" Icon={FaHome} href="/" />
					<MobileNav title="Account" Icon={FaUserAlt} href={accountRoute.index} />
					<Link
						href={walletRoute.scan}
						className={`py-1 w-20 h-20 px-1 flex flex-col flex-shrink-0 justify-center items-center text-[.6rem] bg-white rounded-full -mt-10 -mx-3 shadow-lg border ${
							router.pathname.includes(walletRoute.scan) ? 'text-brand' : ''
						}`}
						title="SCAN"
					>
						<FaQrcode className="h-8 w-8 flex-shrink-0" />
						{/* <div className="mt-0.5">SCAN</div> */}
					</Link>
					<MobileNav title="Wallet" Icon={FaWallet} href={walletRoute.index} />
					<MobileNav title="More" Icon={FaEllipsisH} href="/more" />
				</div>
			</Container>
		</div>
	);
}
