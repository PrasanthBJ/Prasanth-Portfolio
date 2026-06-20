import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "../data/content";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard?.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="mt-16 mb-16">
      <SectionHeader path="~/contact.sh" />
      
      <div className="mt-6 glass-card rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
        {/* Glow accent blob */}
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        {/* Script comment */}
        <p className="font-mono text-xs text-slate-500 mb-2">
          <span className="text-emerald-500">$</span> echo "open to full-stack &amp; AI-adjacent roles"
        </p>
        
        <h2 className="font-sans text-3xl font-black text-slate-100 mb-6 bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">
          Let's build something together &rarr;
        </h2>
        
        <p className="text-sm text-slate-400 leading-relaxed mb-8 max-w-xl">
          Whether you have a full-time role open, a freelance project, or just want to chat about Spring Boot, React, RAG pipelines, or LeetCode practices — my inbox is always open.
        </p>

        {/* Buttons & Socials Grid */}
        <div className="flex flex-wrap gap-4 items-center">
          {/* Copy Email Button */}
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 font-mono text-xs bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 font-bold px-6 py-3 rounded-lg hover:brightness-110 shadow-lg hover:shadow-emerald-500/10 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
                <span>copied_to_clipboard ✓</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>copy_email()</span>
              </>
            )}
          </button>

          {/* Social Icons Link Bar */}
          <div className="flex flex-wrap gap-2.5">
            {/* GitHub */}
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-slate-100 bg-slate-900/30 px-5 py-3 rounded-lg transition-all"
            >
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              <span>github</span>
            </a>

            {/* LinkedIn */}
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-slate-100 bg-slate-900/30 px-5 py-3 rounded-lg transition-all"
            >
              <svg className="w-4 h-4 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <span>linkedin</span>
            </a>

            {/* LeetCode */}
            <a
              href={PROFILE.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs border border-slate-800 text-slate-300 hover:border-slate-600 hover:text-slate-100 bg-slate-900/30 px-5 py-3 rounded-lg transition-all"
            >
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>leetcode</span>
            </a>
          </div>
        </div>

        {/* Footer/Meta Info */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 border-t border-slate-850 pt-6">
          <p className="font-mono text-xs text-slate-500">
            {PROFILE.college}
          </p>
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
            <span>Coimbatore, India</span>
          </div>
        </div>
      </div>
    </section>
  );
}
