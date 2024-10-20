import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "../../components/Carousel";
import FeaturedGallery from "../../components/FeaturedGallery";
import { useEffect, useState } from "react";

export default function FeaturedActivities() {
	const navigate = useNavigate();

	const goToSchoolYears = () => {
		navigate("/school-year/1"); // Assuming this is a valid route
	};

	const [featured, setFeatured] = useState([]);
	const [images, setImages] = useState([]);
	useEffect(() => {
		const contentful = require("contentful");

		const client = contentful.createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE,
			environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
			accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
		});

		client
			.getEntries({
				content_type: "featuredActivities",
			})
			.then((entries) => {
				setFeatured(entries.items);
			})
			.catch(console.error);

		client
			.getEntries({
				content_type: "featuredImages",
			})
			.then((entries) => {
				setImages(entries.items);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<section className="bg-bgDark px-10 py-10">
				<h3 className="m-auto max-w-5xl text-center font-primary text-3xl font-bold text-white md:text-4xl">
					Featured Projects
				</h3>
				<Carousel items={featured} />
			</section>

			<section className="bg-bgDark px-10 py-8">
				<FeaturedGallery images={images} />
				<button
					className="group relative m-auto mt-6 flex h-16  w-48 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-accent p-2 font-extrabold text-white duration-300 hover:scale-95"
					onClick={goToSchoolYears}
				>
					<div className="absolute -top-4 right-16  z-10 h-32 w-32 rounded-full bg-primary duration-500 group-hover:right-2 group-hover:top-1 group-hover:scale-150"></div>
					<div className="absolute -top-4 right-2  z-10 h-24 w-24 rounded-full bg-sky-800 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
					<div className="absolute -right-12 top-4 z-10 h-16 w-16 rounded-full bg-sky-700 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
					<div className="absolute -top-4 right-20 z-10 h-8 w-8 rounded-full bg-sky-600 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
					<p className="z-10">See more</p>
				</button>
			</section>
		</>
	);
}
