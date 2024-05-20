import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import BackBtn from "../components/BackBtn";

export default function ActivityDetails() {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  });

  const { activityId } = useParams();
  const [act, setAct] = useState({});

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({
        content_type: "activity",
        "sys.id": activityId,
      }) // Specify content type 'project'
      .then((entries) => {
        // Assuming only one item is returned
        const {
          items: [content],
        } = entries; // Destructure and rename
        setAct(content);
      })
      .catch(console.error);
  }, [activityId]);

  console.log(act.fields?.asset);

  const renderNode = {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const {
        data: {
          target: { fields },
        },
      } = node;
      const image = fields.file.url; // Assuming image field is in 'en-US' locale

      return <img src={image} alt={fields.title} />; // Set alt text
    },
    // ... other render logic for text, paragraphs, etc.
  };

  return (
    <main className="relative -mt-16 w-full bg-bgMedium">
      <BackBtn link={"/activities/" + act.fields?.subject} />
      <section className="m-auto max-w-5xl pt-16">
        <div className="mx-auto max-w-screen-xl px-4 pt-24 text-center">
          <h1 className="font-primary mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl">
            {act.fields?.title}
          </h1>
          <span className="font-secondary -mb-2 text-2xl font-semibold text-accent">
            {act.fields?.subject}
          </span>
          <p className="font-secondary mb-16 text-lg font-normal text-gray-300 sm:px-16 lg:px-48 lg:text-xl">
            {act.fields?.shortDesc}
          </p>
          <img
            src={act.fields?.preview.fields.file.url}
            alt={act.fields?.title + "preview-image"}
            className="relative w-full rounded-md border-4 border-bgDark object-cover"
          />
        </div>
        <section
          id="richtext-container"
          className="font-primary mt-16 max-w-5xl px-4 py-8 text-white"
        >
          {documentToReactComponents(act.fields?.rtc, { renderNode })}
        </section>
        {act.fields?.asset.fields.file.url ? (
          <button
            className="group relative z-10 m-2 h-12 w-36 cursor-pointer overflow-hidden rounded-md border-none bg-black p-2 text-xl font-bold text-white"
            title={"Open " + act.fields?.title}
            onClick={() =>
              window.open(
                act.fields?.asset.fields.file.url,
                "_blank",
                "noopener,noreferrer",
              )
            }
          >
            View PDF
            <span className="absolute -left-2 -top-8 h-32 w-40 origin-left rotate-12 scale-x-0 transform bg-white transition-transform duration-1000 group-hover:scale-x-100 group-hover:duration-500"></span>
            <span className="absolute -left-2 -top-8 h-32 w-40 origin-left rotate-12 scale-x-0 transform bg-blue-400 transition-transform duration-700 group-hover:scale-x-100 group-hover:duration-700"></span>
            <span className="absolute -left-2 -top-8 h-32 w-40 origin-left rotate-12 scale-x-0 transform bg-primary transition-transform duration-500 group-hover:scale-x-50 group-hover:duration-1000"></span>
            <span className="absolute left-6 top-2.5 z-10 opacity-0 duration-100 group-hover:opacity-100 group-hover:duration-1000">
              Open PDF
            </span>
          </button>
        ) : null}
      </section>
    </main>
  );
}
