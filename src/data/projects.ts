import bookd from "../assets/bookd.png";
import threedsharespace from "../assets/threedsharespace.png";
export interface Project {
  title: string;
  image:string;
  description: string;
  tech: string[];
  github?: string;
  live?: string;
}

export const projects: Project[] = [
    {
    title: "3D ShareSpace",
    image: threedsharespace,
    description:
      "3D ShareSpace is a live 3D model sharing website for browsing, uploading, downloading, and managing free 3D assets.",
    tech: ["React", "Vite", "Tailwind CSS", "Firebase"],
    github: "https://github.com/3Dsharespace/3d-model-sharing",
    live: "https://dsharespace-v2.web.app/",
  },
  {
    
    title: "BOOKD",
    image: bookd,
    description:
      "A full-stack book discovery platform where users can explore books, save favorites, and rate their reads.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    github: "https://github.com/saisindusrig/bookd",
    live: "https://bookd-swart-three.vercel.app/",
  }
  
];