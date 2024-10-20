const FeaturedActivity = ({ activityId, activityName, image, alt }) => {
	return (
		<div className="carousel-item outline-none">
			<a
				href={"/portfolio-archi/#/activity/" + activityId}
				className="block w-full overflow-hidden text-ellipsis whitespace-nowrap bg-accent px-4 py-2 text-center font-primary capitalize text-bgDark"
			>
				<strong>View project</strong> - {activityName}
			</a>

			<img
				src={image}
				alt={alt}
				className="h-full w-full object-cover object-center"
			/>
		</div>
	);
};

export default FeaturedActivity;
