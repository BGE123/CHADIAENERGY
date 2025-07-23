import React from 'react';
import './index.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-hero">
        <h1>About <span className="highlight">Chadia Energy</span></h1>
        <p>Energy Solutions    |     Engineering     |     Consultancy</p>
      </div>

      <div className='about-flex'>
      <img className= 'about-img' src="/src/assets/engineer.jpeg" alt="Engineering in Action"/>

      <div className="about-content">
        <p>
          Chadia Energy System Ltd is a premier provider of innovative energy
          solutions and engineering services dedicated to advancing the energy sector.
          With a commitment to excellence and sustainability, we offer a comprehensive
          range of services tailored to meet the evolving needs of our clients in
          various industries.
        </p>
        <p>
          Our expertise encompasses renewable energy systems, energy efficiency
          consulting, and engineering design, all aimed at creating reliable and
          effective energy solutions.
        </p>
        <p>
          Our mission is to provide high-quality energy services that enhance
          operational performance, reduce environmental impact, and contribute to a
          cleaner, more sustainable future. We strive to exceed our clients’
          expectations through innovation, expertise, and a strong commitment to
          customer service.
        </p>
      </div>
      </div>

      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <div className="form-row">
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>
          <input type="email" placeholder="Email address" />
          <textarea placeholder="Enter your question or message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default About;
