export default function GalleryImage({ src, alt, onLoad }) {
    return (
        <img
            src={src}
            alt={alt}
            onLoad={onLoad}
            className="w-full rounded-lg"
        />
    );
}