import { useState, useEffect } from "react";

import Semester from "../components/Semester";

export default function Projects({ year }) {
  const btnDefault =
    "mb-3 me-3 rounded-full border border-primary bg-bgDark px-5 py-2.5 text-center  text-base font-medium text-accent transition-colors hover:bg-primary hover:text-white focus:outline-none";

  const btnSelected =
    "mb-3 me-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-center  text-base font-medium text-accent transition-colors hover:bg-primary hover:text-white focus:outline-none";

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  const [genContent, setGenContent] = useState({});
  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({ content_type: "generalPages", "fields.title": "Projects" }) // Specify content type 'project'
      .then((entries) => {
        const mappedContent = entries.items.reduce((acc, item) => {
          // Destructure to get title directly
          const { title, ...rest } = item.fields;
          return { ...acc, [title]: rest }; // Spread existing and add new key:value
        }, {});
        setGenContent(mappedContent);
      })
      .catch(console.error);
  }, []);

  return (
    <main className="-mt-16 w-full bg-bgMedium pb-32">
      <section className="bg-Medium bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] pt-32 dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
        <div className="lg:pt-18 relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:pb-24">
          <a
            href="/portfolio-archi/#/test"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-bgDark p-1.5 pr-2 text-sm text-bgLight transition-colors hover:bg-bgLight hover:text-primary"
          >
            <span className="me-3 rounded-full bg-primary px-4 py-1.5 text-xs text-bgLight">
              New
            </span>
            <span className="font-secondary text-sm font-medium">
              View most recent project !
            </span>
            <svg
              className="ms-2 h-2.5 w-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
          <h1 className="font-primary mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {genContent.Projects?.heading} | {year}
          </h1>
          <p className="font-secondary mb-8 text-lg font-normal text-bgLight sm:px-16 lg:px-48 lg:text-xl">
            {genContent.Projects?.shortText}
          </p>
        </div>

        <div className="relative z-10 m-auto flex max-w-5xl flex-wrap items-center justify-center py-4 md:py-8">
          <button
            type="button"
            className={year === 1 ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/projects/year-1")
            }
          >
            1st Year
          </button>
          <button
            type="button"
            className={year === 2 ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/projects/year-2")
            }
          >
            2nd Year
          </button>
          <button
            type="button"
            className={year === 3 ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/projects/year-3")
            }
          >
            3rd Year
          </button>
          <button
            type="button"
            className={year === 4 ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/projects/year-4")
            }
          >
            4th Year
          </button>
        </div>

        <Semester SemesterType={1} />

        <Semester SemesterType={2} />

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-primary"></div>
      </section>
    </main>
  );
}
