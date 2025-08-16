import React from "react";
import { motion } from "framer-motion";
import { projects } from "../data";
import "./project.css";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Projects</h2>
        </div>

        <div className="grid">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="project"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <h3>{p.title}</h3>
              <p>{p.description}</p>

              {/* <div className="stack">
                {p.stack.map((tech, idx) => (
                  <span key={idx}>{tech}</span>
                ))}
              </div> */}

              <div className="links">
                <a
                  className="link"
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
                <a
                  className="link"
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
