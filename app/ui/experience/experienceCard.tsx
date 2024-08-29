'use client'

import Image from 'next/image';
import { useEffect, useState } from "react";
import clsx from 'clsx';

export default function ExperienceCard({
	index,
	orientation,
	title,
	shortText,
	longText,
	imgSrc,
	altText
}: {
	index: number,
	orientation: 'left' | 'right';
	title: string;
	shortText: string;
	longText: string;
	imgSrc: string;
	altText: string;
}) {
	const [expand, setExpand] = useState(false);
	const [expandNotice, disableNotice] = useState(true && index == 0);

	const handleClick = () => {
		setExpand(!expand);
		disableNotice(false);
	}

	return (
		<div className='container flex justify-center items-center'>
			{/* Spacer div */}
			<div className={clsx(
				'w-0 md:w-1/4 lg:w-1/2 animate-width-transition',
				{'hidden': orientation == 'left', 'flex': orientation == 'right'}
			)}/>

			{/* Dividing line for large displays */}
			<div className={`flex-1 ${orientation === 'left' ? 'hidden' : 'right-0'} align-center w-full h-1 bg-gray-500`}>
			</div>

			<div className={clsx(
				'flex-1 align-center w-full h-1 bg-gray-500',
				{'hidden': orientation == 'left', 'right-0': orientation == 'right'}
			)}/>

			{/* Experience Card content */}
			<div
				onClick={handleClick} 
				className='flex flex-col max-w-full mx-auto max-w-xl transition transition-transform hover:scale-105 bg-white border-4 border-gray-500 rounded-lg m-6 p-6 cursor-pointer'>
				<div className='flex flex-col md:flex-row mx-auto overflow-x-auto justify-center items-center'>
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
						<h1 className='text-2xl font-bold'>{title}</h1>
						<p>{shortText}</p>
					</div>
				</div>
				{expand && (
					<div className='mx-auto text-justify p-2'>
						<p>{longText}</p>
					</div>
				)}
				{expandNotice && (
					<div className='text-center pt-4 text-sm text-gray-700 italic'>
						<p>Click to expand...</p>
					</div>
				)}
			</div>

			<div className={clsx(
				'flex-1 align-center w-full h-1 bg-gray-500',
				{'hidden': orientation == 'right', 'left-0': orientation == 'left'}
			)}/>

			<div className={clsx(
				'w-0 md:w-1/4 lg:w-1/2 animate-width-transition',
				{'hidden': orientation == 'right', 'flex': orientation == 'left'}
			)}/>

		</div>
	)
}