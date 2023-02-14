import Link from 'next/link'

export default function MainMenu() {
	return (
    <nav class="flex w-48 h-full">
      <div class="w-full flex mx-auto px-1 py-8">
        <div class="w-full flex items-start text-gray-900 text-xl border-gray-900">
            <ul className='py-16'>
              <li>
                <Link href="/private/dashboard/your-bioverse" className="rounded-full hover:bg-gray-200 py-0.5 px-4 hover:no-underline hover:text-black w-5 h-5 mt-8 ml-6 text-gray-500 capitalize text-xs">your bioverse</Link>
              </li>
              <li>
                <Link href="/private/dashboard/your-campaign" className="rounded-full hover:bg-gray-200 no-underline py-0.5 px-4 hover:no-underline hover:text-black w-5 h-5 ml-6 text-gray-500 capitalize text-xs">your campaign</Link>
              </li>
              <li>
                <Link href="/private/dashboard/imaging" className="rounded-full hover:bg-gray-200 py-0.5 px-4 hover:no-underline hover:text-black w-5 h-5 ml-6 text-gray-500 capitalize text-xs">imaging</Link>
              </li>
              <li>
                <Link href="/private/dashboard/clinical-report" className="rounded-full hover:bg-gray-200 py-0.5 px-4 hover:no-underline hover:text-black w-5 h-5 ml-6 text-gray-500 capitalize text-xs">clinical report</Link>
              </li>
            </ul>
        </div>
      </div>
    </nav>
   
	);
}
