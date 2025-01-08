import Link from 'next/link';

export default function NotFound() {

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100/50">
		  	<div className="text-center p-10">
				<h1 className="text-6xl font-bold text-black">404</h1>
				<p className="mt-4 text-lg text-gray-800">Sorry, the page you&apos;re looking for doesn&apos;t exist :/</p>
				<Link href="/">
			  		<button className="mt-6 px-6 py-3 text-white bg-gray-500 hover:bg-gray-600 rounded-md transition duration-300">
						Return to Home
			  		</button>
				</Link>
		  	</div>
		</div>
	);
}