import React from "react";
// import beachImage from "../Images/beach-g5.jpg"; // Adjust the path as needed
// import poolImage from "../Images/Hotel-Stella-Beach.jpg"; // Adjust the path as needed
// import restaurantImage from "../Images/hurghada-stella-makadi-and-spa-hotel-image-29.jpeg"; // Adjust the path as needed
import "./AboutPage.css"; // Assume you have a CSS file for styling
import Gallery from "../landing pages with sections/Gallery";

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="hero-section">
        <h1
          style={{
            textAlign: "center",
            fontFamily: "Arial",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Welcome to Stella Makadi
        </h1>
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
        <Gallery />
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
      {/* 
      <section className="gallery-section">
        <h2>Explore Stella Makadi</h2>
        <div className="gallery">
          <img src={beachImage} alt="Luxury Room" />
          <img src={poolImage} alt="Swimming Pool" />
          <img src={restaurantImage} alt="Hotel Restaurant" />
        </div>
      </section> */}

      {/* Include more sections as needed */}
    </div>
  );
};

export default AboutPage;
