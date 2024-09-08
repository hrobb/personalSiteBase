import Image from "next/image"
import { ReactIcons } from "../icons";
import { IconType } from "react-icons";

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

	return (
		<>
		<div className="transition transition-transform hover:scale-105 border-2 border-gray-800">
			<IconImport size={200}/>
			<p>{title}</p>
		</div>
		</>
	)
}