import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Carousel from "../../components/Carousel";
import FeaturedGallery from "../../components/FeaturedGallery";

export default function FeaturedActivities() {
  const navigate = useNavigate();

  const goToSchoolYears = () => {
    navigate("/school-year/1"); // Assuming this is a valid route
  };

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
      <section className="bg-bgDark px-10 py-10">
        <h3 className="font-primary m-auto max-w-5xl text-center text-3xl font-bold text-white md:text-4xl">
          Featured Projects
        </h3>
        <Carousel />
      </section>

      <section className="bg-bgDark px-10 py-8">
        <FeaturedGallery />
        <button
          className="group relative m-auto mt-6 flex h-16  w-48 cursor-pointer items-center justify-center overflow-hidden rounded-md bg-accent p-2 font-extrabold text-white duration-300 hover:scale-95"
          onClick={goToSchoolYears}
        >
          <div className="absolute -top-4 right-16  z-10 h-32 w-32 rounded-full bg-primary duration-500 group-hover:right-2 group-hover:top-1 group-hover:scale-150"></div>
          <div className="absolute -top-4 right-2  z-10 h-24 w-24 rounded-full bg-sky-800 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
          <div className="absolute -right-12 top-4 z-10 h-16 w-16 rounded-full bg-sky-700 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
          <div className="absolute -top-4 right-20 z-10 h-8 w-8 rounded-full bg-sky-600 duration-500 group-hover:right-2  group-hover:top-1 group-hover:scale-150"></div>
          <p className="z-10">See more</p>
        </button>
      </section>
    </>
  );
}
