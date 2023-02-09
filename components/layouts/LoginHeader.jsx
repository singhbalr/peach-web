import { Transition } from '@headlessui/react';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaBars, FaEllipsisH, FaHome, FaQrcode, FaSearch, FaUserAlt, FaWallet, FaBell, FaQuestionCircle  } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { accountRoute, walletRoute } from '../../configs/routes';
import { Link } from '../button/Link';
import Container from './Container';

export function LoginHeader() {
	return (
		<div className="text-brand fixed inset-x-0 left-0 top-0 z-30 mb-2">
			<Container>
				<div className="flex items-center gap-3 justify-between bg-white py-1 -mx-4 px-4">
					<div className="flex gap-1 items-start">
						<img src="/assets/images/logo.png" alt="Bioverse Logo" className="h-8 mt-6" />
						<span className="bg-brand py-0.5 px-3 text-lg font-semibold ml-2 mt-6">Peach Bioverse</span>
					</div>

					<div className="flex items-center">
            <div className="relative">
              <button className="bg-black py-3 px-4 rounded-full absolute right-16 -top-1 flex items-center w-16 h-4 text-white text-[9px]">
                Sign Up
              </button>
            </div>
						<div className="relative">
							<button className="bg-white outline outline-1 outline-black py-3 px-4 rounded-full absolute -right-1 -top-1 flex items-center w-16 h-4  text-[9px]">
								English
							</button>
						</div>

					</div>
				</div>
			</Container>
		</div>
	);
}




