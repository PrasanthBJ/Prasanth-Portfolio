import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { STACK } from "../data/content";

export default function StackSection() {
  const categories = Object.keys(STACK);
  const [activeTab, setActiveTab] = useState(categories[0]);

  // Tab configurations for custom coloring and labels
  const tabConfig = {
    languages: { label: "languages.json", color: "text-amber-400", border: "border-amber-500/30", bg: "bg-amber-500/10", accent: "bg-amber-400" },
    backend: { label: "backend.xml", color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10", accent: "bg-indigo-400" },
    frontend: { label: "frontend.jsx", color: "text-emerald-400", border: "border-emerald-500/30", bg: "bg-emerald-500/10", accent: "bg-emerald-400" },
    databases: { label: "databases.sql", color: "text-sky-400", border: "border-sky-500/30", bg: "bg-sky-500/10", accent: "bg-sky-400" },
    devops: { label: "devops.yaml", color: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/10", accent: "bg-violet-400" },
    ai: { label: "ai_agents.py", color: "text-rose-400", border: "border-rose-500/30", bg: "bg-rose-500/10", accent: "bg-rose-400" },
    coreCs: { label: "core_cs.cpp", color: "text-slate-400", border: "border-slate-500/30", bg: "bg-slate-500/10", accent: "bg-slate-400" },
  };

  const getCleanLabel = (cat) => {
    return tabConfig[cat]?.label || cat;
  };

  const activeColor = tabConfig[activeTab]?.color || "text-cyan-400";
  const activeBorder = tabConfig[activeTab]?.border || "border-cyan-500/30";
  const activeBg = tabConfig[activeTab]?.bg || "bg-cyan-500/10";
  const activeAccent = tabConfig[activeTab]?.accent || "bg-cyan-400";

  return (
    <section id="stack" className="mt-16">
      <SectionHeader path="~/stack.json" />

      {/* Editor Frame */}
      <div className="glass-card rounded-xl overflow-hidden mt-6 border border-slate-800">
        
        {/* Editor Tabs Header */}
        <div className="flex bg-slate-950/80 border-b border-slate-850 overflow-x-auto scrollbar-none scroll-smooth">
          <div className="flex px-3 pt-2 gap-1">
            {categories.map((cat) => {
              const isActive = activeTab === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`font-mono text-xs px-4 py-2.5 rounded-t-lg border-t-2 border-x transition-all duration-300 shrink-0 cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? `bg-slate-900/60 border-t-2 border-slate-800 border-x-slate-800 ${tabConfig[cat]?.color} font-semibold`
                      : "bg-transparent border-t-transparent border-x-transparent text-slate-500 hover:text-slate-300"
                  }`}
                  style={{
                    borderTopColor: isActive ? `var(--color-glow-${cat === "coreCs" ? "indigo" : cat})` : "transparent"
                  }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isActive ? tabConfig[cat]?.accent : "bg-slate-600"}`} />
                  {getCleanLabel(cat)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editor Terminal Console Area */}
        <div className="p-6 md:p-8 bg-slate-900/40 relative min-h-[220px]">
          
          {/* File summary comment */}
          <div className="font-mono text-xs text-slate-500 mb-6 flex flex-wrap justify-between items-center gap-2 border-b border-slate-800/40 pb-4">
            <span>// file: {getCleanLabel(activeTab)} &middot; read-only mode</span>
            <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border ${activeBorder} ${activeBg} ${activeColor}`}>
              {activeTab}
            </span>
          </div>

          {/* Grid of skill tags */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 animate-[fade-in_0.3s_ease-out]">
            {STACK[activeTab].map((skill, index) => (
              <div
                key={skill}
                className="group border border-slate-850 hover:border-slate-700 bg-slate-950/30 p-3.5 rounded-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-slate-500">
                    [0{index + 1}]
                  </span>
                  <span className={`w-1.5 h-1.5 rounded-full ${activeAccent} opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all`} />
                </div>
                <div className="font-sans text-sm font-bold text-slate-200 group-hover:text-slate-100 transition-colors">
                  {skill}
                </div>
              </div>
            ))}
          </div>

          {/* JSON-style syntax background accent */}
          <div className="absolute right-6 bottom-4 pointer-events-none font-mono text-[60px] font-black text-slate-800/5 select-none uppercase">
            {activeTab}
          </div>
        </div>
      </div>
    </section>
  );
}
