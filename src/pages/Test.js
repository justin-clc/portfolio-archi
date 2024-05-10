import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks

function Test() {
  const [projects, setProjects] = useState([]);
  const [asset, setAsset] = useState([]); // Initialize image state to null

  useEffect(() => {
    const contentful = require("contentful");

    const client = contentful.createClient({
      space: "g4icz0qu8jmj",
      environment: "master", // defaults to 'master' if not set
      accessToken: "s2HlNoFrh3Co3xnZPoCMesR9xqamKBaP5BPorVIm3_g",
    });

    client
      .getEntries({ content_type: "project" }) // Specify content type 'project'
      .then((entries) => {
        setProjects(entries.items); // Set state with all project entries
      })
      .catch(console.error);

    const imageId = "36vIc2uontSRN4UAcpomCx"; // Replace with your actual image ID
    client
      .getAsset(imageId)
      .then((imageData) => setAsset(imageData.fields.file))
      .catch(console.error);

    client
      .getEntries({ "fields.title": "multi", content_type: "project" })
      .then((entry) => {
        console.log(entry.items[0].fields.title);
      });
  }, []); // Empty dependency array ensures useEffect runs only once after component mounts

  return (
    <div>
      <h1>Projects</h1>
      {projects.map((project) => (
        <div key={project.sys.id}>
          {/* Access project fields here */}
          <h2>{project.fields.title}</h2>
          <a href={"#/project/" + project.fields.title}>
            {project.fields.title}
          </a>
          <p>{project.fields.desc}</p>
        </div>
      ))}

      <img src={asset.url} alt="test" />
    </div>
  );
}

export default Test;
