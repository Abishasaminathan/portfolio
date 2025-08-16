import React from "react";
import { motion } from "framer-motion";
import { skills } from "../data";
import "./skills.css";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <h2>Skills</h2>
        </div>

        <div className="skills">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              className="skill"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <p>{s.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
