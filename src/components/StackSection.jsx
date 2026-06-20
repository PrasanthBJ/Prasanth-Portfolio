import SectionHeader from "./SectionHeader";
import { STACK } from "../data/content";

export default function StackSection() {
  const entries = Object.entries(STACK);

  return (
    <section id="stack" className="mt-16">
      <SectionHeader path="~/stack.json" />
      <div className="mt-6 border border-[#232936] rounded-lg bg-[#11151D] p-6 font-mono text-sm">
        <p className="text-[#5B6470]">{"{"}</p>
        {entries.map(([key, items], i) => (
          <div key={key} className="pl-4 py-1.5">
            <span className="text-[#7C8B7A]">"{key}"</span>
            <span className="text-[#5B6470]">: [</span>
            <span className="text-[#C9A14A]">
              {items.map((s) => `"${s}"`).join(", ")}
            </span>
            <span className="text-[#5B6470]">]{i < entries.length - 1 ? "," : ""}</span>
          </div>
        ))}
        <p className="text-[#5B6470]">{"}"}</p>
      </div>
    </section>
  );
}
