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
		<div className='container flex flex-col justify-around'>
			<h1>{formatTitle(categoryTitle)}</h1>
			<div className='flex'>
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