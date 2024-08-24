import data from '../data.json';
import ExperienceCard from '../ui/experience/experienceCard';


export default function Experience() {
	const cards = data.experience.expCards;
	
	return (
		<div className='relative min-h-screen h-full max-w-9xl'>
			<div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gray-500 z-[-1]"></div>
			<main className="flex flex-col items-center justify-between p-16 sm:p-24">
				<ExperienceCard
					orientation='left'
					title={cards[0].title}
					text={cards[0].text}
					imgSrc={cards[0].imgSrc}
					altText={cards[0].altText}
				/>

				<ExperienceCard
					orientation='right'
					title={cards[1].title}
					text={cards[1].text}
					imgSrc={cards[1].imgSrc}
					altText={cards[1].altText}
				/>

				<ExperienceCard
					orientation='left'
					title={cards[2].title}
					text={cards[2].text}
					imgSrc={cards[2].imgSrc}
					altText={cards[2].altText}
				/>
			</main>
		</div>
	)
}