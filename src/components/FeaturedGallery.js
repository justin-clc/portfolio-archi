export default function FeaturedGallery({ images }) {
  return (
    <div className="m-auto max-w-6xl py-4">
      <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
        {images.map((image) => (
          <div key={image.sys.id} className="mb-4 break-inside-avoid">
            <img
              src={image?.fields.image.fields.file.url}
              alt={image?.fields.activityId}
              className="h-auto w-full rounded-md object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
