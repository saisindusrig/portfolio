import { useRef } from "react";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import Skills from "../components/Skills";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Contact from "../components/Contact";
const Home = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: "left" | "right") => {
    if (!projectsRef.current) return;

    const firstCard = projectsRef.current.firstElementChild as HTMLElement;

    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth;
    const gap = 16;

    projectsRef.current.scrollBy({
      left: direction === "right"
        ? cardWidth + gap
        : -(cardWidth + gap),
      behavior: "smooth",
    });
  };
return (
  <main className="mx-auto max-w-5xl">
    <Navbar />

    <div className="mx-auto w-auto max-w-5xl">
      
      {/* HERO */}
      <section className="py-10 sm:py-24">
        <p className="font-heading text-lg">
          hey there, I'm Sindu
        </p>

        <p className="mt-8 text-base leading-7">
          I'm a full-stack developer with 1+ year of professional
          experience building web applications. I enjoy working across
          the stack, from designing responsive React interfaces to
          building APIs, authentication systems and database-driven
          features.
        </p>
      </section>

      {/* PROJECTS */}
      <section
        className="scroll-mt-24 py-10"
        id="projects"
      >
        <h2 className="pb-4 font-heading text-2xl font-semibold">
          projects
        </h2>

        <div className="relative">
          <button
            onClick={() => scrollProjects("left")}
            className="
              absolute left-2 top-1/2 z-10
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full border border-white/15
              bg-black/20 backdrop-blur-md
              transition-all duration-200
              hover:bg-black/30
              sm:hidden
            "
            aria-label="Previous project"
          >
            <ChevronLeft size={22} strokeWidth={1.5} />
          </button>

          <div
            ref={projectsRef}
            className="
              flex gap-4
              overflow-x-auto
              scroll-smooth
              snap-x snap-mandatory
              scrollbar-hide
            "
          >
            {projects.map((project) => (
              <div
                key={project.title}
                className="
                  w-[300px]
                  shrink-0
                  snap-start
                  sm:w-[340px]
                "
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollProjects("right")}
            className="
              absolute right-2 top-1/2 z-10
              flex h-11 w-11 -translate-y-1/2
              items-center justify-center
              rounded-full border border-white/15
              bg-black/20 backdrop-blur-md
              transition-all duration-200
              hover:bg-black/30
              sm:hidden
            "
            aria-label="Next project"
          >
            <ChevronRight size={22} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* SKILLS */}
      <section
        className="py-16"
        id="skills"
      >
        <h2 className="pb-4 font-heading text-2xl font-semibold">
          skills
        </h2>

        <Skills />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="scroll-mt-24 py-16 pb-32"
      >
        <Contact />
      </section>

    </div>
  </main>
);
};

export default Home;