import { useState } from "react";
import Hero from "./Hero";
import ProjectsSection from "./ProjectsSection";
import StackSection from "./SectionHeader";
import ContactSection from "./ContactSection";

export default function Portfolio() {
  const [active, setActive] = useState("about");

  return (
    <div className="min-h-screen bg-[#0B0E14] text-[#E8E6DF] antialiased">
    <div className="w-full px-6 md:px-10 py-6">
        <Hero active={active} setActive={setActive} />
        <ProjectsSection />
        <StackSection />
        <ContactSection />
    </div>
    </div>
  );
}
