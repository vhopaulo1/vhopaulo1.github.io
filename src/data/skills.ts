export const skills = [
  {
    image: "src/assets/logos/UnrealEngine_logo.svg",
    title: "Unreal Engine Development",
    description: "Architecting game systems using C++ and Blueprints; focusing on modularity, performance, and high-quality gameplay code.",
  },
  {
    image: "src/assets/logos/VFX_logo.svg",
    title: "Shaders & VFX Systems",
    description: "Developing custom HLSL shaders and Niagara VFX; pushing visual fidelity while maintaining strict performance budgets.",
  },
  {
    image: "src/assets/logos/Automation_logo.svg",
    title: "Tooling & Automation",
    description: "Building production tools with Python and Qt for Autodesk Maya and Unreal Engine to streamline artist workflows and asset management.",
  },
];

export type Skill = (typeof skills)[number];

