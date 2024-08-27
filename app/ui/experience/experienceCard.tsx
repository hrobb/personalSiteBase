import Image from 'next/image';

export default function ExperienceCard({
	orientation,
	title,
	text,
	imgSrc,
	altText
}: {
	orientation: string;
	title: string;
	text: string;
	imgSrc: string;
	altText: string;
}) {

	return (
		<div className='container flex justify-center items-center'>
			{/* Spacer div */}
			<div className={`${orientation == "left" ? 'hidden' : 'flex w-0 md:w-1/4 lg:w-1/2 animate-width-transition'}`}>
			</div>

			{/* Dividing line for large displays */}
			<div
				className={`flex-1 ${orientation === 'left' ? 'hidden' : 'right-0'} align-center w-full h-1 bg-gray-500`}
			></div>

			{/* Experience Card content */}
			<div className={`${orientation == "left" ? '' : ''} max-w-full mx-auto`}>
				<div className='flex flex-col md:flex-row mx-auto max-w-xl overflow-x-auto justify-center items-center bg-white border-4 border-gray-500 rounded-lg m-6 p-6 animate-width-transition'>
					<div className='flex justify-center md:w-1/4 p-5'>
						<Image
							src={imgSrc}
							className=""
							width={100}
							height={100}
							alt={altText}
						/>
					</div>
					<div className="md:w-3/4 p-2">
						<div>
							<h1 className='text-2xl font-bold'>{title}</h1>
						</div>
						<div>
							<p>{text}</p>
						</div>
					</div>
				</div>
			</div>

			<div
				className={`flex-1 ${orientation === 'left' ? 'left-0' : 'hidden'} align-center w-full h-1 bg-gray-500`}
			></div>


			<div className={`${orientation == "left" ? 'flex w-0 md:w-1/4 lg:w-1/2 animate-width-transition' : 'hidden'}`}>
			</div>
		</div>
	)
}