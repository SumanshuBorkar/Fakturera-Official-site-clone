import React, { useState } from "react";
import "./Slider.css";
import Stars from "../../assets/5Stars.svg";

const TESTIMONIALS = [
  {
    text:
      "A very good invoice program! Our company has used your invoice program since its inception in 2005 and is very satisfied. The program is easy to use and covers all our wishes in relation to our own needs and requirements in relation to accounting and overview. Good follow-up via the support service for questions. Highly recommended!",
    author: "Knut Arntzen",
    role: "Bookjacket",
  },
  {
    text:
      "Simple, fast, and reliable. LättFaktura reduced our admin time dramatically. Support is quick and helpful. We recommend it to every small business we know.",
    author: "Elin Larsson",
    role: "Founder, NordCraft",
  },
  {
    text:
      "Exactly what we needed. Clear overview, great export options, and painless invoicing. Been with them for years.",
    author: "Mikael Berg",
    role: "Ops Manager, B-Pro",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div className="testimonial-section">

      <div className="inner">

        <img src={Stars} alt="Stars" className="StarsTop" />

        <h1 className="Slider-tEXT Placement">
          <span className="text-Top-HeroComp">Our Customers </span>
          about LättFaktura
        </h1>

        {/* Slider window */}
        <div className="slider-window" aria-live="polite">
          {/* Left Arrow */}
          <button
            className="nav-btn left"
            aria-label="Previous testimonial"
            onClick={prev}
          >
            ‹
          </button>

          {/* Track (slides only) */}
          <div className="slider-track-wrapper">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {TESTIMONIALS.map((t, i) => (
                <article className="slideSlider" key={i}>
                  <p className="text">{t.text}</p>
                  <div>
                    <h3 className="author">{t.author}</h3>
                    <p className="role">{t.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="nav-btn right"
            aria-label="Next testimonial"
            onClick={next}
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="dots">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
