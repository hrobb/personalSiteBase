export default function ProjectCard ({
	id,
	title,
	skillsUsed,
	description
}: {
	id: number,
	title: string,
	skillsUsed?: string[],
	description: string,
}) {

	return (

		<div className="cardContainer cursor-pointer transition transition-transform hover:scale-[1.02] m-6 drop-shadow">
			<div className={`card w-64 h-64 flex transition transition-transform duration-700`}>
				<div className="flex flex-col absolute w-full h-full justify-center items-center bg-gray-100 border-2 border-gray-600/70 text-center p-6">
					<p>{title}</p>
					<p>{description}</p>
					{skillsUsed && (
						<>
							{skillsUsed.map((skill, index) => (
								<button key={index} className="mt-6 px-6 py-3 text-white bg-gray-500 rounded-md">{skill}</button>
							))}
						</>
					)}
				</div>
			</div>
		</div>
	)
}
