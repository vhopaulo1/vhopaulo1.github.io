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
    region: "São Paulo, Brasil",
    description:
      "Liderando fluxos de trabalho de technical art para projetos de jogos de grande escala, focando na otimização de pipeline, desenvolvimento de shaders de alta performance e estabelecimento de benchmarks de qualidade visual enquanto mentoro a equipe de arte.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Niagara",
      "Desenvolvimento de Ferramentas",
      "Python",
      "Maya",
      "Houdini",
      "Git"
    ],
  },
  {
    title: "Coordenador de Technical Art",
    company: "DX Gameworks",
    region: "São Paulo, Brasil",
    description:
      "Coordenei a produção de technical art em múltiplos departamentos, gerenciando equipes multifuncionais para otimizar a integração de ativos, resolver gargalos de renderização e automatizar tarefas de pipeline para maior velocidade de entrega.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Gerenciamento de Projetos",
      "Notion",
      "Subversion",
      "Automação de Pipeline"
    ],
  },
  {
    title: "Senior Technical Artist",
    company: "DX Gameworks",
    region: "São Paulo, Brasil",
    description:
      "Arquitetei soluções avançadas de technical art, incluindo conjuntos de ferramentas personalizados para software DCC e otimizações no motor para manter taxas de quadros alvo sem comprometer a fidelidade visual.",
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
    region: "São Paulo, Brasil",
    description:
      "Executei a implementação técnica de ativos de arte, focando na criação de materiais, análise de desempenho e preenchendo a lacuna entre a visão criativa e as restrições técnicas do motor.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Niagara",
      "Pipelines de Ativos",
    ],
  },
  {
    title: "Desenvolvedor de Jogos",
    company: "Petit Fabrik",
    region: "São Paulo, Brasil",
    description:
      "Desenvolvi mecânicas e sistemas centrais de gameplay, utilizando um profundo entendimento de lógica de jogos e programação de UI para entregar experiências de usuário interativas e responsivas.",
    technologies: [
      "Unreal Engine",
      "Blueprints",
      "C++",
      "Shaders",
      "Lógica de Jogos",
      "Programação de UI",
      "Git"
    ],
  },
  {
    title: "Coordenador Acadêmico",
    company: "Saga - School of Art, Game and Animation",
    region: "São Paulo, Brasil",
    description:
      "Dirigi operações acadêmicas e padrões curriculares, supervisionando o desempenho dos instrutores e garantindo a qualidade técnica dos programas de game design e animação.",
    technologies: [
      "Desenvolvimento de Currículo",
      "Liderança de Equipe",
      "Software Educacional",
      "Adobe Creative Cloud"
    ],
  },
  {
    title: "Instrutor",
    company: "Saga - School of Art, Game and Animation",
    region: "São Paulo, Brasil",
    description:
      "Treinei profissionais prontos para a indústria em fundamentos de game design, modelagem 3D e fluxos de trabalho de motores, focando na construção de projetos comercialmente viáveis e proficiência técnica.",
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
