export default function Semester({ SemesterType, SemesterArray }) {
	return (
		<>
			<h3 className="m-auto mt-20 max-w-5xl text-center font-primary text-3xl font-bold text-white md:text-4xl">
				{SemesterType === 1 ? "First Semester" : "Second Semester"}
			</h3>

			<div className="m-auto grid max-w-5xl grid-cols-1 gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
				{SemesterArray.map((subject, index) => (
					<a
						className="z-10 h-fit"
						href={
							"/portfolio-archi/#/activities/" +
							subject.fields?.title
						}
						key={index}
					>
						<img
							className="block h-56 w-full rounded-t-md object-cover object-center"
							src={subject.fields?.thumbnail.fields.file.url}
							alt={subject.fields?.title + "-thumbnail"}
						/>
						<span className="m:text-xl text-m block w-full overflow-hidden text-ellipsis whitespace-nowrap rounded-b-lg bg-bgDark px-2 py-1 font-semibold text-secondary">
							{subject.fields?.name}
						</span>
					</a>
				))}
			</div>
		</>
	);
}
