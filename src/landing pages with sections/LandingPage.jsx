// LandingPage.jsx
import React from "react";
import Hero from "./Hero";
import Features from "./Features";
import Testimonials from "./Testimonials";
import Gallery from "./Gallery";
import ContactForm from "./ContactForm";
import "./LandingPage.css"; // Single CSS file for all components

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Hero />
      <Features />
      <Testimonials />
      <Gallery />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
