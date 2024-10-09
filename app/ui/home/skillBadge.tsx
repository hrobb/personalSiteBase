import { ReactIcons } from "../icons";
import { IconType } from "react-icons";

export default function SkillBadge ({
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
		<div className="flex flex-col md:w-40 md:h-40 lg:w-44 lg:h-44 justify-center items-center bg-gray-100 border-2 border-gray-600/70 text-center p-4 transition transition-transform hover:scale-105 drop-shadow">
			<IconImport size={100}/>
			<p className="text-lg text-wrap pt-1">{title}</p>
		</div>
	)
}
