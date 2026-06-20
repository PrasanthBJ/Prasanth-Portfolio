import { useState, useEffect } from "react";
import Hero from "./Hero";
import ExperienceSection from "./ExperienceSection";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./StackSection";
import ContactSection from "./ContactSection";

export default function Portfolio() {
  const [active, setActive] = useState("about");

  // Automatically update the active navigation tab based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "experience", "projects", "stack", "contact"];
      const scrollPosition = window.scrollY + 180; // Offset for sticky navbar

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "about.md" },
    { id: "experience", label: "experience.log" },
    { id: "projects", label: "projects/" },
    { id: "stack", label: "stack.json" },
    { id: "contact", label: "contact.sh" },
  ];

  return (
    <div className="min-h-screen bg-[#05070C] text-[#F1F5F9] antialiased flex flex-col">
      {/* Sticky Full-Width Navbar */}
      <header className="sticky top-0 z-50 w-full bg-slate-950/75 backdrop-blur-md border-b border-slate-800/80 px-6 md:px-12 lg:px-16 py-4 flex items-center justify-between">
        {/* Left: Initials Logo */}
        <div className="flex items-center gap-3">
          <div className="font-mono text-sm font-extrabold bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent border border-slate-800 px-3 py-1 rounded-lg bg-slate-900/60 shadow-[0_0_12px_rgba(6,182,212,0.1)] hover:shadow-[0_0_16px_rgba(6,182,212,0.25)] hover:border-slate-650 transition-all duration-300 select-none">
            BJ
          </div>
          <span className="font-mono text-xs text-slate-500 hidden sm:inline">
            &middot; dev_profile.sh
          </span>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex gap-1 sm:gap-2">
          {navItems.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={(e) => {
                e.preventDefault();
                setActive(n.id);
                const element = document.getElementById(n.id);
                if (element) {
                  const offset = 120; // offset for sticky navbar
                  const bodyRect = document.body.getBoundingClientRect().top;
                  const elementRect = element.getBoundingClientRect().top;
                  const elementPosition = elementRect - bodyRect;
                  const offsetPosition = elementPosition - offset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                  });
                }
              }}
              className={`font-mono text-[10px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 rounded-lg border transition-all duration-300 ${
                active === n.id
                  ? "text-cyan-400 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
                  : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40 border-transparent"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Main Full-Width Content Container */}
      <main className="w-full flex-grow px-6 md:px-12 lg:px-16 py-8 space-y-16">
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
      </main>
    </div>
  );
}
