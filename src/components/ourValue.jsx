import { PiPlantDuotone } from "react-icons/pi";
import { LuPlugZap } from "react-icons/lu";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { HiArrowSmRight } from "react-icons/hi";
import React, { useEffect, useRef, useState } from "react";

export default function OurValue() {
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
      className={`our-value new ${heroVisible ? "animate-in" : ""}`}
    >
      <div className="val">
        <div className="desc">
          <h2>Our Value and Propositions</h2>
          <p>
            Our energy efficient solutions are designed to make a positive
            impact on sustainability while providing significant cost savings.
            By utilizing innovative technologies and practices, we help our
            customers reduce their carbon footprint and achieve long-term energy
            efficiency.
          </p>
        </div>
      </div>

      <div>
        <div className="value-grid">
          <div className="g g1">
            <h3>Sustainability</h3>
            <p>
              Our commitment to sustainability drives us to design and deliver
              systems that are not only efficient, but also environmentally
              responsible.
            </p>
            <PiPlantDuotone className="icon-med" />
          </div>
          <div className="g g2">
            <h3>Integrity</h3>
            <p>
              Whether it’s delivering on our promises or upholding regulatory
              standards, we hold ourselves to the highest ethical standards.
            </p>
            <LuPlugZap className="icon-med" />
          </div>
          <div className="g g3">
            <h3>Innovation</h3>
            <p>
              By embracing emerging technologies and challenging conventional
              thinking, we turn bold ideas into real-world impact.
            </p>
            <MdOutlineEnergySavingsLeaf className="icon-med" />
          </div>
        </div>
      </div>
    </section>
  );
}
