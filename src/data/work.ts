import jobIconRaw from '../assets/icons/job-title-icon.svg?raw';
import companyIconRaw from '../assets/icons/company-icon.svg?raw';
import locationIconRaw from '../assets/icons/location-icon.svg?raw';
import { sanitizeToOutline } from '../lib/svg';

export const workIcons = {
  job: sanitizeToOutline(jobIconRaw, 15),
  company: sanitizeToOutline(companyIconRaw, 15),
  location: sanitizeToOutline(locationIconRaw, 15),
};

export const work = [
  {
    title: "Technical Artist",
    company: "Petit Fabrik",
    region: "Remote",
    description:
      "Full-time role contributing to game development projects as a Technical Artist.",
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
      "Led technical art coordination within a hybrid work environment.",
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
      "Senior-level technical art contributions and pipeline support.",
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
      "Part-time role focused on technical art implementation and support.",
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
      "Full-time game development, bridging art and programming requirements.",
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
      "Full-time academic management and coordination of school programs.",
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
      "Taught courses focused on the game design industry and trained qualified professionals to create profitable games.",
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

