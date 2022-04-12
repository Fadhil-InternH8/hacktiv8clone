import React from "react";
import Slider from "react-slick";

export const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <h2>Slider</h2>
      <Slider {...settings}>
        <div>
          1
          <img
            src="https://www.hacktiv8.com/images/pages/home/banner-slider-section-1.webp"
            alt="banner-slider-section-1.webp"
          />
        </div>
        <div>
          2
          <img
            src="https://www.hacktiv8.com/images/pages/home/banner-slider-section-2.webp"
            alt="banner-slider-section-2.webp"
          />
        </div>
      </Slider>
    </div>
  );
};
