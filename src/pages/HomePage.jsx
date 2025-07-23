// src/pages/HomePage.jsx
import React, { useEffect, useRef } from 'react';
import './index.css';

const HomePage = () => {

  const valueRefs = useRef ([]);

  useEffect (() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
          }
        });
      },
      { threshold: 0.3 }
    );

    valueRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      valueRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="homepage">
      <section className="hero">
        <h1>Powering the Future, Responsibly</h1>
        <p>Reliable, sustainable energy solutions for a greener tomorrow...</p>
        <button>Read More</button>
      </section>

      <section className="values">
        <h2>Our Values</h2>
       {['sustainability','integrity','innovation'].map((word, index) => (
        <h1
          key={word}
          className="value-text"
          ref={(el) => (valueRefs.current[index] = el)}
          style={{color: word === 'integrity' ? '#FF8400' : '#0B0829' }}>
            {word}
          </h1>
       ))}
      </section>

      <section className="services">
        <h2>Core Services</h2>
        <div className="service-cards">
          <div className="card">
            <img src="/src/assets/solar.jpg" alt="Solar Energy" />
            <h4>Energy Solutions</h4>
            <p>Optimizing performance and sustainability...</p>
          </div>
          <div className="card">
            <img src="/src/assets/engineer.jpeg" alt="Engineer at Work" />
            <h4>Engineering Services</h4>
            <p>Expert design and execution of engineering projects...</p>
          </div>
          <div className="card">
            <img src="/src/assets/consult.jpg" alt="Consultation in Progress" />
            <h4>Consulting Services</h4>
            <p>Offering strategies and advice tailored to your needs...</p>
          </div>
        </div>
        <button style={{display: "flex", justifyContent: "center"}}>Learn More</button>
      </section>

      <section className="why-chadia">
        <h2>Why Choose Chadia?</h2>
        <p>
          Chadia Energy combines technical expertise with a deep understanding of the energy landscape. 
          Our team of professionals is passionate about delivering high-quality solutions that not only meet regulatory standards, 
          but also foster economic growth and environmental sustainability.
        </p>
        <p>
          By choosing us, you gain a trusted partner committed to your success and the well-being of our planet.
        </p>
        <button style={{display: "flex" ,justifyContent: "flex-end"}}>Read More</button>
      </section>
    </div>
  );
};

export default HomePage;
