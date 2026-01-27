export const studies = [
  {
    title: "B.S. in Digital Game Programming",
    institution: "Universidade Metodista de São Paulo",
    description:
      "Advanced technologist degree focused on game engine architecture and systems programming. Developed 'Shades' as a capstone project, a professional-grade game produced over six months to demonstrate mastery in core development cycles.",
    tags: [
      "Game Programming",
      "Software Architecture",
      "Game Design",
      "Project Management",
      "C#",
      "Unity"
    ],
  },
  {
    title: "Professional Game Development Program",
    institution: "SAGA - School of Art, Game and Animation",
    description:
      "In-depth technical certification covering end-to-end game production, focusing on asset integration, gameplay mechanics, and collaborative development pipelines within industry-standard engines.",
    tags: [
      "Game Dev",
      "Asset Integration",
      "Unreal Engine",
    ],
  },
  {
    title: "Professional Computer Graphics Program",
    institution: "SAGA - School of Art, Game and Animation",
    description:
      "Comprehensive training in digital content creation, including 3D modeling, high-fidelity texture mapping, animation, and technical art workflows for brands and multimedia short films.",
    tags: [
      "3D Modeling",
      "VFX",
      "Texturing",
      "Animation",
      "Maya",
      "Photoshop",
    ],
  },
  {
    title: "Technical Degree in Web Design",
    institution: "ITB - Instituto Tecnológico de Barueri",
    description:
      "Technical foundation in front-end technologies and digital design. Developed an On-Demand video platform specialized in animations as a final graduation project.",
    tags: [
      "Web Design",
      "UI/UX",
      "HTML/CSS",
      "On-Demand Systems",
      "Digital Media",
    ],
  },
];

export type StudyItem = (typeof studies)[number];

