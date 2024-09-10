'use client'

import { useState } from "react";
import { ReactIcons } from "../icons";
import { IconType } from "react-icons";
import './cardanimation.css';

export default function SkillCard ({
	id,
	title,
	iconName
}: {
	id: number,
	title: string,
	iconName: string
}) {

	const IconImport: IconType = ReactIcons[iconName];

	const [isFlipped, setIsFlipped] = useState(false);

	const handleClick = () => {
		setIsFlipped(!isFlipped);
	};

	return (

		<div className="cardContainer cursor-pointer transition transition-transform hover:scale-105 m-6" onClick={handleClick}>
			<div className={`card w-64 h-64 flex transition transition-transform duration-700 ${isFlipped ? 'flipped' : ''}`}>
				<div className="cardFront flex flex-col absolute w-full h-full justify-center items-center bg-white border-2 rounded-lg border-gray-800 text-center p-6">
					<IconImport size={200}/>
					<p>{title}</p>
				</div>
				<div className="cardBack flex absolute w-full h-full justify-center items-center bg-white border-2 rounded-lg border-gray-800 text-center p-6">
					<p>test</p>
				</div>
			</div>
		</div>
	)
}
