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

export interface footerContent {
  link: string;
}
