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
      'Find a book, save it for later and keep track of your own ratings.',

    image: bookd,

    imageAlt:
      'BOOKD home page showing book search and a row of book covers',

    annotation:
      'Search, save and organise books in one place.',

    technologies: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
    ],

    features: [
      'Book search using external APIs',
      'JWT and bcrypt authentication',
      'Saved favourites and personal ratings',
    ],

    liveUrl:
      'https://bookd-swart-three.vercel.app/',

    githubUrl:
      'https://github.com/saisindusrig/bookd',

    contribution:
      'I built the React interface, Express API and MongoDB models for accounts, favourites and ratings.',
  },

  {
    slug: '3d-sharespace',

    title: '3D ShareSpace',

    category: 'Full-stack · Asset sharing',

    shortDescription:
      'Browse, upload and share free 3D assets.',

    image: sharespace,

    imageAlt:
      '3D ShareSpace interface showing downloadable 3D models',

    annotation:
      'Used by more than 50 real users.',

    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
    ],

    features: [
      'Asset browsing and downloads',
      'Model and preview-image uploads',
      'Authentication and asset management',
    ],

    liveUrl:
      'https://dsharespace-v2.web.app/',

    githubUrl:
      'https://github.com/3Dsharespace/3d-model-sharing',

    contribution:
      'I worked on the React interface and Firebase-backed flows for browsing, uploading and managing assets.',
  },

  {
    slug: 'warrant',

    title: 'Warrant',

    category: 'Full-stack · Research tool',

    shortDescription:
      'A research board that connects claims with the evidence behind them.',

    image: warrant,

    imageAlt:
      'Warrant research board showing relationships between claims and evidence',

    annotation:
      'Connect evidence as support, challenge or context.',

    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'React Flow',
      'MongoDB',
      'NextAuth',
    ],

    features: [
      'Claims, sources and linked evidence',
      'Saved canvas positions and comments',
      'Owner, editor, commenter and viewer roles',
    ],

    liveUrl:
      'https://warrant-research-board.vercel.app/',

    githubUrl:
      'https://github.com/saisindusrig/warrant-research-board',

    contribution:
      'I built the research canvas, board permissions and server actions that save cards, evidence links and discussion.',
  },
];