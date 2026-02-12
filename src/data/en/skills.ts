export const skills = [
  {
    image: "/UnrealEngine_Logo.svg",
    title: "Unreal Engine Development",
    description: "Architecting game systems using C++ and Blueprints; focusing on modularity, performance, and high-quality gameplay code.",
  },
  {
    image: "/VFX_Logo.svg",
    title: "Shaders & VFX Systems",
    description: "Developing custom HLSL shaders and Niagara VFX; pushing visual fidelity while maintaining strict performance budgets.",
  },
  {
    image: "/Automation_Logo.svg",
    title: "Tooling & Automation",
    description: "Building production tools with Python and Qt for Autodesk Maya and Unreal Engine to streamline artist workflows and asset management.",
  },
];

export type Skill = (typeof skills)[number];

