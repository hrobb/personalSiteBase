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

		<div className="card flex flex-col w-full justify-center items-center text-center bg-gray-100 border-2 border-gray-600/70 drop-shadow">
			<div className="w-full mb-4">
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



			<div className="flex flex-col w-full p-6">
				{skillsUsed && (
					<div className="flex justify-around">
						<p className="">{title}</p>
						<div>
							{skillsUsed.map((skill, index) => (
								<button key={index} className="m-6 px-6 py-3 text-white bg-gray-500 rounded-md">{skill}</button>
							))}
						</div>
					</div>
				)}
				<p>{description}</p>
			</div>
		</div>
	)
}
