import React from "react";
import Slider from "react-slick";
import image1 from "../Images/slider1.jpg"; // Adjust the path as needed
import image2 from "../Images/slider2.jpg"; // Adjust the path as needed
import image3 from "../Images/slider3.jpg"; // Adjust the path as needed
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
      <Slider {...settings}>
        <div>
          <img src={image1} alt="Gallery Item 1" />
        </div>
        <div>
          <img src={image2} alt="Gallery Item 2" />
        </div>
        <div>
          <img src={image3} alt="Gallery Item 3" />
        </div>
        {/* Add more images as needed */}
      </Slider>
    </section>
  );
};

export default Gallery;
