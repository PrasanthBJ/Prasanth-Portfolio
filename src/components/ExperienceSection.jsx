import SectionHeader from "./SectionHeader";
import { EXPERIENCE, EDUCATION, ACHIEVEMENTS, LEETCODE } from "../data/content";

export default function ExperienceSection() {
  return (
    <section id="experience" className="mt-16">
      <SectionHeader path="~/experience.log" />
      
      <div className="grid lg:grid-cols-12 gap-8 mt-6">
        {/* Experience & Education - 7 cols */}
        <div className="lg:col-span-7 space-y-8">
          {/* Work Experience */}
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-mono text-sm uppercase tracking-wider text-indigo-400 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
              Work Experience
            </h3>
            
            <div className="relative border-l-2 border-indigo-500/30 pl-6 ml-2 space-y-8">
              {EXPERIENCE.map((exp, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-indigo-400 bg-bg-dark group-hover:bg-indigo-400 transition-colors" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                    <h4 className="font-bold text-lg text-slate-100 group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h4>
                    <span className="font-mono text-xs text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded">
                      {exp.period}
                    </span>
                  </div>
                  
                  <p className="font-mono text-xs text-slate-400 mb-3">
                    {exp.company} &middot; <span className="italic">{exp.location}</span>
                  </p>
                  
                  <ul className="space-y-2 text-sm text-slate-300">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1 select-none font-mono text-xs">&gt;</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="glass-card rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-mono text-sm uppercase tracking-wider text-cyan-400 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Education
            </h3>
            
            <div className="relative border-l-2 border-cyan-500/30 pl-6 ml-2 space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full border-2 border-cyan-400 bg-bg-dark group-hover:bg-cyan-400 transition-colors" />
                  
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <h4 className="font-bold text-lg text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <span className="font-mono text-xs text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">
                      {edu.period}
                    </span>
                  </div>
                  
                  <p className="font-mono text-xs text-slate-400 mb-2">
                    {edu.college} &middot; <span className="italic">{edu.location}</span>
                  </p>
                  
                  <p className="text-sm font-semibold text-cyan-400 mb-3">{edu.detail}</p>
                  
                  <div className="flex flex-wrap gap-1.5">
                    {edu.coursework.map((course, idx) => (
                      <span key={idx} className="font-mono text-[10px] text-slate-300 bg-slate-800/40 border border-slate-700/50 px-2 py-0.5 rounded">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements - 5 cols */}
        <div className="lg:col-span-5">
          <div className="glass-card rounded-xl p-6 h-full relative overflow-hidden flex flex-col">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="font-mono text-sm uppercase tracking-wider text-amber-400 flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Achievements
            </h3>
            
            <div className="space-y-6 flex-grow">
              {ACHIEVEMENTS.map((ach, index) => (
                <div key={index} className="border border-slate-800 bg-slate-900/35 rounded-lg p-4 hover:border-amber-500/30 hover:bg-slate-900/50 transition-all group duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-amber-400 font-mono text-base font-bold">0{index + 1}.</span>
                    <h4 className="font-mono font-bold text-sm text-slate-100 group-hover:text-amber-300 transition-colors">
                      {ach.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pl-6">
                    {ach.detail}
                  </p>
                </div>
              ))}
            </div>

              {/* Visual LeetCode Dashboard */}
              <div className="mt-8 border border-slate-800 rounded-xl p-5 bg-slate-950/65 font-mono text-xs text-slate-350 space-y-4">
                {/* Header: user info */}
                <div className="flex justify-between items-center border-b border-slate-850 pb-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-100 font-bold hover:text-amber-400 transition-colors">
                      Prasanth_BJ
                    </span>
                    <span className="w-3.5 h-3.5 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center text-[8px] font-bold">
                      ✓
                    </span>
                  </div>
                  <span className="text-[10px] text-slate-500">Rank: 631,654</span>
                </div>

                {/* Grid: Rating & Solved counts */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Contest Rating */}
                  <div className="bg-slate-900/40 border border-slate-850 rounded-lg p-3 flex flex-col justify-between">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Contest Rating</div>
                      <div className="text-2xl font-black text-amber-400 glow-text-amber mt-1">1,511</div>
                    </div>
                    <div className="text-[9px] text-slate-405 mt-2 space-y-0.5">
                      <p>&bull; Top {LEETCODE.topPercentage}</p>
                      <p>&bull; Attended: {LEETCODE.contests}</p>
                    </div>
                  </div>

                  {/* Problems Solved */}
                  <div className="bg-slate-900/40 border border-slate-850 rounded-lg p-3 space-y-2">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] text-slate-500 uppercase">Solved</span>
                      <span className="text-sm font-bold text-slate-100">{LEETCODE.solved}</span>
                    </div>
                    
                    {/* Progress lines */}
                    <div className="space-y-1.5 text-[9px]">
                      {/* Easy */}
                      <div>
                        <div className="flex justify-between text-emerald-400">
                          <span>Easy</span>
                          <span>{LEETCODE.easy}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-emerald-500" style={{ width: `${(LEETCODE.easy / LEETCODE.solved) * 100}%` }} />
                        </div>
                      </div>
                      {/* Med */}
                      <div>
                        <div className="flex justify-between text-amber-500">
                          <span>Medium</span>
                          <span>{LEETCODE.medium}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-amber-500" style={{ width: `${(LEETCODE.medium / LEETCODE.solved) * 100}%` }} />
                        </div>
                      </div>
                      {/* Hard */}
                      <div>
                        <div className="flex justify-between text-rose-500">
                          <span>Hard</span>
                          <span>{LEETCODE.hard}</span>
                        </div>
                        <div className="w-full h-1 bg-slate-900 rounded-full overflow-hidden mt-0.5">
                          <div className="h-full bg-rose-500" style={{ width: `${(LEETCODE.hard / LEETCODE.solved) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Statistics */}
                <div className="border-t border-slate-850 pt-2.5 grid grid-cols-3 gap-1 text-center text-[9px] text-slate-450">
                  <div>
                    <div className="text-slate-500">active_days</div>
                    <div className="font-bold text-slate-300 mt-0.5">{LEETCODE.activeDays}</div>
                  </div>
                  <div>
                    <div className="text-slate-500">max_streak</div>
                    <div className="font-bold text-slate-300 mt-0.5">{LEETCODE.maxStreak}d</div>
                  </div>
                  <div>
                    <div className="text-slate-500">submissions</div>
                    <div className="font-bold text-slate-300 mt-0.5">{LEETCODE.submissionsYear}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
