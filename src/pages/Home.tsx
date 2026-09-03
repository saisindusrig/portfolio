import Navbar from "../components/Navbar";
import ProjectShowcase from "../components/ProjectShowcase";
import { projects } from "../data/projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";


const Home = () => {
  return (
    <main className="min-h-screen w-full pb-20">
      <Navbar />


      <section
        id="about"
        className="mx-auto flex max-w-3xl min-h-[70vh] scroll-mt-32 flex-col items-center justify-center px-6 sm:px-8 py-24 sm:py-32 text-center"
      >
        <div className="pt-18 pb-3">
          <span className="text-sm font-medium uppercase tracking-widest text-gray-400">
            SAI SINDU SRI GOPIEREDDY
          </span>
          <h1 className="font-body text-6xl sm:text-7xl font-bold py-6 sm:py-10 tracking-tight text-white">
            I turn ideas into <span className="italic bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">digital experiences</span>.
          </h1>
          <p className="text-xl sm:text-lg sm:leading-relaxed text-gray-400">
            I'm a <span className="font-bold">full-stack developer</span> with 1+ year of professional experience building web applications. I enjoy working across the stack, from designing responsive React interfaces to building APIs, authentication systems and database-driven features.
          </p>
        </div>
      </section>


      <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 sm:px-12 lg:px-16">
        
        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-32">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Projects
            </h2>
            <p className="mt-2 text-base text-gray-500">
              A selection of things I've built.
            </p>
          </div>
          

          <div className="relative flex w-full flex-col">
            {projects.map((project, index) => (
              <ProjectShowcase 
                key={project.title} 
                index={index} 
                project={project} 
              />
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-32">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Skills
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Technologies I work with.
            </p>
          </div>
          <Skills />
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-32">
          <div className="mb-10">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-white">
              Contact
            </h2>
            <p className="mt-2 text-base text-gray-500">
              Have a project in mind? Let's talk.
            </p>
          </div>
          <Contact />
        </section>
      </div>
    </main>
   
  );
};

export default Home;