import { useParams, useEffect } from "react";

const Project = () => {
  const { projectId } = useParams();

  useEffect(() => {
    // Perform data fetching based on projectId
  }, [projectId]);

  return <div>{projectId}</div>;
};

export default <Project></Project>;
