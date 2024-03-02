import React from "react";

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <h2>Contact Us</h2>
      <form>
        {/* Build out your form fields */}
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
