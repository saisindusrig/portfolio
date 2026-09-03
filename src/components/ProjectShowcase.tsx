import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa";

interface ProjectShowcaseProps {
  project: Project;
  index: number;
}

const ProjectShowcase = ({ project, index }: ProjectShowcaseProps) => {
  const isEven = index % 2 === 0;

  return (
    <article
      className="sticky flex min-h-[75vh] w-full flex-col items-center justify-center gap-8 py-10 md:flex-row lg:gap-16 bg-black/40 backdrop-blur-3xl border-t border-white/5 shadow-2xl rounded-t-3xl my-4"
      style={{
        // Increased the base top spacing slightly so the first card's buttons clear the overlap longer
        top: `${96 + index * 40}px`,
        zIndex: index,
      }}
    >
      {/* CLICKABLE SCREENSHOT CONTAINER */}
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View live site for ${project.title}`}
        className={`group/img w-full md:w-1/2 overflow-hidden shrink-0 bg-transparent block cursor-pointer px-6 md:px-0 ${
          isEven ? "md:order-1" : "md:order-2"
        }`}
      >
        <img
          src={project.image}
          alt={`${project.title} interface`}
          className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover/img:scale-105 shadow-2xl rounded-xl"
        />
      </a>

      {/* EDITORIAL DETAILS */}
      <div
        className={`flex w-full md:w-1/2 flex-col justify-center px-6 md:px-0 ${
          isEven ? "md:order-2" : "md:order-1"
        }`}
      >
        <h3 className="font-heading text-3xl sm:text-4xl font-semibold italic tracking-tight text-white/90 mb-4">
          {project.title}
        </h3>

        <p className="text-base sm:text-lg leading-relaxed text-gray-400 mb-6">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {project.tech.map((tech) => (
            <span key={tech} className="glass-badge text-xs sm:text-sm px-3 py-1.5">
              {tech}
            </span>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} source code`}
            className="glass-button flex items-center justify-center min-h-[44px] min-w-[44px]"
          >
            <FaGithub size={20} />
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button flex items-center justify-center min-h-[44px] px-6 font-medium text-sm tracking-wide"
          >
            View Live ↗
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectShowcase;