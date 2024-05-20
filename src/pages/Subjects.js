import { useState, useEffect } from "react";

import Semester from "../components/Semester";
import { useParams } from "react-router-dom";

export default function Subjects() {
  const { year } = useParams();

  const btnDefault =
    "mb-3 me-3 rounded-full border border-primary bg-bgDark px-5 py-2.5 text-center text-base font-medium text-accent transition-colors hover:bg-primary hover:text-white focus:outline-none";

  const btnSelected =
    "mb-3 me-3 rounded-full border border-primary bg-primary px-5 py-2.5 text-center text-base font-medium text-accent transition-colors hover:text-white focus:outline-none";

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  const [genContent, setGenContent] = useState({});
  const [semester1, setSemester1] = useState([]);
  const [semester2, setSemester2] = useState([]);

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({
        content_type: "generalPages",
        "fields.title": "SchoolYears",
      }) // Specify content type 'project'
      .then((entries) => {
        const mappedContent = entries.items.reduce((acc, item) => {
          // Destructure to get title directly
          const { title, ...rest } = item.fields;
          return { ...acc, [title]: rest }; // Spread existing and add new key:value
        }, {});
        setGenContent(mappedContent);
      })
      .catch(console.error);

    client
      .getEntries({
        content_type: "subject",
        "fields.year": year,
      }) // Specify content type 'project'
      .then((entries) => {
        const semester1Entries = entries.items.filter(
          (item) => item.fields && item.fields.semester === 1,
        );
        const semester2Entries = entries.items.filter(
          (item) => item.fields && item.fields.semester === 2,
        );

        setSemester1(semester1Entries);
        setSemester2(semester2Entries);
      })
      .catch(console.error);
  }, [year]);

  console.log(semester1);
  console.log(semester2);

  return (
    <main className="-mt-16 w-full bg-bgMedium">
      <section className="bg-Medium bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')] pt-32">
        <div className="lg:pt-18 relative z-10 mx-auto max-w-screen-xl px-4 py-8 text-center lg:pb-24">
          {/* <a
            href="/portfolio-archi/#/test"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-bgDark p-1.5 pr-3.5 text-sm text-bgLight transition-colors hover:bg-bgLight hover:text-primary"
          >
            <span className="me-3 rounded-full bg-primary px-4 py-1.5 text-xs text-bgLight">
              New
            </span>
            <span className="font-secondary text-sm font-medium">
              View most recent project!
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
          </a> */}
          <h1 className="font-primary mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {genContent.SchoolYears?.heading + " " + year}
          </h1>
          <p className="font-secondary mb-8 text-lg font-normal text-bgLight sm:px-16 lg:px-48 lg:text-xl">
            {genContent.SchoolYears?.shortText}
          </p>
        </div>

        <div className="relative z-10 m-auto flex max-w-6xl flex-wrap items-center justify-center py-4 md:py-8">
          <button
            type="button"
            className={year === "1" ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/school-year/1")
            }
          >
            1st Year
          </button>
          <button
            type="button"
            className={year === "2" ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/school-year/2")
            }
          >
            2nd Year
          </button>
          <button
            type="button"
            className={year === "3" ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/school-year/3")
            }
          >
            3rd Year
          </button>
          <button
            type="button"
            className={year === "4" ? btnSelected : btnDefault}
            onClick={() =>
              (window.location.href = "/portfolio-archi/#/school-year/4")
            }
          >
            4th Year
          </button>
        </div>

        {semester1.length === 0 && semester2.length === 0 ? (
          <h3 className="font-primary m-auto mt-20 max-w-5xl text-center text-3xl font-bold text-white md:text-4xl">
            No Subjects Yet
          </h3>
        ) : (
          <>
            {semester1.length > 0 && (
              <Semester SemesterType={1} SemesterArray={semester1} />
            )}
            {semester2.length > 0 && (
              <Semester SemesterType={2} SemesterArray={semester2} />
            )}
          </>
        )}

        <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-primary"></div>
        <div className="h-48 bg-gradient-to-b from-transparent from-10% via-bgDark via-80% to-bgDark to-90%"></div>
      </section>
    </main>
  );
}
