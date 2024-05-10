import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { projectTitle } = useParams();
  const [project, setProject] = useState(null); // Initial state to handle loading

  useEffect(() => {
    const contentful = require("contentful");
    const client = contentful.createClient({
      space: "g4icz0qu8jmj",
      environment: "master",
      accessToken: "s2HlNoFrh3Co3xnZPoCMesR9xqamKBaP5BPorVIm3_g",
    });

    client
      .getEntries({ "fields.title": projectTitle, content_type: "project" })
      .then((entries) => {
        if (entries.items.length > 0) {
          setProject(entries.items[0]); // Set project data if found
        } else {
          console.log("No project found with title:", projectTitle);
        }
      })
      .catch(console.error);
  }, [projectTitle]); // Re-run effect when projectTitle changes

  return (
    <div>
      {project ? (
        <div>
          <h1>{project.fields.title}</h1> {/* Access project details */}
          {/* Render other project fields as needed */}
        </div>
      ) : (
        <div>
          {projectTitle ? ( // Display loading message only if projectTitle exists
            <p>Loading project details...</p>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default ProjectDetails;
