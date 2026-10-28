export interface headerContent {
  title: string;
  about: string;
  language: string;
}

export interface menuContent {
  title: string;
  prototype: string;
  frontend: string;
  backend: string;
  other: string;
}

export interface prototypeContent {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
}

export interface frontendContent {
  title: string;
  firstParagraph: string;
  secondParagraph: string;
}

export interface backendContent {
  title: string;
  firstSubtitle: string;
  secondSubtitle: string;
}

export interface othersContent {
  title: string;
  firstSubtitle: string;
  device: {
    txt1: string;
    txt2: string;
  };
}

// export type portfolioCategory = "web" | "mobile" | "backend" | "iot";
export type portfolioCategory = "web" | "full-stack";

export interface portfolioProject {
  title: string;
  description: string;
  category: portfolioCategory;
  stack: string[];
  year: string;
  status: string;
  link?: string;
  repo?: string;
}

export interface portfolioContent {
  tag: string;
  title: string;
  subtitle: string;
  all: string;
  categories: Record<portfolioCategory, string>;
  stats: {
    projects: string;
    technologies: string;
    areas: string;
  };
  viewProject: string;
  viewCode: string;
  projects: portfolioProject[];
}

export type infraTool =
  | "aws"
  | "docker"
  | "nginx"
  | "vercel"
  | "postgresql"
  | "opentelemetry"
  | "grafana";

export interface infraContent {
  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
  core: string;
  tools: Record<infraTool, { category: string; description: string }>;
}
