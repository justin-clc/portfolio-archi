import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react"; // Import useState and useEffect hooks

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//  Pages
import Home from "./pages/Home";
import Projects from "./templates/Projects";

import Test from "./pages/Test";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
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

  // console.log(content);

  return (
    <>
      <NavBar content={content} />
      <HashRouter>
        <Routes>
          <Route exact path="/" element={<Home content={content} />} />
          <Route
            excat
            path="/projects/year-1"
            element={<Projects year={1} />}
          />
          <Route
            excat
            path="/projects/year-2"
            element={<Projects year={2} />}
          />
          <Route
            excat
            path="/projects/year-3"
            element={<Projects year={3} />}
          />
          <Route
            excat
            path="/projects/year-4"
            element={<Projects year={4} />}
          />

          <Route path="/test" element={<Test />} />
          <Route path="/project/:projectTitle" element={<ProjectDetails />} />
        </Routes>
      </HashRouter>
      <Footer content={content} />
    </>
  );
}
