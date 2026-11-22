import { useEffect, useState } from 'react';
import { ProjectCard } from './components/ProjectCard';
import {
  experience,
  profile,
  skillGroups,
} from './data/portfolio';
import { projects } from './data/projects';
import portrait from './assets/sindu_pic.jpg';
const Icon = ({ name }: { name: 'github' | 'linkedin' | 'mail' | 'pin' }) => {
  const paths = {
    github: <><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  };
  return <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
};

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
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
    const onHashChange = () => {
      const section = window.location.hash.slice(1);
      if (['about', 'projects', 'experience', 'contact'].includes(section)) {
        setActiveSection(section);
      }
    };
    onHashChange();
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
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
        <main id="main">
          {/* =====================================================
              HERO
          ===================================================== */}
          <section className="profile-hero" aria-labelledby="intro-title">
            <div className="hero-banner">
              <p className="font-script">I make thoughtful websites</p>
            </div>
            <div className="profile-card">
              <img className="profile-avatar" src={portrait} alt="Sai Sindu Sri" />
              <div className="profile-details">
                <h1 id="intro-title">Sindu G</h1>
                <p className="profile-handle">@SAISINDUSRI <span><Icon name="pin" /> {profile.location}</span></p>
                <p className="profile-bio">I’m a web developer working with the MERN stack, building useful and considered digital experiences.</p>
              </div>
              <div className="hero-contact" aria-label="Contact links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
                <a href="#contact" aria-label="Contact form"><Icon name="mail" /></a>
              </div>
            </div>
          </section>

          <nav className="profile-tabs" aria-label="Profile navigation">
            {[['projects', 'Work'], ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact']].map(([id, label]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? 'is-active' : ''} aria-current={activeSection === id ? 'page' : undefined} onClick={() => setActiveSection(id)}>{label}</a>
            ))}
          </nav>

          {/* =====================================================
              PROJECTS
          ===================================================== */}
          <section
            className={`section profile-panel ${activeSection === 'projects' ? 'is-visible' : ''}`}
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
            className={`section about profile-panel ${activeSection === 'about' ? 'is-visible' : ''}`}
            id="about"
            aria-labelledby="about-title"
          >
            <div className="section-heading">
              <h2 id="about-title">
                A little about me
              </h2>
            </div>

            <div className="about-layout">
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
            className={`section background profile-panel ${activeSection === 'experience' ? 'is-visible' : ''}`}
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
  className={`section contact profile-panel ${activeSection === 'contact' ? 'is-visible' : ''}`}
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
