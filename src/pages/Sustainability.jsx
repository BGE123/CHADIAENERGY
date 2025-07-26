import React from "react";
import "./Sustainability.css";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -40 },
};

function Sustainability() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.4 }}
    >
      <div className="sustainability-page">
        <h1>Our Commitment to Sustainability</h1>
        <p>
          At Chadia, sustainability is at the core of everything we do. We
          believe in responsible innovation that protects the environment and
          supports future generations.
        </p>

        <section className="pillars">
          <div className="pillar">
            <h3>Clean Energy</h3>
            <p>
              We deploy and promote renewable energy solutions across sectors.
            </p>
          </div>
          <div className="pillar">
            <h3>Environmental Responsibility</h3>
            <p>
              Our operations are geared towards reducing carbon footprint and
              preserving nature.
            </p>
          </div>
          <div className="pillar">
            <h3>Social Impact</h3>
            <p>
              We invest in communities and projects that create long-lasting
              change.
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}

export default Sustainability;
