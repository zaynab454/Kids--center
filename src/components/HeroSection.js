import React from "react";

const HeroSection = () => (
  <section 
    className="py-5" 
    style={{ 
      backgroundImage:"url('/images/banner-01.jpg')", 
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      height:"600px"
    }}
  >
    <div className="container text-center">
      <h1 className="display-4" style={{ fontFamily: "'Roboto', sans-serif" }}>
        Welcome to <br />
        <span className="fw-bold text-success" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Kids Center
        </span>
      </h1>
    </div>
  </section>
);

export default HeroSection;

