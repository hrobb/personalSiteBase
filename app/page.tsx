import Image from "next/image";
import Link from "next/link";
import Card from "@/app/ui/card";
import data from "./data.json";

import SkillCard from "./ui/skills/skillCard";
import SkillBadge from "./ui/home/skillBadge";

export default function Home() {
	// Imported Data
	//const cards = data.home.cards;
	const welcomeCard = data.home.welcomeCard;
	const selectedSkills = data.home.skillHighlight;

	// Skill section
	const skillCards = data.skills;

	interface Skill {
		id: number;
		title: string;
		iconName: string;
		description: string;
		projects?: string[];
	}

	function filterSkills(skills: Skill[]): Skill[] {
		return skills.filter(skill => selectedSkills.includes(skill.id));
	}

	function getFilteredSkills(): Skill[] {
		const topSkills: Skill[] = [];
		const categories = Object.keys(skillCards) as (keyof typeof skillCards)[];

		categories.forEach(category => {
			const filteredSkills = filterSkills(skillCards[category].skills);
			topSkills.push(...filteredSkills);
		});

		return topSkills;
	}

	const topSkills = getFilteredSkills();
	


	return (
		<main className="flex min-h-screen h-full max-w-9xl flex-col items-center justify-between px-4 py-16 lg:px-24">

			<div className='container p-4 lg:p-8'>
				<div className="flex flex-col lg:flex-row w-full">
					<div className="flex flex-col w-full lg:w-3/4">
						<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
							<h1 className="text-2xl font-bold text-black">{welcomeCard.name}</h1>
							<h2 className="mt-2 text-xl text-gray-600/90">{welcomeCard.greeting}</h2>
							{data.home.welcomeCard.description.map((desc, index) => (
								<p key={desc.id} className="mt-4 text-gray-500">{desc.text}</p>
							))}
						</div>
						<div className="bg-white rounded-lg border border-gray-500/30 p-6 w-full">
							<h3 className="text-lg font-semibold text-gray-800">Highlight Projects?</h3>
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
									// These may not be reusable if it doesn't configure well.. may need to just create a serviceable "badge" for the home page. Still would be great since it'd be pulling info and should mostly be reusable!
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
