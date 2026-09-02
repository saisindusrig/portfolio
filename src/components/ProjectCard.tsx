import type { Project } from "../data/projects";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <article
      className="
        glass-card 
      "
    >
      {/* PROJECT IMAGE */}
      <div
        className="
          flex
          h-[175px]
          w-full
          items-center
          justify-center
          overflow-hidden
          bg-[#eeeeee]
          sm:h-[190px]
        "
      >
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="
            block
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-[1.02]
          "
        />
      </div>

      {/* CARD CONTENT */}
      <div className="h-[150px] p-4">
        {/* TITLE + LINKS */}
        <div className="flex items-center justify-between gap-3">
          <h3
            className="
              min-w-0
              truncate
              font-heading
              text-base
              font-medium
            "
          >
            {project.title}
          </h3>

          <div className="flex shrink-0 items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} GitHub`}
              className="
                opacity-50
                transition-opacity
                hover:opacity-100
              "
            >
              <FaGithub size={19} />
            </a>

            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-xs
                opacity-50
                transition-opacity
                hover:opacity-100
              "
            >
              View ↗
            </a>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            mt-1
            line-clamp-2
            text-xs
            leading-4
            opacity-50
          "
        >
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                bg-black/[0.06]
                px-2
                py-0.5
                text-[9px]
                opacity-60
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;