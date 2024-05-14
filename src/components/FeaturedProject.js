const FeaturedProject = ({ title, image, alt }) => {
  return (
    <div className="outline-none">
      <a
        href="/#/view-project"
        className="font-primary  block w-full bg-accent p-2 text-center capitalize"
      >
        View project
      </a>

      <img src={image} alt={alt} className="object-cover" />
    </div>
  );
};

export default FeaturedProject;
