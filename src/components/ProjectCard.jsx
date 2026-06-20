export default function ProjectCard({ name, tag, status, desc, stack, links }) {
  return (
    <div className="border border-[#232936] rounded-lg bg-[#11151D] p-6 hover:border-[#5B6470] transition-colors">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-mono text-lg font-medium text-[#E8E6DF]">{name}</h3>
        <span className="font-mono text-[10px] uppercase tracking-wide text-[#7C8B7A] bg-[#7C8B7A]/10 px-2 py-1 rounded">
          {tag}
        </span>
      </div>
      <p className="text-sm text-[#5B6470] leading-relaxed mb-4">{desc}</p>
      <div className="flex flex-wrap gap-1.5 mb-5">
        {stack.map((s) => (
          <span
            key={s}
            className="font-mono text-[11px] text-[#9BAE98] bg-[#0B0E14] border border-[#232936] px-2 py-0.5 rounded"
          >
            {s}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-4 font-mono text-xs">
          <a href={links.live} className="text-[#7C8B7A] hover:text-[#9BAE98]">
            live ↗
          </a>
          <a href={links.code} className="text-[#5B6470] hover:text-[#E8E6DF]">
            code ↗
          </a>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[10px] text-[#5B6470]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#7C8B7A]" />
          {status}
        </span>
      </div>
    </div>
  );
}
