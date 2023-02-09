import Link from 'next/link'

export default function MainMenu() {
	return (
    <section className="mt-24">
      <ul>
        <li>
          <Link href="/" className="w-5 h-5 mt-8 ml-8">Your Bioverse</Link>
        </li>
        <li>
          <Link href="/about" className="w-5 h-5 ml-8">Your Campaign</Link>
        </li>
        <li>
          <Link href="/blog/hello-world" className="w-5 h-5 ml-8">Imaging</Link>
        </li>
        <li>
          <Link href="/blog/hello-world" className="w-5 h-5 ml-8">Clinical Report</Link>
        </li>
      </ul>
    </section>
   
		// <section className="mt-5">
		// 	<div className="grid grid-cols-3 gap-5 w-full">
		// 		<IconMenu title="Your Bioverse" href="#"  />
		// 		<IconMenu title="Your Campaign" href="#"  />
		// 		<IconMenu title="Imaging" href="#"  />
		// 		<IconMenu title="Clinical Report" href="#"  />
		// 	</div>
		// </section>
	);
}
