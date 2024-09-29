import Image from 'next/image';

export default function SocialMediaLink({
    linkTitle,
	link,
	src
}: {
    linkTitle: string;
	link: string;
	src: string;
}) {
	return (
		<div className='child flex flex-row mx-auto max-w-4xl border-2 border-black rounded-lg sm:m-6 sm:p-6'>
			<div className="md:w-5/5 p-2">
				<div>
					<a href={link}>{linkTitle}
						<Image
							src={src}
							className=""
							width={100}
							height={50}
							objectFit="cover"
							alt="No Photo Provided"
						/>
					</a>
				</div>
			</div>
		</div>
	)
}