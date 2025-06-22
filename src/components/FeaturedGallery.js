import { motion } from "motion/react"; // Import motion for animations
import GalleryImage from "./GalleryImage";

export default function FeaturedGallery({ images }) {
    return (
        <div className="m-auto max-w-7xl py-4">
            <div className="columns-1 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
                {images.map((image) => (
                    <motion.div
                        key={image.sys.id}
                        className="mb-4 break-inside-avoid"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            ease: "easeInOut",
                        }}
                    >
                        <GalleryImage
                            src={image?.fields.image.fields.file.url}
                            alt={image?.fields.activityId}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
