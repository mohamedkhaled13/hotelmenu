import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  // Settings for the slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="gallery-section">
      <h2>Gallery</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://stellamakadi.com/images/landing/slider1.jpg"
            alt="Gallery Item 1"
          />
        </div>
        <div>
          <img
            src="https://stellamakadi.com/images/landing/slider2.jpg"
            alt="Gallery Item 2"
          />
        </div>
        <div>
          <img
            src="	https://stellamakadi.com/images/landing/slider3.jpg"
            alt="Gallery Item 3"
          />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </section>
  );
};

export default Gallery;
