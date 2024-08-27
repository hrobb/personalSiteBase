export default function TextSection({
	title,
	text
}: {
	title: string;
	text: string;
}) {
	return (
		<div className='flex flex-row mx-auto max-w-4xl border-2 border-black rounded-lg sm:m-6 sm:p-6'>
			<div className="md:w-5/5 p-2">
				<div>
					<h1 className='text-2xl font-bold underline'>{title}</h1>
				</div>
				<div>
					<p>{text}</p>
				</div>
			</div>
		</div>
	)
}