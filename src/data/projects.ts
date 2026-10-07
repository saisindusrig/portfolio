import bookd from '../assets/bookd.webp';
import sharespace from '../assets/threedsharespace.webp';
import warrant from '../assets/warrant.png';

export interface Project {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;

  image?: string;
  imageAlt?: string;

  annotation?: string;

  technologies: string[];
  features: string[];

  liveUrl: string;
  githubUrl: string;

  contribution: string;
}

export const projects: Project[] = [
  {
    slug: 'bookd',

    title: 'BOOKD',

    category: 'Full-stack · Book discovery',

    shortDescription:
      'Search across multiple book sources, save favourites and keep track of your own ratings and reviews.',

    image: bookd,

    imageAlt:
      'BOOKD home page showing book search and a row of book covers',

    annotation:
      'Combines book data from Open Library and Google Books.',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],

    features: [
      'Open Library and Google Books API integration',
      'Caching, deduplication and provider failure handling',
      'JWT authentication, favourites, ratings and reviews',
    ],

    liveUrl:
      'https://bookd-swart-three.vercel.app/',

    githubUrl:
      'https://github.com/saisindusrig/bookd',

    contribution:
      'I built the React frontend and Node.js/Express backend, including API result normalization, caching, authentication and MongoDB-backed user features.',
  },

  {
    slug: '3d-sharespace',

    title: '3D ShareSpace',

    category: 'Full-stack · 3D asset sharing',

    shortDescription:
      'A platform for uploading, browsing and downloading community-shared 3D models.',

    image: sharespace,

    imageAlt:
      '3D ShareSpace interface showing downloadable 3D models',

    annotation:
      'Reached 50+ organic users after deployment.',

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
    ],

    features: [
      '3D model and preview-image uploads',
      'Firebase Authentication, Firestore and Storage',
      'Firestore and Storage security rules',
    ],

    liveUrl:
      'https://dsharespace-v2.web.app/',

    githubUrl:
      'https://github.com/3Dsharespace/3d-model-sharing',

    contribution:
      'I built the React interface and Firebase-backed workflows for user accounts, model uploads, browsing and asset management.',
  },

  {
    slug: 'warrant',

    title: 'Warrant',

    category: 'Full-stack · Research workspace',

    shortDescription:
      'A collaborative research board for connecting claims with supporting and challenging evidence.',

    image: warrant,

    imageAlt:
      'Warrant research board showing relationships between claims and evidence',

    annotation:
      'Map claims, sources and evidence on an interactive canvas.',

    technologies: [
      'Next.js',
      'TypeScript',
      'React Flow',
      'MongoDB',
      'NextAuth',
      'Vitest',
      'Playwright',
    ],

    features: [
      'Interactive claim and evidence canvas',
      'Server-side role-based board permissions',
      'Unit and end-to-end testing for core workflows',
    ],

    liveUrl:
      'https://warrant-research-board.vercel.app/',

    githubUrl:
      'https://github.com/saisindusrig/warrant-research-board',

    contribution:
      'I built the research canvas, authentication and board permissions, MongoDB-backed data flows and tests for core collaboration workflows.',
  },
];