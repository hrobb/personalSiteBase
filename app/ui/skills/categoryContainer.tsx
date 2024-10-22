import SkillCard from './skillCard'

export interface Skill {
	id: number;
	title: string;
	iconName: string;
	description?: string;
	projects?: string[];
}

export default function CategoryContainer({
	categoryTitle,
	description,
	skillSet
}: {
	categoryTitle: string,
	description: {id: number, text: string}[],
	skillSet: Skill[]
}) {

	const formatTitle = (text: string): string => {
		const jsonString = text.replace(/([a-z])([A-Z])/g, '$1 $2');
		const formattedTitle = jsonString
		  .split(' ')
		  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
		  .join(' ');
		return formattedTitle;
	};

	return (
		<div className='container flex flex-col p-4 sm:p-8'>
			<h1 className='text-xl font-bold text-center md:text-left md:ml-12'>{formatTitle(categoryTitle)}</h1>
			{description.map((desc, index) => (
				<p key={desc.id} className='mt-4 text-center md:text-left md:ml-16'>{desc.text}</p>
			))}
			<div className='flex flex-wrap justify-center md:justify-evenly'>
				{skillSet.map((skill, index) => (
					<SkillCard
						key={index}
						id={skill.id}
						title={skill.title}
						iconName={skill.iconName}
						description={skill.description}
						projects={skill.projects}
					/>
				))}
			</div>
		</div>
	)
}