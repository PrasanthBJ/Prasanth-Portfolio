export default function ProjectCard({ name, tag, status, desc, stack, bullets, links }) {
  // Decide badge colors based on tag
  const isFlagship = tag.includes("flagship");
  const badgeClasses = isFlagship
    ? "bg-indigo-500/15 text-indigo-400 border-indigo-500/30"
    : tag.includes("productivity")
    ? "bg-amber-500/15 text-amber-400 border-amber-500/30"
    : "bg-emerald-500/15 text-emerald-400 border-emerald-500/30";

  return (
    <div className="glass-card rounded-xl p-6 flex flex-col justify-between group h-full relative overflow-hidden border border-slate-800/80">
      {/* Decorative gradient corner glow */}
      <div className={`absolute top-0 right-0 w-24 h-24 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity ${
        isFlagship ? "bg-indigo-500" : tag.includes("productivity") ? "bg-amber-500" : "bg-emerald-500"
      }`} />
      
      <div>
        {/* Card Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="font-sans text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
              {name}
            </h3>
            <span className={`inline-block font-mono text-[9px] uppercase tracking-wider border px-2 py-0.5 rounded-md mt-1.5 font-bold ${badgeClasses}`}>
              {tag}
            </span>
          </div>
          
          <span className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 bg-slate-950/40 border border-slate-850 px-2 py-1 rounded-md">
            <span className={`w-1.5 h-1.5 rounded-full ${status === "deployed" ? "bg-emerald-400 animate-pulse" : "bg-amber-400"}`} />
            {status}
          </span>
        </div>

        {/* Project Description */}
        <p className="text-xs text-slate-400 leading-relaxed mb-4">
          {desc}
        </p>

        {/* Key Features Bullet List */}
        <ul className="space-y-2 mb-6 border-t border-slate-800/60 pt-4">
          {bullets && bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-cyan-400 mt-0.5 shrink-0 font-mono select-none">&bull;</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer (Stack & Links) */}
      <div>
        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {stack.map((s) => (
            <span
              key={s}
              className="font-mono text-[10px] text-slate-300 bg-slate-900/50 border border-slate-800 px-2 py-0.5 rounded-md hover:border-slate-700 hover:text-slate-200 transition-colors"
            >
              {s}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex items-center justify-between border-t border-slate-800/40 pt-4 font-mono text-xs">
          <div className="flex gap-4">
            <a 
              href={links.live} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
            >
              live_demo ↗
            </a>
            <a 
              href={links.code} 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
            >
              source_code ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
