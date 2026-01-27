export const skills = [
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z"/></svg>`,
    title: "Technical Art & Pipeline Design",
    description: "Designing scalable asset pipelines and automation tools; bridging the gap between art and code with documented technical standards.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.5c0 .38-.21.71-.53.88l-7.97 4.43c-.16.09-.33.14-.5.14s-.34-.05-.5-.14l-7.97-4.43c-.32-.17-.53-.5-.53-.88v-9c0-.38.21-.71.53-.88l7.97-4.43c.16-.09.33-.14.5-.14s.34.05.5.14l7.97 4.43c.32.17.53.5.53.88v9z"/></svg>`,
    title: "Unreal Engine Development",
    description: "Architecting game systems using C++ and Blueprints; focusing on modularity, performance, and high-quality gameplay code.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3v18M3 12h18M12 3l4.5 4.5M12 3L7.5 7.5M12 21l4.5-4.5M12 21l-4.5-4.5M3 12l4.5 4.5M3 12L7.5 7.5M21 12l-4.5 4.5M21 12l-4.5-4.5"/></svg>`,
    title: "Shaders & VFX Systems",
    description: "Developing custom HLSL shaders and Niagara VFX; pushing visual fidelity while maintaining strict performance budgets.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/></svg>`,
    title: "Rendering & Optimization",
    description: "Implementing rendering best practices, profiling performance (CPU/GPU), and optimizing draw calls, memory, and LOD systems.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>`,
    title: "Tooling & Automation",
    description: "Building production tools with Python and Qt for Autodesk Maya and Unreal Engine to streamline artist workflows and asset management.",
  },
  {
    icon: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>`,
    title: "R&D and Prototyping",
    description: "Rapidly iterating on new features and technologies; researching real-time rendering techniques to stay ahead of industry standards.",
  },
];

export type Skill = (typeof skills)[number];

