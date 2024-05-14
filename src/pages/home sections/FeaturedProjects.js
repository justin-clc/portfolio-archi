import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "../../components/Carousel";

export default function FeaturedProjects() {
  const waveDivider = {
    width: "calc(100% + 1.3px)",
  };

  return (
    <>
      <div className="relative w-full overflow-hidden bg-bgDark">
        <svg
          className="h-22 relative block"
          style={waveDivider}
          data-name="Wave Divider"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-bgMedium"
          ></path>
        </svg>
      </div>
      <section className="pb bg-bgDark px-10 py-12">
        <h3 className="font-primary m-auto max-w-5xl text-center text-3xl font-bold text-white md:text-4xl">
          Recent Projects
        </h3>
        <Carousel />
      </section>
    </>
  );
}
