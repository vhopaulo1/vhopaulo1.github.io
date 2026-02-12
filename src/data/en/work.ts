import jobIconRaw from '../../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Lead Technical Artist",
    company: "Petit Fabrik",
    region: "Remote",
    description:
      "Leading technical art workflows for large-scale game projects, focusing on pipeline optimization, high-performance shader development, and establishing visual quality benchmarks while mentoring the art team.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Niagara",
      "Tool Development",
      "Python",
      "Maya",
      "Houdini",
      "Git"
    ],
  },
  {
    title: "Technical Artist Coordinator",
    company: "DX Gameworks",
    region: "São Paulo, Brazil",
    description:
      "Coordinated technical art production across multiple departments, managing cross-functional teams to streamline asset integration, resolve rendering bottlenecks, and automate pipeline tasks for improved delivery speed.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Project Management",
      "Notion",
      "Subversion",
      "Pipeline Automation"
    ],
  },
  {
    title: "Senior Technical Artist",
    company: "DX Gameworks",
    region: "São Paulo, Brazil",
    description:
      "Architected advanced technical art solutions, including custom toolsets for DCC software and engine-side optimizations to maintain target frame rates without compromising visual fidelity.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Notion",
      "Subversion",
    ],
  },
  {
    title: "Technical Artist",
    company: "Vulpe Arcana Studio",
    region: "São Paulo, Brazil",
    description:
      "Executed technical implementation of art assets, focusing on material creation, performance profiling, and bridging the gap between creative vision and technical engine constraints.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Niagara",
      "Asset Pipelines",
    ],
  },
  {
    title: "Game Developer",
    company: "Petit Fabrik",
    region: "São Paulo, Brazil",
    description:
      "Developed core gameplay mechanics and systems, utilizing a deep understanding of game logic and UI programming to deliver interactive and responsive user experiences.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Game Logic",
      "UI Programming",
      "Git"
    ],
  },
  {
    title: "Academic Coordinator",
    company: "Saga - School of Art, Game and Animation",
    region: "São Paulo, Brazil",
    description:
      "Directed academic operations and curriculum standards, overseeing instructor performance and ensuring the technical quality of the game design and animation programs.",
    technologies: [
      "Curriculum Development",
      "Team Leadership",
      "Educational Software",
      "Adobe Creative Cloud"
    ],
  },
  {
    title: "Instructor",
    company: "Saga - School of Art, Game and Animation",
    region: "São Paulo, Brazil",
    description:
      "Trained industry-ready professionals in game design fundamentals, 3D modeling, and engine workflows, focusing on building commercially viable projects and technical proficiency.",
    technologies: [
      "Game Design",
      "Level Design",
      "Maya",
      "Photoshop",
      "Unreal Engine",
      "ZBrush",
      "Substance Painter",
    ],
  },
];

export type WorkItem = (typeof work)[number];

