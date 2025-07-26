import { HiArrowSmRight } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";
import img2 from "../assets/engineer.jpeg";

export default function WhoWeAre() {
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
    <section ref={heroRef} className={`WE ${heroVisible ? "animate-in" : ""}`}>
      <div className="about-hero">
        <h1>
          About <span className="highlight">Chadia Energy</span>
        </h1>
        <p>Energy Solutions | Engineering | Consultancy</p>
      </div>
      <div className="about-flex">
        <img src={img2} alt="Engineering in Action" />
        <div className="about-content">
          <div>
            <p>
              Chadia Energy System Ltd is a premier provider of innovative
              energy solutions and engineering services dedicated to advancing
              the energy sector.
            </p>
            <p>
              Our expertise encompasses renewable energy systems, energy
              efficiency consulting, and engineering design.
            </p>
            <p>
              Our mission is to provide high-quality energy services that
              enhance operational performance and reduce environmental impact.
            </p>
          </div>
          <button className="but1">
            <div className="btn">
              <a>Read More</a>
              <HiArrowSmRight />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
