import "./App.css";

import { HashRouter, Routes, Route } from "react-router-dom";

// Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

//  Pages
import Home from "./pages/Home";
import Test from "./pages/Test";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
    return (
        <>
            <NavBar />
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/test" element={<Test />} />
                    <Route path="/project/:projectTitle" element={<ProjectDetails />} />
                </Routes>
            </HashRouter>
            <Footer />
        </>
    );
}