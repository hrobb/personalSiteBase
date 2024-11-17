'use client'

import Image from 'next/image';
import { Icons } from '../icons';
import { useEffect, useState } from "react";
import clsx from 'clsx';

export default function ExperienceCard({
	index,
	orientation,
	title,
	position,
	imgSrc,
	altText,
	skillsUsed,
	timeframe,
	location,
	shortText,
	longText
}: {
	index: number,
	orientation: 'left' | 'right',
	title: string,
	position?: string,
	imgSrc: string,
	altText: string,
	skillsUsed: string,
	timeframe: string,
	location: string,
	shortText: string,
	longText: {id: number, text: string}[]
}) {
	const SkillsIcon = Icons.code;
	const Timeframe = Icons.timeframe;
	const Location = Icons.location;

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
				className='flex flex-col max-w-full mx-auto max-w-xl transition transition-transform ease-in-out duration-200 hover:scale-105 bg-white border-4 border-gray-500 rounded-lg m-6 p-6 drop-shadow cursor-pointer overflow-hidden'>
				<div className='flex flex-col md:flex-row overflow-x-auto justify-center items-center'>
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
						<h1 className='text-2xl font-bold pb-2'>{title}</h1>
						<h2 className='text-lg text-gray-700 pb-2'>{position}</h2>
						<div className='pb-2'>
							<p>{shortText}</p>
						</div>
						<div className='flex justify-start items-center pb-2'>
							<SkillsIcon className="flex-shrink-0 w-1/6 h-1/6 sm:w-10 sm:h-10 p-1"></SkillsIcon>
							<p className='sm:text-lg p-1'>{skillsUsed}</p>
						</div>
						<div className='flex justify-start items-center pb-2'>
							<Timeframe className="flex-shrink-0 w-1/6 h-1/6 sm:w-10 sm:h-10 p-1"></Timeframe>
							<p className='sm:text-lg p-1'>{timeframe}</p>
						</div>
						<div className='flex justify-start items-center pb-2'>
							<Location className="flex-shrink-0 w-1/6 h-1/6 sm:w-10 sm:h-10 p-1"></Location>
							<p className='sm:text-lg p-1'>{location}</p>
						</div>
					</div>
				</div>

				<div className={`transition-max-height duration-[600ms] ease-in-out overflow-hidden ${expand ? 'max-h-screen' : 'max-h-0'}`}>
					<div className='mx-auto p-2'>
					{longText.map((LText, index) => (
						<p key={LText.id} className='mt-2'>{LText.text}</p>
					))}
					</div>
				</div>

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