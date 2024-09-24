'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function ProjectCard ({
	id,
	imgSrc,
	title,
	skillsUsed,
	description
}: {
	id: number,
	imgSrc: string[],
	title: string,
	skillsUsed?: string[],
	description: string,
}) {

	return (

		<div className="card flex flex-col w-full 2xl:w-4/5 justify-center items-center text-center bg-gray-100 border-2 rounded border-gray-600/70 my-4 drop-shadow">
			{/* Image carousel */}
			<div className="w-full">
				<Swiper
					spaceBetween={10}
					slidesPerView={1}
					pagination={{ clickable: true }}
					navigation={true}
					modules={[Navigation, Pagination]}
				>
				{imgSrc.map((image, index) => (
					<SwiperSlide key={index}>
						<div className='flex h-96 justify-center items-center'>
							<img src={image} alt={`Slide ${index + 1}`} className="h-80 w-auto rounded-t-lg" />
						</div>
					</SwiperSlide>
				))}
				</Swiper>
			</div>

			{/* Lower informational section */}
			<div className="flex flex-col md:flex-row w-full border-t-2 border-gray p-6">		
				<div className="flex flex-col md:w-2/5 mb-6">
					<p className="text-2xl mb-2">{title}</p>
					{skillsUsed && (
					<div className='flex flex-wrap justify-center'>
						{skillsUsed.map((skill, index) => (
							<button key={index} className="m-3 px-6 py-3 text-white bg-gray-500 rounded-md">{skill}</button>
						))}
					</div>
					)}
				</div>
				<p className='flex md:w-3/5'>{description}</p>
			</div>
		</div>
	)
}
