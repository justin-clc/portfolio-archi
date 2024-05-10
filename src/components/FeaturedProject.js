const FeaturedProject = ({ title, image, alt }) => {
  return (
    <div className="outline-none">
      <img src={image} alt={alt} className="object-cover" />
    </div>
  );
};

export default FeaturedProject;
