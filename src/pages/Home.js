import Landing from "./home sections/Landing";
import AboutMe from "./home sections/AboutMe";
import FeaturedProjects from "./home sections/FeaturedProjects";

export default function Home() {

    return (
        <main className="w-full -mt-16">
            <Landing />
            <AboutMe />
            <FeaturedProjects />
        </main>
    );
}
