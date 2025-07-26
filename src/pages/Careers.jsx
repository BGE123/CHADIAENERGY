import "./Careers.css";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

const Careers = () => {
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
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="careers-page">
        <header
          ref={heroRef}
          className={`careers-hero ${heroVisible ? "animate-in" : ""}`}
        >
          <div class="overlay"></div>
          <div className="hero-content">
            <h1>Join Our Team</h1>
            <p>Build a brighter future with Chadia Energy</p>
          </div>
        </header>

        <p className="intro">
          At Chadia Energy, we’re always on the lookout for passionate
          individuals who want to make a difference in the future of sustainable
          energy.
        </p>

        <section className="positions">
          <div className="position">
            <h3>Field Engineer</h3>
            <p>Drive renewable energy projects across our client sites.</p>
            <button>Apply Now</button>
          </div>
          <div className="position">
            <h3>Project Manager</h3>
            <p>Coordinate, execute and evaluate strategic energy solutions.</p>
            <button>Apply Now</button>
          </div>
          <div className="position">
            <h3>Research Analyst</h3>
            <p>Innovate and provide insight for sustainable energy strategy.</p>
            <button>Apply Now</button>
          </div>
        </section>
      </div>
    </motion.div>
  );
};

export default Careers;
