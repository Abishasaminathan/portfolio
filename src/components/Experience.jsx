import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../data";
import "./experience.css";

export default function Experience() {
  const stackClasses = {
    "React.js": "reactjs",
    "React Native": "reactnative",
    "Next.js": "nextjs",
    "TailwindCSS": "tailwind",
    "JavaScript": "javascript",
    "TypeScript": "typescript",
  };

  return (
    <section id="experience">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="experience-header">
          <h2>Experience</h2>
          <p>My professional journey with passion & growth 🚀</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((e, i) => (
            <motion.div
              key={i}
              className="mb-14 relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <span className="timeline-dot"></span>

              <div className="experience-card">
                <h3>
                  {e.role} — <span>{e.company}</span>
                </h3>
                <div className="meta">{e.years}</div>
                <p>{e.desc}</p>

                <div className="experience-badges">
                  {e.stack?.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      className={stackClasses[tech] || "bg-gray-600"}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
