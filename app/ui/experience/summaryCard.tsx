export default function SummaryCard({
	title,
	text
}: {
	title: string,
	text: string
}) {

	return (
		<div className='flex flex-col mx-auto sm:max-w-5xl justify-center items-center transition transition-transform hover:scale-105 bg-white border-4 border-gray-500 p-6 m-6 rounded-lg drop-shadow cursor-pointer'>
			<div className="p-4">
				<h1 className='text-3xl font-bold'>{title}</h1>
				<p>{text}</p>
			</div>
		</div>
	)
}