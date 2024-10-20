const SkeletonLoader = ({ type, color }) => {
	const typeStyles = {
		title: { width: "150px", height: "1rem" },
		headingLg: { width: "clamp(200px, 95%, 440px)", height: "2rem" },
		// paragraph: { width: "200px", height: "0.5rem" },
		icon: { height: "2rem", width: "2rem" },
		// Add more types as needed
	};

	const colorClasses = {
		light: "bg-bgLight",
		medium: "bg-bgMedium",
		dark: "bg-bgDark",
	};

	const style = typeStyles[type] || typeStyles["paragraph"]; // Default to paragraph if type is not found
	const bg = colorClasses[color] || colorClasses["light"]; // Default to gray if color is not found

	if (type === "paragraph") {
		return (
			<>
				<div
					className={`${bg} animate-pulse rounded-2xl`}
					style={{
						width: "250px",
						height: "0.5rem",
						marginTop: "1.25rem",
					}}
				></div>
				<div
					className={`${bg} animate-pulse rounded-2xl`}
					style={{
						width: "200px",
						height: "0.5rem",
						marginTop: "1rem",
					}}
				></div>
			</>
		);
	} else {
		return (
			<div
				className={`${bg} animate-pulse rounded-2xl`}
				style={{ width: style.width, height: style.height }}
			></div>
		);
	}
};

export default SkeletonLoader;
