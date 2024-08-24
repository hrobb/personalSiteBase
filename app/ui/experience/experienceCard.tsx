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
		//This is probably going to need to be switched to flex instead of relative since the overflow isn't controlling well (and the parent is already set up to flex)
		<div className={`${orientation == "left" ? 'sm:right-1/4' : 'sm:left-1/4'} sm:relative max-w-full mx-auto`}>
			<div className='flex flex-col sm:flex-row mx-auto max-w-xl overflow-x-auto justify-center items-center bg-white border-4 border-gray-500 rounded-lg m-6 p-6'>
				<div className='flex justify-center sm:w-1/4 p-5'>
					<Image
						src={imgSrc}
						className=""
						width={100}
						height={100}
						alt={altText}
					/>
				</div>
				<div className="sm:w-3/4 p-2">
					<div>
						<h1 className='text-2xl font-bold'>{title}</h1>
					</div>
					<div>
						<p>{text}</p>
					</div>
				</div>
			</div>
		</div>
	)
}