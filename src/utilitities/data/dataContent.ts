import {
  backendContent,
  frontendContent,
  headerContent,
  infraContent,
  menuContent,
  othersContent,
  portfolioContent,
  prototypeContent,
} from "../datatypes";

export const headerDataPT: headerContent = {
  title: "Engenherio de Software",
  about:
    "25 anos, natural de boa vista, RR. Estou sempre em busca  de inovações e ideas que possam melhorar a vida e cotidiano da pessoas. Isso me inspira e me motiva a idealizar e desenvolver sistemas. Sigo isso como meta de vida",
  language: "Língua",
};

export const headerDataEN: headerContent = {
  title: "Software Engineer",
  about:
    "I'm 25 years old, born in Boa Vista - Roraima (Brazil). I have a lot of interest in innovation and that's what motivates me every day to try something new. In the midst of this, I identified myself a lot with the idealization and development of systems, which I decided to follow as a life goal",
  language: "Language",
};

export const menuDataPT: menuContent = {
  title: "Conhecimento Tecnológico",
  prototype: "Prototipação",
  frontend: "Front-end",
  backend: "Back-end",
  other: "Outros",
};

export const menuDataEN: menuContent = {
  title: "Technological Knowledge",
  prototype: "Prototyping",
  frontend: "Front-end",
  backend: "Back-end",
  other: "Others",
};

export const prototypeDataPT: prototypeContent = {
  title: "Prototipação",
  firstParagraph:
    "Essas ferramentas apresentadas são as principais que eu domino e utilizo para realizar prototipagem de layout dos sistemas para os dispositivos mobile e desktop",
  secondParagraph:
    "Além dessas já realizei alguns trabalhos com ferramentas como Corel Draw e Adobe Ilustrator",
};

export const prototypeDataEN: prototypeContent = {
  title: "Prototyping",
  firstParagraph:
    "These presented tools are the main ones that I use to perform layout prototyping of systems for mobile and desktop",
  secondParagraph:
    "In addition to these, I have already done some work with tools such as Corel Draw and Adobe Illustrator",
};

export const frontendDataPT: frontendContent = {
  title: "Front-end",
  firstParagraph:
    "Os frameworks acima são usados em projetos que visão aplicações web e mobile, a combinação delas permitem a criação de interfaces ponderosas com boa performance e qualidade de código",
  secondParagraph:
    "As bibliotecas abaixo servem como complemento às tecnologias apresentadas e são amplamente utilizadas em praticamente todos os projetos",
};

export const frontendDataEN: frontendContent = {
  title: "Front-end",
  firstParagraph:
    "The above frameworks are used in projects that view web and mobile applications, their combination allows the creation of powerful interfaces with good performance and code quality",
  secondParagraph:
    "The libraries below serve as a complement to the technologies presented and are widely used in virtually all projects",
};

export const backendDataPT: backendContent = {
  title: "Back-end",
  firstSubtitle: "Criação de APIs com",
  secondSubtitle: "Linguagens de Programação",
};

export const backendDataEN: backendContent = {
  title: "Back-end",
  firstSubtitle: "APIs creation with",
  secondSubtitle: "Programming languages",
};

export const othersDataPT: othersContent = {
  title: "Outros",
  firstSubtitle: "Internet das Coisas",
  device: {
    txt1: "Conectado",
    txt2: "a",
  },
};

export const othersDataEN: othersContent = {
  title: "Others",
  firstSubtitle: "Internet of Things",
  device: {
    txt1: "Connected",
    txt2: "to",
  },
};

