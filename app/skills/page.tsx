import { Metadata } from 'next';
import data from '../data.json';
import CategoryContainer from '../ui/skills/categoryContainer';

export const metadata: Metadata = {
	title: "Skills"
}

export default function Skills() {
	const categories = data.skills;
	
	return (
		<main className="flex min-h-screen h-full max-w-9xl flex-col items-center justify-between px-4 py-16 sm:px-24">
			{Object.entries(categories).map(([category, categoryContents]) => (
				<CategoryContainer
					key={category}
					categoryTitle={category}
					description={categoryContents.description}
					skillSet={categoryContents.skills}
				/>
			))}
		</main>
	)
}