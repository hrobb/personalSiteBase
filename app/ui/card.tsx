import Image from 'next/image';

export default function Card({
	title,
	text,
	imgSrc,
	altText
}: {
	title: string;
	text: string;
	imgSrc: string;
	altText: string;
}) {
	return (
		<div className='flex flex-row mx-auto max-w-4xl border-2 border-black rounded-lg sm:m-6 sm:p-6'>
			<div className='hidden md:flex justify-center w-1/5 p-2'>
				<Image
					src={imgSrc}
					className=""
					width={100}
					height={100}
					alt={altText}
				/>
			</div>
			<div className="md:w-4/5 p-2">
				<div>
					<h1 className='text-2xl font-bold'>{title}</h1>
				</div>
				<div>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}