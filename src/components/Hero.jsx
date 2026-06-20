import { useTypewriter } from "../hooks/useTypewriter";
import { NAV, PROFILE } from "../data/content";
import profilePhoto from "../assets/profile-photo.png";

export default function Hero({ active, setActive }) {
  const { displayed, done } = useTypewriter(PROFILE.whoamiLines);

  return (
    <div className="border border-[#232936] rounded-lg overflow-hidden">
      {/* Title bar */}
      <div className="relative flex items-center justify-between bg-[#11151D]/80 backdrop-blur-md border-b border-[#232936] px-5 py-3.5 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

        <div className="relative flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B6470]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#5B6470]/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#7C8B7A] shadow-[0_0_8px_rgba(124,139,122,0.6)]" />
          </div>

          <span className="font-mono text-xs text-[#5B6470] ml-2 hidden sm:inline">
            prasanth — full-stack-dev
          </span>
        </div>

        <nav className="relative flex gap-1">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setActive(n.id)}
              className={`font-mono text-xs px-3 py-1.5 rounded-md transition-all ${
                active === n.id
                  ? "text-[#9BAE98] bg-[#7C8B7A]/15 shadow-[inset_0_0_0_1px_rgba(124,139,122,0.3)]"
                  : "text-[#5B6470] hover:text-[#E8E6DF] hover:bg-white/5"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Terminal content */}
      <section
        id="about"
        className="px-6 md:px-10 py-12 md:py-16 bg-[#0B0E14]"
      >
        <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
          {/* Left: terminal text */}
          <div>
            <p className="font-mono text-sm text-[#5B6470] mb-6">
              <span className="text-[#7C8B7A]">$</span> whoami
            </p>

            <h1 className="font-mono text-4xl md:text-6xl font-bold tracking-tight mb-8 text-[#E8E6DF]">
              {PROFILE.name}
              <span className="text-[#7C8B7A]">_</span>
            </h1>

            <div className="font-mono text-sm md:text-base space-y-2 text-[#9BAE98] min-h-[90px]">
              {displayed.map((line, i) => (
                <p key={i}>
                  <span className="text-[#5B6470]">{">"}</span> {line}
                  {!done && i === displayed.length - 1 && (
                    <span className="inline-block w-2 h-4 bg-[#7C8B7A] ml-1 animate-pulse align-middle" />
                  )}
                </p>
              ))}
            </div>

            <p className="text-[#5B6470] text-base leading-relaxed max-w-xl mt-8">
              Full-stack developer focused on Java, Spring Boot, and React —
              building things that go past the demo and into production.
            </p>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="font-mono text-sm bg-[#7C8B7A] text-[#0B0E14] font-medium px-5 py-2.5 rounded-md hover:bg-[#9BAE98] transition-colors"
              >
                view_projects()
              </a>

              <a
                href={PROFILE.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm border border-[#232936] text-[#E8E6DF] px-5 py-2.5 rounded-md hover:border-[#5B6470] transition-colors"
              >
                ./download_resume
              </a>
            </div>
          </div>

          {/* Right: photo */}
          <div className="border border-[#232936] rounded-lg overflow-hidden bg-[#11151D] hidden md:block">
            <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#232936] bg-[#0B0E14]/40">
              <span className="w-2 h-2 rounded-full bg-[#5B6470]/40" />
              <span className="w-2 h-2 rounded-full bg-[#5B6470]/40" />
              <span className="w-2 h-2 rounded-full bg-[#7C8B7A]" />
              <span className="font-mono text-[10px] text-[#5B6470] ml-1.5">
                webcam.feed
              </span>
            </div>

            <img
              src={profilePhoto         }
              alt={PROFILE.name}
              className="w-full aspect-[4/5] object-cover grayscale-[20%] contrast-[1.05]"
            />
          </div>
        </div>
      </section>

      <StatsStrip />
    </div>
  );
}

function StatsStrip() {
  return (
    <div className="grid grid-cols-3 border-t border-[#232936]">
      {PROFILE.stats.map((s, i) => (
        <div
          key={s.label}
          className={`px-6 py-5 ${
            i > 0 ? "border-l border-[#232936]" : ""
          }`}
        >
          <div className="font-mono text-2xl md:text-3xl font-bold text-[#7C8B7A]">
            {s.value}
          </div>

          <div className="font-mono text-xs text-[#5B6470] mt-1">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

