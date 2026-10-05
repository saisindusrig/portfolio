import { useEffect, useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import {
  aboutLines,
  experience,
  profile,
  skillGroups,
} from './data/portfolio';
import { projects } from './data/projects';
import portrait from './assets/sindu_pic.jpg';

export default function App() {
  const [activeSection, setActiveSection] = useState('');
  const [formStatus, setFormStatus] = useState<
  'idle' | 'sending' | 'success' | 'error'
>('idle');

const handleContactSubmit = async (
  event: React.FormEvent<HTMLFormElement>
) => {
  event.preventDefault();

  const form = event.currentTarget;

  setFormStatus('sending');

  try {
    const response = await fetch(
      'https://formspree.io/f/xnpqvrwq',
      {
        method: 'POST',
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error('Form submission failed');
    }

    setFormStatus('success');
    form.reset();
  } catch {
    setFormStatus('error');
  }
};

  useEffect(() => {
    const sections = ['projects', 'about', 'experience', 'contact']
      .map(id => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null);
    const header = document.querySelector('.site-header');
    const main = document.getElementById('main');

    const updateActiveSection = () => {
      const root = document.documentElement;
      const maxScroll = root.scrollHeight - window.innerHeight;

      // Short final sections cannot always reach the header before scrolling stops.
      if (maxScroll > 0 && window.scrollY >= maxScroll - 2) {
        setActiveSection(sections.at(-1)?.id ?? '');
        return;
      }

      const headerHeight = header?.getBoundingClientRect().height ?? 0;
      const scrollPadding = Number.parseFloat(getComputedStyle(root).scrollPaddingTop) || 0;
      const readingLine = Math.max(headerHeight + 16, scrollPadding) + 1;
      const current = sections.find(section => {
        const { top, bottom } = section.getBoundingClientRect();
        return top <= readingLine && bottom > readingLine;
      });
      setActiveSection(current?.id ?? '');
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

   
    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateActiveSection)
      : undefined;
    if (header) observer?.observe(header);
    if (main) observer?.observe(main);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
      observer?.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="page" id="top">
        {/* =====================================================
            HEADER
        ===================================================== */}
        <header className="site-header">
          <a className="wordmark" href="#top">
            Sai Sindu Sri
            <span aria-hidden="true">.</span>
          </a>

        <nav aria-label="Main navigation">
  <a
    href="#projects"
    aria-current={
      activeSection === 'projects' ? 'location' : undefined
    }
  >
    Work
  </a>

  <a
    href="#about"
    aria-current={
      activeSection === 'about' ? 'location' : undefined
    }
  >
    About
  </a>

  <a
    href="#experience"
    aria-current={
      activeSection === 'experience' ? 'location' : undefined
    }
  >
    Experience
  </a>

  <a
    href="#contact"
    aria-current={
      activeSection === 'contact' ? 'location' : undefined
    }
  >
    Contact
  </a>
</nav>
        </header>

        <main id="main">
          {/* =====================================================
              HERO
          ===================================================== */}
          <section
            className="intro"
            aria-labelledby="intro-title"
          >
            <h1 id="intro-title">
              Hi, I’m
              <br />
              <em>Sai Sindu Sri.</em>
            </h1>

            <div className="intro-bottom">
              <div className="intro-copy">
                <p>{profile.summary}</p>

                <p className="intro-aside">
                  I like understanding how the whole product
                  works.
                </p>
              </div>

              <a
                className="button-link"
                href="#projects"
              >
                View my work
              </a>
            </div>
          </section>

          {/* =====================================================
              PROJECTS
          ===================================================== */}
          <section
            className="section"
            id="projects"
            aria-labelledby="projects-title"
          >
            <div className="section-heading">
              <h2 id="projects-title">
                Selected work
              </h2>
            </div>

            <div className="projects">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
            </div>
          </section>

          {/* =====================================================
              ABOUT
          ===================================================== */}
          <section
            className="section about"
            id="about"
            aria-labelledby="about-title"
          >
            <div className="section-heading">
              <h2 id="about-title">
                A little about me
              </h2>
            </div>

            <div className="about-layout">
              <figure className="portrait">
                <img
                  src={portrait}
                  alt="Sai Sindu Sri"
                  loading="lazy"
                  width="400"
                  height="400"
                />

                <figcaption>
                  Based in Hyderabad, India.
                </figcaption>
              </figure>

              <div className="about-copy">
                <p>I’m someone who likes understanding how things work. not just on the surface, but from the inside out.</p>
<p>  That curiosity is what pulled me toward web development. I enjoy working across different parts of an application: designing the interface, understanding the logic behind the backend, working with data, and seeing how everything connects to create a complete product.
</p>  
  <p>I also enjoy researching topics that interest me and writing about what I learn. You can read some of my articles  <a
      href= "https://medium.com/@saisindusrig"
      target="_blank"
      rel="noreferrer"
      className="about-inline-link"
    >
      here
    </a>.
</p>
                {profile.resumeUrl && (
                  <a
                    className="button-link"
                    href={profile.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View résumé
                  </a>
                )}
              </div>
            </div>
          </section>

          {/* =====================================================
              EXPERIENCE & SKILLS
          ===================================================== */}
          <section
            className="section background"
            id="experience"
            aria-labelledby="experience-title"
          >
            <div className="section-heading">
              <h2 id="experience-title">
                Experience & skills
              </h2>
            </div>

            <div className="background-layout">
              {/* EXPERIENCE */}
              <div className="experience-list">
                <p className="eyebrow background-label">
                  Professional experience
                </p>

                {experience.map(entry => (
                  <article
                    className="experience-entry"
                    key={`${entry.company}-${entry.role}`}
                  >
                    <div className="experience-top">
                      <p className="experience-company">
                        {entry.company}
                      </p>

                      <p className="experience-period">
                        {entry.period}
                      </p>
                    </div>

                    <h3>
                      {entry.role}
                    </h3>

                    <p className="experience-description">
                      {entry.description}
                    </p>

                    {'points' in entry &&
                      Array.isArray(entry.points) &&
                      entry.points.length > 0 && (
                        <ul className="experience-points">
                          {entry.points.map(point => (
                            <li key={point}>
                              {point}
                            </li>
                          ))}
                        </ul>
                      )}
                  </article>
                ))}
              </div>

              {/* SKILLS */}
              <div
                className="skills"
                id="skills"
              >
                <p className="eyebrow background-label">
                  Tools I work with
                </p>

                <div className="skill-groups">
                  {skillGroups.map(group => (
                    <div
                      className="skill-group"
                      key={group.title}
                    >
                      <h3>
                        {group.title}
                      </h3>

                      <ul>
                        {group.items.map(item => (
                          <li key={item}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =====================================================
              CONTACT
          ===================================================== */}
          {/* =====================================================
    CONTACT
===================================================== */}
<section
  className="section contact"
  id="contact"
  aria-labelledby="contact-title"
>
  <div className="contact-layout">
    {/* LEFT */}
    <div className="contact-intro">
      <p className="eyebrow">
        Get in touch
      </p>

      <h2 id="contact-title">
        Have a product
        <br />
        <em>I could help build?</em>
      </h2>

      <p className="contact-description">
       Want to talk about any oppurtunity?
       Tell me about the team, the role, or what you’re building.
      </p>

      <div className="contact-links">
        {profile.email && (
          <a
            className="button-link button-link--small"
            href={`mailto:${profile.email}`}
          >
            Email
          </a>
        )}

        <a
          className="button-link button-link--small"
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a
          className="button-link button-link--small"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

    {/* RIGHT */}
    <form
      className="contact-form"
      onSubmit={handleContactSubmit}
    >
      <div className="form-field">
        <label htmlFor="contact-name">
          Name
        </label>

        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">
          Email
        </label>

        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="contact-message">
          Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={6}
          required
        />
      </div>

      <button
        className="button-link contact-submit"
        type="submit"
        disabled={formStatus === 'sending'}
      >
        {formStatus === 'sending'
          ? 'Sending...'
          : 'Send message'}
      </button>

      <div
        className="contact-status"
        aria-live="polite"
      >
        {formStatus === 'success' && (
          <p className="contact-success">
            Message sent. I’ll get back to you soon.
          </p>
        )}

        {formStatus === 'error' && (
          <p className="contact-error">
            Something went wrong. Please try again or email me directly.
          </p>
        )}
      </div>
    </form>
  </div>
</section>
        </main>

        {/* =====================================================
            FOOTER
        ===================================================== */}
        <footer className="site-footer">
          <p>
            © {new Date().getFullYear()}{' '}
            {profile.surname}
          </p>

          <a
            className="footer-top-link"
            href="#top"
          >
            Back to top
          </a>
        </footer>
      </div>
    </>
  );
}
