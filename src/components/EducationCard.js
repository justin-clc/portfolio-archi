const EducationCard = ({ name, image, course, start, end, present }) => {
	const currentYear = new Date().getFullYear();
	const endYear = present ? currentYear : end;
	const yearDifference = endYear - start;
	const yearsText =
		yearDifference > 1
			? `${yearDifference} years`
			: `${yearDifference} year`;
	const endText = present ? "Present" : end;

	return (
		<div className="relative flex max-w-sm flex-col gap-3 rounded bg-bgDark p-6 xs:gap-4">
			{present && (
				<svg
					width={64}
					height={64}
					className="absolute -left-0 -top-5 -rotate-12 fill-secondary"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					{/* <path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1Zm-1-2v-3H6.5a1.5 1.5 0 1 0 0 3H19Z" /> */}
					<path d="M17 15.244v6.872a.5.5 0 0 1-.757.429L12 19.999l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0v-.001Zm-5-.245a6 6 0 1 0 0-12 6 6 0 0 0 0 12Zm0-2a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z" />
				</svg>
			)}
			<div className="flex flex-col-reverse items-center justify-between gap-4 xs:flex-row">
				<h4 className="text-center font-primary text-xl font-bold leading-tight text-secondary xs:text-left">
					{name}
				</h4>
				<img
					src={image}
					alt="EduLogo"
					height={120}
					width={120}
					className="rounded bg-white"
				/>
			</div>

			<div className="text-center font-secondary xs:mt-0 xs:text-left">
				<p className="text-l font-bold text-bgLight md:text-xl">
					{course}
				</p>
				<span className="mt-2 block w-fit rounded bg-bgMedium px-2 py-1 text-bgLight">
					{start} -{" "}
					{present ? (
						<strong className="text-secondary">{endText}</strong>
					) : (
						endText
					)}{" "}
					| <strong className="text-accent">{yearsText}</strong>
				</span>
			</div>
		</div>
	);
};

export default EducationCard;
