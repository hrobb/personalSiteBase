import data from '../data.json';
import SummaryCard from '../ui/experience/summaryCard';
import ExperienceCard from '../ui/experience/experienceCard';


export default function Experience() {
	const summaryCard = data.experience.summaryCards;
	const expCards = data.experience.expCards;
	
	return (
		<main className='relative min-h-screen h-full max-w-9xl'>
			<div className='flex items-center justify-between px-16 py-4 sm:px-24'>
				<SummaryCard
					title = {summaryCard[0].title}
					text = {summaryCard[0].text}
				/>
			</div>
			
			<div className="absolute top-20 bottom-0 left-1/2 w-1 bg-gray-500 z-[-1]"></div>

			<div className="flex flex-col items-center justify-between px-16 py-4 sm:px-24">
				{expCards.map((card, index) => (
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
			</div>
		</main>
	)
}