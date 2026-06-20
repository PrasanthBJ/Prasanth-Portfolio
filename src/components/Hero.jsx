import { useTypewriter } from "../hooks/useTypewriter";
import { PROFILE } from "../data/content";
import profilePhoto from "../assets/profile-photo.png";

export default function Hero() {
  const { displayed, done } = useTypewriter(PROFILE.whoamiLines);

  return (
    <div className="glass-card rounded-2xl overflow-hidden border border-slate-800">
      {/* Interactive Title Bar */}
      <div className="relative flex items-center justify-between bg-slate-950/60 backdrop-blur-md border-b border-slate-800 px-5 py-4 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
        
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-rose-500/80 hover:bg-rose-500 cursor-pointer transition-colors shadow-[0_0_8px_rgba(244,63,94,0.3)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 hover:bg-amber-500 cursor-pointer transition-colors shadow-[0_0_8px_rgba(245,158,11,0.3)]" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 hover:bg-emerald-500 cursor-pointer transition-colors shadow-[0_0_8px_rgba(16,185,129,0.3)]" />
          </div>
          <span className="font-mono text-xs text-slate-500 ml-2">
            bash &middot; about.md
          </span>
        </div>

        <span className="font-mono text-[10px] text-slate-550 hidden sm:inline">
          active_session: whoami
        </span>
      </div>

      {/* Terminal View Content */}
      <section id="about" className="px-6 md:px-10 py-10 md:py-14 bg-slate-950/40">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          
          {/* Left: Terminal Text & Bio */}
          <div className="md:col-span-7 lg:col-span-8">
            <div className="flex items-center gap-2 font-mono text-xs text-indigo-400 mb-4 bg-indigo-500/5 border border-indigo-500/10 w-fit px-3 py-1 rounded-md">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-ping" />
              <span>$ whoami</span>
            </div>

            <h1 className="font-sans text-4xl md:text-6xl font-black tracking-tight mb-4 bg-gradient-to-r from-slate-100 via-indigo-200 to-cyan-300 bg-clip-text text-transparent">
              {PROFILE.name}
            </h1>

            <p className="font-mono text-cyan-400 text-sm font-semibold mb-6 flex items-center gap-2">
              <span className="text-slate-500">&gt;&gt;</span>
              <span>{PROFILE.role}</span>
            </p>

            {/* Typewriter terminal window */}
            <div className="font-mono text-sm space-y-2.5 text-slate-300 bg-slate-900/50 border border-slate-800 rounded-xl p-5 shadow-inner">
              {displayed.map((line, i) => (
                <p key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500/80 shrink-0">&gt;</span>
                  <span>{line}</span>
                  {!done && i === displayed.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5 align-middle shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                  )}
                </p>
              ))}
            </div>

            {/* Resume Summary */}
            <div className="space-y-4 mt-6 text-sm text-slate-400 leading-relaxed max-w-2xl">
              <p>
                Information Technology undergraduate with hands-on experience building production-grade full-stack applications and scalable REST APIs. Skilled in backend service design, JWT-based authentication, relational database management, and containerized cloud deployment with Docker.
              </p>
              <p>
                Comfortable working across the full stack — from API design to responsive frontend delivery — with experience integrating third-party services and AI APIs.
              </p>
            </div>

            {/* Contacts & Quick Actions */}
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="font-mono text-xs bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-950 font-bold px-5 py-3 rounded-lg hover:brightness-110 shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-pointer"
              >
                view_projects()
              </a>

              <a
                href={PROFILE.resumeUrl}
                download="Prasanth_BJ_Resume.pdf"
                className="font-mono text-xs border border-slate-800 text-slate-300 bg-slate-900/20 px-5 py-3 rounded-lg hover:border-slate-600 hover:bg-slate-900/50 transition-all duration-300"
              >
                ./download_resume.pdf
              </a>
            </div>
          </div>

          {/* Right: webcam.feed themed profile photo frame */}
          <div className="md:col-span-5 lg:col-span-4 max-w-[320px] mx-auto md:max-w-none w-full">
            <div className="border border-slate-800 rounded-2xl overflow-hidden bg-slate-950/90 relative group shadow-2xl">
              
              {/* Webcam grid & sensor overlay */}
              <div className="absolute inset-0 pointer-events-none z-10 border border-slate-800 rounded-2xl m-[1px]">
                {/* Scanner line */}
                <div className="absolute inset-x-0 h-0.5 bg-cyan-500/20 shadow-[0_0_8px_rgba(6,182,212,0.5)] animate-[scan_4s_linear_infinite]" />
                
                {/* Camera corner indicators */}
                <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-500/40" />
                <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-500/40" />
                <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-cyan-500/40" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-cyan-500/40" />
              </div>

              {/* Status Header Overlay */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-slate-800/80 bg-slate-950/70 relative z-20">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse shadow-[0_0_6px_rgba(244,63,94,0.8)]" />
                  <span className="font-mono text-[10px] text-rose-400 font-bold uppercase tracking-wider">
                    REC
                  </span>
                </div>
                
                <span className="font-mono text-[9px] text-slate-500">
                  webcam.feed &middot; 1080p
                </span>
              </div>

              {/* Profile Image */}
              <div className="relative overflow-hidden aspect-[4/5] bg-slate-900 flex items-center justify-center">
                <img
                  src={profilePhoto}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover grayscale-[30%] contrast-[1.08] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                
                {/* Battery/Sensors HUD overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-20 font-mono text-[8px] text-cyan-400 bg-slate-950/70 px-3 py-1.5 rounded border border-slate-800/60 backdrop-blur-sm">
                  <span>ISO 400</span>
                  <span>f/2.8</span>
                  <span>1/120s</span>
                  <span className="flex items-center gap-1">
                    <span>100%</span>
                    <span className="inline-block w-4 h-2 border border-cyan-400/80 rounded-[1px] p-[1px] relative">
                      <span className="block h-full bg-cyan-400" />
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Stats Strip */}
      <StatsStrip />
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="grid grid-cols-3 border-t border-slate-800 bg-slate-950/40">
      {PROFILE.stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-6 text-center ${
            i > 0 ? "border-l border-slate-800" : ""
          } hover:bg-slate-900/10 transition-colors group`}
        >
          <div className="font-mono text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
            {s.value}
          </div>

          <div className="font-mono text-[10px] uppercase tracking-wider text-slate-500 mt-2 font-bold group-hover:text-slate-400 transition-colors">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}
