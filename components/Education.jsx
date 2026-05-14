"use client";

import { motion } from "framer-motion";

const timeline = [
  {
    title: "Agentic Robotic AI Engineer Course",
    status: "Current",
    description:
      "Enrolled in an advanced course focusing on AI and robotics, learning about agentic systems and intelligent automation.",
  },
  {
    title: "12th Grade - Medical Field",
    status: "Completed",
    description:
      "Completed high school with a focus on medical studies, developing analytical and problem-solving skills.",
  },
  {
    title: "Transition to Computer Science",
    status: "Recent",
    description:
      "Started learning programming fundamentals, web development, and exploring AI technologies.",
  },
];

export default function Education() {
  return (
    <motion.section
      id="education"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title text-center">Education Timeline</h2>
      <p className="section-subtitle text-center mx-auto">
        The key milestones that shaped my path from medical studies to Computer Science and AI.
      </p>

      <div className="relative space-y-8 border-l border-accent/40 pl-8">
        {timeline.map((item) => (
          <div key={item.title} className="relative glow-card p-6">
            <span className="absolute -left-[38px] top-8 h-3 w-3 rounded-full bg-accent" />
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="mt-1 text-sm text-accent">{item.status}</p>
            <p className="mt-3 text-sm text-slate-300">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
