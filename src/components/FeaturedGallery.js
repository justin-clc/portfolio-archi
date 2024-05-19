import { useEffect, useState } from "react";

function splitIntoSections(items) {
  const sections = {
    one: [],
    two: [],
    three: [],
    four: [],
  };

  const numSections = Object.keys(sections).length;
  const chunkSize = Math.ceil(items.length / numSections); // Use Math.ceil for even distribution

  for (let i = 0; i < items.length; i++) {
    const sectionIndex = Math.floor(i / chunkSize);
    const sectionName = Object.keys(sections)[sectionIndex];
    sections[sectionName].push(items[i]);
  }

  return sections;
}

export default function FeaturedGallery() {
  const numberNames = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  const [images, setImages] = useState({});

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      environment: process.env.REACT_APP_CONTENTFUL_ENVIRONMENT,
      accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
    });

    client
      .getEntries({
        content_type: "featuredImages",
      })
      .then((entries) => {
        const splitImages = splitIntoSections(entries.items);
        setImages(splitImages);
        console.log(splitImages);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="m-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">
      <div className="grid gap-4">
        {images.one?.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={item.fields.image.fields.file.url}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {images.two?.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={item.fields.image.fields.file.url}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {images.three?.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={item.fields.image.fields.file.url}
              alt=""
            />
          </div>
        ))}
      </div>

      <div className="grid gap-4">
        {images.four?.map((item, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg"
              src={item.fields.image.fields.file.url}
              alt=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
