import data from '../data.json';
import CategoryContainer from '../ui/skills/categoryContainer';

export default function Skills() {
	const categories = data.skills;
	
	return (
		<main className="flex min-h-screen h-full max-w-9xl flex-col items-center justify-between p-24">
			<h1>Skills</h1>

			{Object.entries(categories).map(([category, skills]) => (
				<CategoryContainer
					key={category}
					categoryTitle={category}
					skillSet = {skills}
				/>
			))}
		</main>
	)
}