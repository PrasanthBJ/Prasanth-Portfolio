import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "../data/content";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="mt-16 mb-12">
      <SectionHeader path="~/contact.sh" />
      <div className="mt-6 border border-[#232936] rounded-lg bg-[#11151D] p-8">
        <p className="font-mono text-sm text-[#5B6470] mb-2">
          <span className="text-[#7C8B7A]">$</span> echo "open to full-stack &amp; genai roles"
        </p>
        <h2 className="font-mono text-2xl md:text-3xl font-bold text-[#E8E6DF] mb-8">
          Let's build something →
        </h2>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={copyEmail}
            className="font-mono text-sm bg-[#7C8B7A] text-[#0B0E14] font-medium px-5 py-2.5 rounded-md hover:bg-[#9BAE98] transition-colors cursor-pointer"
          >
            {copied ? "copied_to_clipboard ✓" : "copy_email()"}
          </button>
          <a
            href={PROFILE.github}
            className="font-mono text-sm border border-[#232936] px-5 py-2.5 rounded-md hover:border-[#5B6470] transition-colors"
          >
            github
          </a>
          <a
            href={PROFILE.linkedin}
            className="font-mono text-sm border border-[#232936] px-5 py-2.5 rounded-md hover:border-[#5B6470] transition-colors"
          >
            linkedin
          </a>
          <a
            href={PROFILE.leetcode}
            className="font-mono text-sm border border-[#232936] px-5 py-2.5 rounded-md hover:border-[#5B6470] transition-colors"
          >
            leetcode
          </a>
        </div>
        <p className="font-mono text-xs text-[#5B6470] mt-8">{PROFILE.college}</p>
      </div>
    </section>
  );
}
