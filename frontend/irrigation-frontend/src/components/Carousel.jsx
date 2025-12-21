import React from "react";
import "../styles/carousel.css";

const Carousel = () => {
  const slides = [
    {
      img: "C1.png",
      title: "Smart Agriculture Solutions",
      desc: "Advanced irrigation systems for higher crop yield"
    },
    {
      img: "C2.png",
      title: "Drip Irrigation Technology",
      desc: "Save water, save cost, increase productivity"
    },
    {
      img: "C3.png",
      title: "Modern Farming Equipment",
      desc: "Reliable tools designed for Indian farmers"
    },
    {
      img: "C4.png",
      title: "Sustainable Water Management",
      desc: "Efficient irrigation for a greener future"
    },
    {
      img: "C5.png",
      title: "Trusted Agricultural Partner",
      desc: "Vidhi Enterprises – Growing with farmers"
    }
  ];

  return (
    <div
      id="mainCarousel"
      className="carousel slide carousel-fade main-carousel"
      data-bs-ride="carousel"
    >
      {/* INDICATORS */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#mainCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
          ></button>
        ))}
      </div>

      {/* SLIDES */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`/img/${slide.img}`}
              className="d-block w-100 carousel-img"
              alt={slide.title}
            />

            {/* TEXT OVERLAY */}
            <div className="carousel-overlay">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* CONTROLS */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#mainCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  );
};

export default Carousel;
