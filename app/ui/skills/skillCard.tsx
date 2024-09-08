export default function SkillCard ({
	id,
	title
}: {
	id: number,
	title: string
}) {
	return (
		<>
		<p>{title}</p> 
		<p>{id}</p>
		</>
	)
}