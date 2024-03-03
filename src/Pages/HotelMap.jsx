// In src/Pages/HotelMap.js
import React from "react";

const HotelMap = () => {
  return (
    <div
      className="map"
      style={{ width: "100%", height: "100vh", overflow: "hidden" }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.4507311523025!2d33.91037395870086!3d26.98428817670193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x144d7b8ccb2c5ddb%3A0xa921d25cdc79c80a!2sStella%20Makadi%20Hotels%20%26%20Resorts!5e0!3m2!1sar!2sfr!4v1709487027158!5m2!1sar!2sfr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Hotel Location"
      ></iframe>
    </div>
  );
};

export default HotelMap;
