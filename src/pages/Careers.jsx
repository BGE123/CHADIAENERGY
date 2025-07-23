import React from 'react';
import './index.css';

const Careers = () => {
  return (
    <div className="careers-page">
      <header className="careers-hero">
        <div className="hero-content">
          <h1>Join Our Team</h1>
          <p>Build a brighter future with Chadia Energy</p>
        </div>
      </header>

      <p className="intro">
        At Chadia Energy, we’re always on the lookout for passionate individuals who want to make a difference in the future of sustainable energy.
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
  );
}

export default Careers;
