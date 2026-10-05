export const profile = {
  surname: 'Sai Sindu Sri',
  role: 'Frontend / Full-Stack Developer',
  location: 'Hyderabad, India',
  availability: 'Available for full-stack roles',
  summary: 'Full-stack developer building web applications — from the first screen to the data behind it.',
  github: 'https://github.com/saisindusrig',
  linkedin: 'https://www.linkedin.com/in/saisindusrig/',
  /** Left empty on purpose: the interface degrades gracefully when unset. */
  email: '',
  /** Add a hosted PDF URL to show a résumé link. */
  resumeUrl: '',
};

export const aboutLines = [
  'I’m someone who likes understanding how things work—not just on the surface, but from the inside out.',
  'That curiosity is what pulled me toward web development. I enjoy working across different parts of an application: designing the interface, understanding the logic behind the backend, working with data, and seeing how everything connects to create a complete product.',
  'Outside of development, I’m interested in HCI and the relationship between people and technology—how we interact with interfaces, how design influences behaviour, and how technology changes the way we think and work',
  'I also enjoy researching topics that interest me and writing about what I learn. You can read some of my articles [here].'
];

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  points?: string[];
}

/**
 * Only verified background facts are recorded here. No metrics, no invented
 * achievements, no decorative timeline.
 */
export const experience = [
  {
    company: 'Infosys',
    role: 'Digital Specialist Engineer',
    period: '2025 — Present',

    description:
      'Working on web application development as part of a client-facing engineering team.',

  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    items: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    items: [
      'Node.js',
      'Express',
      'MongoDB',
      'Firebase',
      'SQL',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Postman',
    ],
  },
];
