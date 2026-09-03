import { skills } from "../data/skills";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss, 
  SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, 
  SiGit, SiFirebase, SiPython, SiBootstrap 
} from "react-icons/si";
import type { JSX } from "react/jsx-runtime";

const iconMap: Record<string, JSX.Element> = {
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "Python": <SiPython />,
  "HTML5": <SiHtml5 />,
  "CSS3": <SiCss />,
  "React.js": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind": <SiTailwindcss />,
  "Bootstrap": <SiBootstrap />,
  "Node.js": <SiNodedotjs />,
  "Express.js": <SiExpress />,
  "MongoDB": <SiMongodb />,
  "PostgreSQL": <SiPostgresql />,
  "Firebase": <SiFirebase />,
  "Git": <SiGit />,
};

const Skills = () => {
  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
        {skills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className="glass-badge flex items-center gap-2.5 text-sm sm:text-base px-5 py-2 hover:bg-white/10 transition-colors cursor-default"
          >
            {iconMap[skill] && (
              <span className="text-lg opacity-80">
                {iconMap[skill]}
              </span>
            )}
            <span>{skill}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;