import data from '../data.json';
import ExperienceCard from '../ui/experience/experienceCard';


export default function Experience() {
	const cards = data.experience.expCards;
	
	return (
		<div className='relative min-h-screen h-full max-w-9xl'>
			<div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-500 z-[-1]"></div>

			<main className="flex flex-col items-center justify-between p-16 sm:p-24">
				{cards.map((card, index) => (
					<ExperienceCard
						key={index}
						index={index}
						orientation={index % 2 == 0 ? 'left' : 'right'}
						title={card.title}
						shortText={card.shortText}
						longText={card.longText}
						imgSrc={card.imgSrc}
						altText={card.altText}
					/>
				))}
			</main>
		</div>
	)
}