// TODO: only the first project is real – replace the others with your own
// projects (add `link` / `repo` to show the buttons on each card).
export const portfolioDataPT: portfolioContent = {
  tag: "// 01 — Portfólio",
  title: "Projetos",
  subtitle:
    "Uma seleção de sistemas que idealizei e desenvolvi, do protótipo ao deploy",
  all: "Todos",
  categories: {
    web: "Web",
    "full-stack": "Full-Stack",
  },
  stats: {
    projects: "Projetos",
    technologies: "Tecnologias",
    areas: "Áreas",
  },
  viewProject: "Ver projeto",
  viewCode: "Código",
  projects: [
    {
      title: "IPM Educação",
      description:
        "Um microsserviço que integra ferramentas baseadas em IA para analisar o comportamento do usuário e gerar painéis informativos, com o intuito de ajudar estudantes a melhorar os estudos.",
      category: "full-stack",
      stack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Django REST Framework",
        "Framer Motion",
        "Tailwind CSS",
        "Microsserviço",
        "Docker",
        "AWS",
        "Nginx",
        "PostgreSQL",
        "OpenTelemetry",
        "Grafana",
        "Websocket",
        "Figma",
      ],
      year: "2025",
      status: "Online",
    },
    {
      title: "WEG",
      description:
        "Desenvolveu um sistema web embarcado para configurar e monitorar inversores de frequência de poços de petróleo diretamente no hardware do dispositivo.",
      category: "full-stack",
      stack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Microsserviço",
        "Flask",
        "Nginx",
        "Websocket",
        "Redis",
        "Inkscape",
        "Figma",
      ],
      year: "2023",
      status: "---",
    },
    {
      title: "Grupo GMA",
      description:
        "Desenvolvi o frontend de uma empresa de intermediação de negócios",
      category: "web",
      stack: [
        "React.js",
        "Typescript",
        "Tailwind CSS",
        "AWS Amplify",
        "AWS s3",
        "CloudFront",
        "Route 53",
        "Photoshop",
      ],
      year: "2026",
      status: "---",
    },
    {
      title: "NP Advocacia",
      description:
        "Desenvolvi uma plataforma de site profissional para um escritório de advocacia, com o objetivo de apresentar seus serviços jurídicos e fortalecer sua presença online.",
      category: "full-stack",
      stack: [
        "Next.js",
        "SSR",
        "React.js",
        "TypeScript",
        "Django REST Framework",
        "Framer Motion",
        "Tailwind CSS",
        "Docker",
        "PostgreSQL",
        "AWS",
        "Nginx",
        "OpenTelemetry",
        "Figma",
        "Photoshop",
      ],
      year: "2023",
      status: "---",
    },
    {
      title: "LFTV",
      description:
        "Reformulei e reconstrui o site de uma emissora de televisão para aprimorar a experiência do usuário, modernizar sua interface e melhorar a acessibilidade ao conteúdo.",
      category: "full-stack",
      stack: [
        "Next.js",
        "SSR",
        "React.js",
        "TypeScript",
        "Framer Motion",
        "Bootstrap",
        "MySQL",
        "Apache",
        "WordPress",
        "Vercel",
        "Figma",
        "Photoshop",
      ],
      year: "2022",
      status: "---",
    },
    {
      title: "Matapee",
      description:
        "Desenvolvi um website para uma marca de design indígena, destacando sua identidade cultural, seu trabalho criativo e seus produtos de design exclusivos.",
      category: "web",
      stack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
        "Figma",
        "Inkscape",
        "Photoshop",
      ],
      year: "2025",
      status: "---",
    },
    {
      title: "Embaixada da Guiana",
      description:
        "Desenvolvi um site que apresenta serviços consulares, oferecendo acesso claro a informações essenciais, recursos e orientações para os cidadãos.",
      category: "web",
      stack: ["React.js", "Bootstrap", "Figma", "Photoshop", "Apache"],
      year: "2020",
      status: "---",
    },
  ],
};

