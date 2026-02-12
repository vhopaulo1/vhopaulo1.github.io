export const studies = [
  {
    title: "Tecnólogo em Programação de Jogos Digitais",
    institution: "Universidade Metodista de São Paulo",
    description:
      "Grau de tecnólogo avançado focado em arquitetura de motores de jogos e programação de sistemas. Desenvolvi 'Shades' como projeto de conclusão, um jogo de nível profissional produzido em seis meses para demonstrar domínio nos ciclos de desenvolvimento.",
    tags: [
      "Programação de Jogos",
      "Arquitetura de Software",
      "Game Design",
      "Gerenciamento de Projetos",
      "C#",
      "Unity"
    ],
  },
  {
    title: "Programa Profissional de Desenvolvimento de Jogos",
    institution: "SAGA - School of Art, Game and Animation",
    description:
      "Certificação técnica aprofundada cobrindo produção de jogos de ponta a ponta, focando em integração de ativos, mecânicas de gameplay e pipelines de desenvolvimento colaborativo em motores padrão da indústria.",
    tags: [
      "Game Dev",
      "Integração de Ativos",
      "Unreal Engine",
    ],
  },
  {
    title: "Programa Profissional de Computação Gráfica",
    institution: "SAGA - School of Art, Game and Animation",
    description:
      "Treinamento abrangente em criação de conteúdo digital, incluindo modelagem 3D, mapeamento de textura de alta fidelidade, animação e fluxos de trabalho de technical art para marcas e curtas multimídia.",
    tags: [
      "Modelagem 3D",
      "VFX",
      "Texturização",
      "Animação",
      "Maya",
      "Photoshop",
    ],
  },
  {
    title: "Técnico em Web Design",
    institution: "ITB - Instituto Tecnológico de Barueri",
    description:
      "Fundação técnica em tecnologias front-end e design digital. Desenvolvi uma plataforma de vídeo On-Demand especializada em animações como projeto final de graduação.",
    tags: [
      "Web Design",
      "UI/UX",
      "HTML/CSS",
      "Sistemas On-Demand",
      "Mídia Digital",
    ],
  },
];

export type StudyItem = (typeof studies)[number];
