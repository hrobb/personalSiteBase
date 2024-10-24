import Image from "next/image";
import Link from "next/link";
import Card from "@/app/ui/card";
import data from "./data.json";

import ProjectCard from "./ui/projects/projectCard";

import SkillBadge from "./ui/home/skillBadge";

export default function Home() {
	// Imported Data
	const { welcomeCard, projectCard, skillCard } = data.home
	
	const selectedProjects = data.home.projectCard.projectHighlight;
	const selectedSkills = data.home.skillCard.skillHighlight;
	

	// Filter a given set of cards based on if their ID is included in the "top" array 
	function filterCards<T extends {id: number}>(cards: T[], selectedIDs: number[]): T[] {
		return cards.filter(card => selectedIDs.includes(card.id));
	}

	// Fetch chosen projects
	const topProjects = filterCards(
		Object.values(data.projects).flatMap(category => category.projects), 
		selectedProjects
	);

	// Fetch chosen skills
	const topSkills = filterCards(
		Object.values(data.skills).flatMap(category => category.skills),
		selectedSkills
	);
	

	return (
		<main className="flex min-h-screen h-full max-w-9xl flex-col items-center justify-between px-4 py-16 lg:px-24">

			<div className='container p-4 lg:p-8'>
				<div className="flex flex-col lg:flex-row w-full">
					<div className="flex flex-col w-full lg:w-3/4">
						<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
							<h1 className="text-2xl font-bold text-black">{welcomeCard.name}</h1>
							<h2 className="mt-2 text-xl text-gray-600/90">{welcomeCard.greeting}</h2>
							{welcomeCard.description.map((desc, index) => (
								// ADD KEYS FOR OTHER STUFF AS WE DO HERE
								<p key={desc.id} className="mt-4 text-gray-500">{desc.text}</p>
							))}
						</div>
						<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
							<h3 className="text-lg font-semibold text-gray-800">Project Highlights</h3>
							<p className="mt-2 text-gray-500">
								Be sure to check out the <Link href="/projects" className="text-blue-500">projects</Link> page for more projects that I've worked on.
							</p>
							<div className="flex flex-col justify-center items-center">
								{topProjects.map((project, index) => (
									<ProjectCard
										key={index}
										id={project.id}
										imgSrc={project.imgSrc}
										title={project.title}
										skillsUsed={project.skillsUsed}
										description={project.description}
									/>
								))}
							</div>
						</div>
					</div>

					<div className="flex w-full lg:w-1/4">
						<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
							<h3 className="text-lg font-semibold text-gray-800">Top Skills</h3>
							<p className="mt-2 text-gray-500">
								Be sure to check out the <Link href="/skills" className="text-blue-500">skills</Link> page for more skills and how I've employed these.
							</p>
							<div className="flex flex-row flex-wrap justify-center">
								{topSkills.map((skill, index) => (
									<div key={index} className="skillContainer m-4">
										<SkillBadge
											key={index}
											id={skill.id}
											title={skill.title}
											iconName={skill.iconName}
										/>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <Card
				title={cards[0].title}
				text={cards[0].text}
				imgSrc={cards[0].imgSrc}
				altText={cards[0].altText}
			/> */}

			{/* <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
				<Image
				className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
				src="/next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
				/>
			</div> */}

		</main>
	);
}