export const portfolioDataEN: portfolioContent = {
  tag: "// 01 — Portfolio",
  title: "Projects",
  subtitle:
    "A selection of systems I designed and built, from prototype to deploy",
  all: "All",
  categories: {
    web: "Web",
    "full-stack": "Full-Stack",
    // backend: "Back-end",
    // iot: "IoT",
  },
  stats: {
    projects: "Projects",
    technologies: "Technologies",
    areas: "Areas",
  },
  viewProject: "View project",
  viewCode: "Code",
  projects: [
    {
      title: "IPM Educação",
      description:
        "A microservice that integrates AI-powered tools to analyze user behavior and generate insightful, data-driven dashboards for better studies.",
      category: "full-stack",
      stack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Django REST Framework",
        "Framer Motion",
        "Tailwind CSS",
        "Microservice",
        "Docker",
        "AWS",
        "Nginx",
        "PostgreSQL",
        "OpenTelemetry",
        "Vercel",
        "Grafana",
        "Websocket",
        "Figma",
      ],
      year: "2025",
      status: "Live",
    },
    {
      title: "WEG",
      description:
        "Developed an embedded web system to configure and monitor oil-well variable-frequency drives directly on the device hardware.",
      category: "full-stack",
      stack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Microservice",
        "Flask",
        "Nginx",
        "Websocket",
        "Redis",
        "Inkscape",
        "Figma",
      ],
      year: "2023",
      status: "---",
    },
    {
      title: "Grupo GMA",
      description: "Built a business-intermediation firm's frontend",
      category: "web",
      stack: [
        "React.js",
        "Typescript",
        "Tailwind CSS",
        "AWS Amplify",
        "AWS s3",
        "CloudFront",
        "Route 53",
        "Photoshop",
      ],
      year: "2026",
      status: "---",
    },
    {
      title: "NP Advocacia",
      description:
        "Developed a professional website platform for a law firm to showcase its legal services and strengthen its online presence.",
      category: "full-stack",
      stack: [
        "Next.js",
        "SSR",
        "React.js",
        "TypeScript",
        "Django REST Framework",
        "Framer Motion",
        "Tailwind CSS",
        "Docker",
        "PostgreSQL",
        "AWS",
        "Nginx",
        "OpenTelemetry",
        "Figma",
        "Photoshop",
      ],
      year: "2023",
      status: "---",
    },
    {
      title: "LFTV",
      description:
        "Redesigned and rebuilt a television station’s website to enhance user experience, modernize its interface, and improve content accessibility.",
      category: "full-stack",
      stack: [
        "Next.js",
        "SSR",
        "React.js",
        "TypeScript",
        "Framer Motion",
        "Bootstrap",
        "MySQL",
        "Apache",
        "WordPress",
        "Vercel",
        "Figma",
        "Photoshop",
      ],
      year: "2022",
      status: "---",
    },
    {
      title: "Matapee",
      description:
        "Developed a website for an Indigenous design brand, showcasing its cultural identity, creative work, and unique design products.",
      category: "web",
      stack: [
        "Next.js",
        "React.js",
        "TypeScript",
        "Framer Motion",
        "Tailwind CSS",
        "Vercel",
        "Figma",
        "Inkscape",
        "Photoshop",
      ],
      year: "2025",
      status: "---",
    },
    {
      title: "Embassy of Guyana",
      description:
        "Developed a website presenting consular services, providing clear access to essential information, resources, and guidance for citizens.",
      category: "web",
      stack: ["React.js", "Bootstrap", "Figma", "Photoshop", "Apache"],
      year: "2020",
      status: "---",
    },
  ],
};

export const infraDataPT: infraContent = {
  tag: "// 02 — Cloud & DevOps",
  title: "Domínio em",
  highlight: "Infraestrutura & Observabilidade",
  subtitle:
    "Do container ao deploy, do banco de dados ao monitoramento, as ferramentas que uso para colocar sistemas em produção e mantê-los escaláveis e saudáveis",
  core: "DevOps",
  tools: {
    aws: {
      category: "Cloud",
      description: "Serviços AWS para hospedar, escalar e integrar aplicações",
    },
    docker: {
      category: "Containers",
      description: "Ambientes padronizados e reproduzíveis do dev à produção",
    },
    nginx: {
      category: "Web Server",
      description: "Proxy reverso, balanceamento de carga e HTTPS",
    },
    vercel: {
      category: "Deploy",
      description: "Deploy contínuo e edge para aplicações Next.js",
    },
    postgresql: {
      category: "Banco de Dados",
      description: "Modelagem relacional, consultas e performance",
    },
    opentelemetry: {
      category: "Telemetria",
      description: "Traces, métricas e logs instrumentados de ponta a ponta",
    },
    grafana: {
      category: "Dashboards",
      description: "Painéis e alertas para monitorar sistemas em tempo real",
    },
  },
};

export const infraDataEN: infraContent = {
  tag: "// 02 — Cloud & DevOps",
  title: "Proficient in",
  highlight: "Infrastructure & Observability",
  subtitle:
    "From container to deploy, from database to monitoring: the tools I use to ship systems to production and keep them scalable and healthy",
  core: "DevOps",
  tools: {
    aws: {
      category: "Cloud",
      description: "AWS services to host, scale and integrate applications",
    },
    docker: {
      category: "Containers",
      description: "Standardised, reproducible environments from dev to prod",
    },
    nginx: {
      category: "Web Server",
      description: "Reverse proxy, load balancing and HTTPS",
    },
    vercel: {
      category: "Deploy",
      description: "Continuous and edge deployments for Next.js apps",
    },
    postgresql: {
      category: "Database",
      description: "Relational modelling, queries and performance",
    },
    opentelemetry: {
      category: "Telemetry",
      description: "End-to-end instrumented traces, metrics and logs",
    },
    grafana: {
      category: "Dashboards",
      description: "Dashboards and alerts to monitor systems in real time",
    },
  },
};
