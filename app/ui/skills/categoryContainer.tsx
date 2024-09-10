import SkillCard from './skillCard'

export interface Skill {
	id: number;
	title: string;
	iconName: string;
}

export default function CategoryContainer({
	categoryTitle,
	skillSet
}: {
	categoryTitle: string,
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
		<div className='container flex flex-col p-8'>
			<h1 className='text-xl text-center md:text-left md:ml-12'>{formatTitle(categoryTitle)}</h1>
			<div className='flex flex-wrap justify-center md:justify-evenly'>
				{skillSet.map((skill, index) => (
					<SkillCard
						key={index}
						id={skill.id}
						title={skill.title}
						iconName={skill.iconName}
					/>
				))}
			</div>
		</div>
	)
}