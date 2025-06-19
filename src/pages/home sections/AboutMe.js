import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks
import { motion } from "motion/react"; // Import motion for animations

import EducationCard from "../../components/EducationCard";

export default function AboutMe() {
	const [educations, setEducations] = useState([]);

	useEffect(() => {
		const contentful = require("contentful");

		const client = contentful.createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE,
			environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
			accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
		});

		client
			.getEntries({ content_type: "education" }) // Specify content type 'project'
			.then((entries) => {
				setEducations(entries.items); // Set state with all project entries
			})
			.catch(console.error);
	}, []);
	const sortedEducations = [...educations].sort(
		(a, b) => a.fields.startYear - b.fields.startYear,
	);

	const [content, setContent] = useState({});

	useEffect(() => {
		const contentful = require("contentful");

		const client = contentful.createClient({
			space: process.env.REACT_APP_CONTENTFUL_SPACE,
			environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT, // defaults to 'master' if not set
			accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
		});

		client
			.getEntries({ content_type: "landingContent" }) // Specify content type 'project'
			.then((entries) => {
				const mappedContent = entries.items.reduce((acc, item) => {
					// Destructure to get title directly
					const { title, ...rest } = item.fields;
					return { ...acc, [title]: rest }; // Spread existing and add new key:value
				}, {});
				setContent(mappedContent);
			})
			.catch(console.error);
	}, []);

	return (
		<>
			<section className="bg-bgMedium px-10 pb-12 pt-20">
				<motion.h3
					className="m-auto max-w-5xl text-center font-primary text-3xl font-bold text-secondary md:text-4xl"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.6,
						ease: "easeInOut",
					}}
				>
					About Me
				</motion.h3>
				<motion.div
					className="md:justify-left m-auto flex max-w-5xl flex-col items-center gap-8 md:flex-row md:items-start md:justify-center"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 0.8,
						ease: "easeInOut",
					}}
				>
					<img
						src={content.Me?.image.fields.file.url}
						alt="Profilepicture"
						className="max-h-96 rounded-md object-cover"
						width={275}
						height={275}
					/>

					<div>
						<p className="text-l mt-4 rounded bg-secondary p-4 text-justify font-secondary font-bold leading-relaxed text-bgMedium md:text-xl">
							{content.Me?.longText}
						</p>
					</div>
				</motion.div>
			</section>

			<section className="bg-bgMedium px-10 pb-16">
				<h3 className="m-auto max-w-5xl text-center font-primary text-3xl font-bold text-secondary md:text-4xl">
					Education
				</h3>
				<motion.div 
                    className="m-auto flex max-w-5xl flex-wrap justify-evenly gap-x-4 gap-y-8 pt-6"
                    initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						ease: "easeInOut",
					}}
                >
					{sortedEducations.map((education, index) => (
						<EducationCard
							name={education.fields.school}
							image={education.fields.logo.fields.file.url}
							course={education.fields.course}
							start={education.fields.startYear}
							end={education.fields.endYear}
							present={education.fields.present}
							key={index}
						/>
					))}
				</motion.div>
			</section>
		</>
	);
}
