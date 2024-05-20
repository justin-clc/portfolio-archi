import Landing from "./home sections/Landing";
import AboutMe from "./home sections/AboutMe";
import FeaturedActivities from "./home sections/FeaturedActivities";

export default function Home({ content }) {
  return (
    <main className="-mt-16 w-full">
      <Landing content={content} />
      <AboutMe content={content} />
      <FeaturedActivities />
    </main>
  );
}
