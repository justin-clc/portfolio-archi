const FeaturedActivity = ({ activityId, image, alt }) => {
  return (
    <div className="carousel-item outline-none">
      <a
        href={"/portfolio-archi/#/activity/" + activityId}
        className="font-primary  block w-full bg-accent p-2 text-center capitalize"
      >
        View project
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
