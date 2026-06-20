import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../data/content";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-16">
      <SectionHeader path="~/projects" />
      
      <div className="mt-2 text-xs text-slate-500 font-mono">
        // production deployments & software modules
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.name} {...p} />
        ))}
      </div>
    </section>
  );
}
