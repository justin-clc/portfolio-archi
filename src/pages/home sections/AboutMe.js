import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks

import EducationCard from "../../components/EducationCard";

export default function AboutMe() {
  const wavesDivider = {
    width: "calc(100% + 1.3px)",
  };

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
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block h-28 z-0"
          style={wavesDivider}
          data-name="Waves Divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            className="fill-bgMedium"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            className="fill-bgMedium"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-bgMedium"
          ></path>
        </svg>
      </div>
      <section className="bg-bgMedium px-10 pt-20 pb-12">
        <div className="flex flex-col md:flex-row items-center md:justify-center md:justify-left md:items-start gap-8 max-w-5xl m-auto">
          <img
            src={content.Me?.image.fields.file.url}
            alt="Profilepicture"
            className="rounded-md object-cover max-h-96"
            width={275}
            height={275}
          />

          <div>
            <h2 className="font-primary font-bold md:text-4xl text-3xl text-secondary text-left">
              {content.Me?.shortText}
            </h2>
            <p className="bg-secondary rounded p-4 mt-4 font-primary font-bold text-l md:text-xl text-bgMedium text-justify leading-normal">
              {content.Me?.longText}
              eius!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-bgMedium px-10 pb-16">
        <h3 className="max-w-5xl m-auto font-primary font-bold md:text-4xl text-3xl text-secondary text-center">
          Education
        </h3>
        <div className="flex flex-wrap justify-evenly gap-4 pt-6 max-w-5xl m-auto">
          {sortedEducations.map((education, index) => (
            <EducationCard
              name={education.fields.school}
              image={education.fields.logo.fields.file.url}
              course={education.fields.course}
              start={education.fields.startYear}
              end={education.fields.endYear}
              key={index}
            />
          ))}
        </div>
      </section>
    </>
  );
}
