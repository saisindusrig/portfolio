import type { Project } from '../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  const classNames = [
    'project',

    project.slug === '3d-sharespace'
      ? 'project--3d-sharespace'
      : '',

    project.slug === 'warrant'
      ? 'project--warrant'
      : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <article className={classNames}>
      {/* IMAGE */}
      {project.image && (
        <figure className="project-figure">
          <a
            className="project-image"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.title}`}
          >
            <img
              src={project.image}
              alt={project.imageAlt ?? ''}
              loading={index === 0 ? 'eager' : 'lazy'}
            />
          </a>

          {project.annotation && (
            <figcaption>
              {project.annotation}
            </figcaption>
          )}
        </figure>
      )}

      {/* INFORMATION */}
      <div className="project-content">
        <p className="project-category eyebrow">
          {String(index + 1).padStart(2, '0')} / {project.category}
        </p>

        <h3>{project.title}</h3>

        <p className="project-description">
          {project.shortDescription}
        </p>

        <p className="project-contribution">
          {project.contribution}
        </p>

        {/* FEATURES */}
        <ul className="project-features">
          {project.features.map(feature => (
            <li key={feature}>
              {feature}
            </li>
          ))}
        </ul>

        {/* TECH */}
        <p className="project-tech">
          {project.technologies.join(' · ')}
        </p>

        {/* ACTIONS */}
        <div className="project-links">
          <a
            className="button-link"
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            Live project
          </a>

          <a
            className="button-link button-link--secondary"
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            Source code
          </a>
        </div>

      </div>
    </article>
  );
}