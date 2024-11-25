import React, { useState } from "react";

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    { src: "/images/gallery-01.jpg", alt: "Gallery 1" },
    { src: "/images/gallery-02.jpg", alt: "Gallery 2" },
    { src: "/images/gallery-03.jpg", alt: "Gallery 3" },
    { src: "/images/gallery-04.jpg", alt: "Gallery 3" },
    { src: "/images/gallery-05.jpg", alt: "Gallery 3" },

  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="text-center mb-4">Our Gallery</h2>
        <p className="mb-5">Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <img src="/images/hdg-01.png" alt="" className="mb-5" />

        <div className="gallery-container d-flex justify-content-center align-items-center">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="carousel-control-prev bg-green text-white rounded-circle p-2">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>

          {/* Main Image */}
          <div className="main-image-container mx-3">
            <img src={images[activeIndex].src} alt={images[activeIndex].alt} className="img-fluid main-image rounded" />
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className="carousel-control-next bg-green text-white rounded-circle p-2">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        <div className="thumbnails mt-3 d-flex justify-content-center">
          {images.map((image, index) => (
            <div key={index} className="thumbnail mx-2">
              <img
                src={image.src}
                alt={image.alt}
                className={`img-fluid rounded thumbnail-img ${activeIndex === index ? "active-thumbnail" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
