import Image from "next/image";
import Card from "@/app/ui/card";
import data from "./data.json";

export default function Home() {

	const cards = data.home.cards;


	return (
		<main className="flex min-h-screen h-full max-w-9xl flex-col items-center justify-between px-4 py-16 sm:px-24">

			<div className="flex flex-row w-full">
				<div className="flex flex-col w-3/4">
					<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
						<h1 className="text-2xl font-bold text-black">Sample Name</h1>
						<h2 className="mt-2 text-xl text-gray-600/90">Hi there, welcome to the site!</h2>
						<p className="mt-4 text-gray-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo tempore reiciendis consectetur fugiat aliquid cupiditate? Distinctio enim voluptate et nobis modi ullam quia at earum, sequi autem dolore, laudantium provident.</p>
					</div>
					<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
						<h3 className="text-lg font-semibold text-gray-800">Highlight Projects?</h3>
					</div>
				</div>

				<div className="flex w-1/4">
					<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
						<h3 className="text-lg font-semibold text-gray-800">Skills?</h3>
						<p className="mt-2 text-gray-500">Test</p>
					</div>
				</div>
			</div>

			{/* <Card
				title={cards[0].title}
				text={cards[0].text}
				imgSrc={cards[0].imgSrc}
				altText={cards[0].altText}
			/> */}

			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<Image
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				src="/next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
				/>
			</div> */}

		</main>
	);
}
