"use client";

import { Code2, LayoutGrid, Monitor, Palette, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const filters = ["All", "Web Design", "Development", "AI", "Branding"];
const projects = [];

const icons = {
  "Web Design": Palette,
  Development: Code2,
  AI: Sparkles,
  Branding: Monitor,
  All: LayoutGrid,
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.section
      id="portfolio"
      className="section-shell"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mb-10 text-center">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle mx-auto">
          Filter through categories while I prepare new AI and frontend projects for release.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="glow-card space-y-4 p-6">
          <h3 className="text-lg font-semibold text-white">Filter Projects</h3>
          <div className="space-y-3">
            {filters.map((filter) => {
              const Icon = icons[filter] || LayoutGrid;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    activeFilter === filter
                      ? "border-accent bg-[rgba(0,212,212,0.15)] text-accent"
                      : "border-[rgba(255,255,255,0.08)] text-slate-300 hover:border-accent hover:text-accent"
                  }`}
                >
                  <Icon size={18} />
                  {filter}
                </button>
              );
            })}
          </div>
        </aside>

        <div className="glow-card p-10 text-center">
          <p className="text-slate-300">
            No projects have been published yet, but I&apos;m actively working on new AI and frontend
            experiences. Check back soon for updates.
          </p>
        </div>
      </div>
    </motion.section>
  );
}
