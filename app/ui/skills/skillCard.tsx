'use client'

import { useState } from "react";
import { ReactIcons } from "../icons";
import { IconType } from "react-icons";
import './cardanimation.css';

export default function SkillCard ({
	id,
	title,
	iconName,
	description,
	projects
}: {
	id: number,
	title: string,
	iconName: string,
	description?: string,
	projects?: string[]
}) {

	const IconImport: IconType = ReactIcons[iconName];

	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (

		<div className="cardContainer cursor-pointer transition transition-transform hover:scale-105 m-6 drop-shadow" onClick={handleClick}>
			<div className={`card w-64 h-64 flex transition transition-transform duration-700 ${isFlipped ? 'flipped' : ''}`}>
				<div className="cardFront flex flex-col absolute w-full h-full justify-center items-center bg-gray-100 border-2 border-gray-600/70 text-center p-6">
					<IconImport size={200}/>
					<p>{title}</p>
				</div>
				<div className="cardBack flex flex-col absolute w-full h-full justify-center items-center bg-gray-100 border-2 border-gray-600/70 text-center p-6">
					{description && (
						<p>{description}</p>
					)}
					{projects && (
						<>
							<p className="text-lg">Experience/Projects:</p>
							<ul className="list-disc list-inside">
								{projects.map((project, index) => (
									<li>{project}</li>
								))}
							</ul>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
