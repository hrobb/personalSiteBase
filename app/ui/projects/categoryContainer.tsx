import ProjectCard from './projectCard'

export interface Project {
	id: number;
	title: string;
	skillsUsed?: string[];
	description: string;
}

export default function CategoryContainer({
	categoryTitle,
	description,
	projectSet
}: {
	categoryTitle: string,
	description?: string,
	projectSet: Project[]
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
			<h1 className='text-xl font-bold text-center md:text-left md:ml-12'>{formatTitle(categoryTitle)}</h1>
			{description && (
				<p className='text-center md:text-left md:ml-16'>{description}</p>
			)}
			<div className='flex flex-wrap justify-center md:justify-evenly'>
				{projectSet.map((project, index) => (
					<ProjectCard
						key={index}
						id={project.id}
						title={project.title}
						skillsUsed={project.skillsUsed}
						description={project.description}
					/>
				))}
			</div>
		</div>
	)
}