import React from "react";
import "./AboutPage.css"; // Assume you have a CSS file for styling

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        {/* Example with dimensions and text for the hero image */}
        {/* <img
          src="https://stellamakadi.com/images/landing/slider2.jpg"
          alt="Stella Makadi Hotel"
          className="hero-image"
        /> */}
        <h1>Welcome to Stella Makadi</h1>
      </section>

      <section className="about-section">
        <h2>About Our Hotel</h2>
        <p>
          Welcome to <strong>Stella Makadi</strong>, a sanctuary where luxury
          meets comfort in the heart of the vibrant city. Our hotel is a haven
          of tranquility, offering a peaceful escape with easy access to the
          city's key attractions.
        </p>
        <p>
          Each room at <strong>Stella Makadi</strong> is a masterpiece of
          design, offering state-of-the-art amenities, luxurious comfort, and
          panoramic views that will take your breath away. Experience
          world-class dining, indulge in our serene spa, or bask in the sunshine
          by our pristine swimming pool.
        </p>
        <p>
          Our dedicated team is here to ensure your stay is nothing short of
          spectacular, providing personalized service that exceeds your
          expectations. Discover the epitome of elegance and hospitality at{" "}
          <strong>Stella Makadi</strong>.
        </p>
      </section>

      {/* <section className="testimonial-section">
        <h2>What Our Guests Say</h2>
        <div className="testimonials">
          <blockquote>
            "The best hotel experience I've had. Exceptional service and
            stunning views!"
          </blockquote>
          <blockquote>
            "A true gem in the city. The dining experience is unparalleled."
          </blockquote>
          <blockquote>
            "Our stay was perfect from start to finish. Can't wait to return!"
          </blockquote>
        </div>
      </section> */}

      <section className="gallery-section">
        <h2>Explore Stella Makadi</h2>
        <div className="gallery">
          {/* Placeholder images with dimensions and descriptive text */}
          <img
            src="https://stellamakadi.com/images/Landing/beach-g5.jpg"
            alt="Luxury Room"
          />
          <img
            src="https://stellamakadi.com/images/landing/Hotel-Stella-Beach.jpg"
            alt="Swimming Pool"
          />
          <img
            src="https://stelladispa.hotelshurghada.com/data/Images/OriginalPhoto/12772/1277202/1277202895/hurghada-stella-makadi-and-spa-hotel-image-29.JPEG"
            alt="Hotel Restaurant"
          />
          {/* Add more placeholder images as needed with descriptive text */}
        </div>
      </section>

      {/* Include more sections as needed */}
    </div>
  );
};

export default AboutPage;
