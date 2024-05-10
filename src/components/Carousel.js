import React from "react";
import Slider from "react-slick";

import FeaturedProject from "./FeaturedProject";

export default function Carousel() {
  var settings = {
    centerMode: true,
    centerPadding: "160px",
    dots: true,
    arrows: false,
    focusOnSelect: true,
    infinite: true,
    autoplay: false,
    adaptiveHeight: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          adaptiveHeight: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          initialSlide: 1,
          adaptiveHeight: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "0px",
          initialSlide: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      className="rounded max-w-5xl m:max-h-96 max-h-80 m-auto mt-8 overflow-hidden"
    >
      <FeaturedProject
        image={
          "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <FeaturedProject
        image={
          "https://images.unsplash.com/photo-1448459322288-678e8f2bb7f9?q=80&w=1917&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />

      <FeaturedProject
        image={
          "https://images.unsplash.com/photo-1490351267196-b7a67e26e41b?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
      />
    </Slider>
  );
}
