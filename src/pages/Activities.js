import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ActivityCard from "../components/ActivityCard";

export default function Activities() {
  const { subjectTitle } = useParams();
  const [acts, setActs] = useState([]);
  const [subject, setSubject] = useState({});

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({
        content_type: "subject",
        "fields.title": subjectTitle,
      }) // Specify content type 'project'
      .then((entries) => {
        // Assuming only one item is returned
        const {
          items: [content],
        } = entries; // Destructure and rename
        setSubject(content);
      })
      .catch(console.error);

    client
      .getEntries({
        content_type: "activity",
        "fields.subject": subjectTitle,
        select: "sys.id, fields.title, fields.preview, fields.shortDesc",
      }) // Specify content type 'project'
      .then((entries) => {
        setActs(entries.items); // Set state with all project entries
      })
      .catch(console.error);
  }, [subjectTitle]);

  console.log(acts);

  return (
    <main className="relative z-0 -mt-16 w-full bg-bgMedium bg-[url('https://images.ctfassets.net/g4icz0qu8jmj/2IXXfCY3di1A3yGGJ9A5e/08229b410adeb5c6877522add68c030a/subtle-prism__2_.svg')]">
      <section>
        <div className="relative z-10 m-auto flex h-fit max-w-6xl flex-col-reverse gap-4 px-2 pb-8 pt-28 sm:flex-row">
          <div className="flex flex-col items-start justify-center p-4 sm:w-3/4">
            <span className="font-secondary -mb-2 text-2xl font-semibold text-bgMedium">
              {subject.fields?.title}
            </span>
            <h1 className="font-primary mb-4 text-4xl font-extrabold leading-tight tracking-tight text-bgDark md:text-5xl lg:text-6xl">
              {subject.fields?.name}
            </h1>
            <p className="font-secondary -mt-2 font-semibold text-bgMedium">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              aspernatur similique animi sequi placeat ipsa in, repellendus
              voluptates iste!
            </p>
          </div>
          <div className="relative m-auto flex aspect-square h-48 w-48 flex-shrink-0 sm:mr-8 md:h-80 md:w-80">
            <img
              src={subject.fields?.thumbnail.fields.file.url}
              alt={subject.fields?.title + "-thumbnail"}
              className="z-20 block h-full w-full rounded object-cover object-center"
            />
            <div className="absolute -bottom-4 -right-4 z-10 h-full w-full rounded bg-bgDark"></div>
          </div>
        </div>
      </section>

      <section className="relative z-10">
        <h2 className="font-primary m-auto mt-20 max-w-5xl text-center text-3xl font-bold text-bgDark md:text-4xl">
          Activities
        </h2>
        <div className="m-auto grid max-w-4xl grid-cols-1 px-4 py-8">
          {acts.map((act, index) => (
            <ActivityCard
              link={"/#/activity/" + act.sys.id}
              title={act.fields.title}
              image={act.fields.preview.fields.file.url}
              shortDesc={act.fields.shortDesc}
              key={index}
            />
          ))}
        </div>
      </section>

      <div className="absolute left-0 top-0 z-0 h-full w-full bg-gradient-to-b from-secondary"></div>
      <div className="h-48 bg-gradient-to-b from-transparent from-10% via-bgDark via-80% to-bgDark to-90%"></div>
    </main>
  );
}
