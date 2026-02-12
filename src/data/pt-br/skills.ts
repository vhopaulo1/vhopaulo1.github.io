export const skills = [
  {
    image: "/UnrealEngine_Logo.svg",
    title: "Desenvolvimento Unreal Engine",
    description: "Arquitetura de sistemas de jogos usando C++ e Blueprints; foco em modularidade, desempenho e código de gameplay de alta qualidade.",
  },
  {
    image: "/VFX_Logo.svg",
    title: "Shaders & Sistemas VFX",
    description: "Desenvolvimento de shaders HLSL personalizados e VFX no Niagara; elevando a fidelidade visual mantendo orçamentos de performance rigorosos.",
  },
  {
    image: "/Automation_Logo.svg",
    title: "Ferramentas & Automação",
    description: "Construção de ferramentas de produção com Python e Qt para Autodesk Maya e Unreal Engine para otimizar fluxos de trabalho artísticos e gerenciamento de ativos.",
  },
];

export type Skill = (typeof skills)[number];
