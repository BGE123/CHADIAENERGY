import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import React, { useEffect, useRef, useState } from "react";
import img1 from "../assets/solar.jpg";
import img2 from "../assets/engineer.jpeg";
import img3 from "../assets/consult.jpg";
import img4 from "../assets/genserv.jpeg";
import img5 from "../assets/audit.jpeg";

export default function service() {
  const scrollLeft = () => {
    const container = document.getElementById("serviceCards");
    container.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.getElementById("serviceCards");
    container.scrollBy({ left: 300, behavior: "smooth" });
  };
  const heroRef = useRef(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        if (entry.isIntersecting) {
          setHeroVisible(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={heroRef}
      className={`services ${heroVisible ? "animate-in" : ""}`}
    >
      <h2>Core Services</h2>
      <button className="scroll-arrow left" onClick={() => scrollLeft()}>
        <FaArrowLeft />
      </button>
      <div className="service-cards" id="serviceCards">
        <div className="card">
          <img src={img1} alt="Solar Energy" />
          <h4>Energy Solutions</h4>
          <p>Optimizing performance and sustainability...</p>
        </div>
        <div className="card">
          <img src={img2} alt="Engineer at Work" />
          <h4>Engineering Services</h4>
          <p>Expert design and execution of engineering projects...</p>
        </div>
        <div className="card">
          <img src={img3} alt="Consultation in Progress" />
          <h4>Consulting Services</h4>
          <p>Offering strategies and advice tailored to your needs...</p>
        </div>
        <div className="card">
          <img src={img4} alt="Consultation in Progress" />
          <h4>General Services</h4>
          <p>Offering strategies and advice tailored to your needs...</p>
        </div>
        <div className="card">
          <img src={img5} alt="Consultation in Progress" />
          <h4>Energy Audits</h4>
          <p>Offering strategies and advice tailored to your needs...</p>
        </div>
      </div>
      <button className="scroll-arrow right" onClick={() => scrollRight()}>
        <FaArrowRight />
      </button>
      <div class="but-mid">
        <a href="/services">
          <button
            class="but4"
            style={{ display: "flex", justifyContent: "center" }}
          >
            Learn More
          </button>
        </a>
      </div>
    </section>
  );
}
