import data from '../data.json';
import SummaryCard from '../ui/experience/summaryCard';
import ExperienceCard from '../ui/experience/experienceCard';


export default function Experience() {
	const summaryCard = data.experience.summaryCards[0];
	const futureCard = data.experience.summaryCards[1];
	const expCards = data.experience.expCards;
	
	return (
		<main className='relative min-h-screen h-full max-w-9xl'>
			<div className='flex items-center justify-between px-16 py-4 sm:px-24'>
				<SummaryCard
					title = {summaryCard.title}
					text = {summaryCard.text}
				/>
			</div>
			
			<div className="absolute top-20 bottom-44 left-1/2 w-1 bg-gray-500 z-[-1]"></div>

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

			<div className='flex items-center justify-between px-16 py-4 sm:px-24'>
				<SummaryCard
					title = {futureCard.title}
					text = {futureCard.text}
				/>
			</div>

			<div className='flex flex-col items-center justify-between px-16 pt-4 pb-8 sm:px-24'>
				<div className='max-w-full sm:w-4xl bg-red-400/50 border-[3px] border-gray-500 rounded-lg text-center p-4'>
					<p>Interested in checking out my professional resume? Feel free to download a copy <a href='/api/pdfDownload' download className='text-blue-500 hover:text-blue-700 visited:text-purple-600'>here</a>!</p>
				</div>
			</div>
		</main>
	)
}