import SkillCard from './skillCard'

export interface Skill {
	id: number;
	title: string;
}

export default function CategoryContainer({
	categoryTitle,
	skillSet
}: {
	categoryTitle: string,
	skillSet: Skill[]
}) {
	return (
		<div className='container flex flex-col justify-around'>
			<h1>{categoryTitle}</h1>
			<div>
				{skillSet.map((skill, index) => (
					<SkillCard
						id={skill.id}
						title={skill.title}
					/>
				))}
			</div>
		</div>
	)
}