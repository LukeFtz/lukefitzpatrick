import {
  backendDataEN,
  backendDataPT,
  frontendDataEN,
  frontendDataPT,
  headerDataEN,
  headerDataPT,
  infraDataEN,
  infraDataPT,
  menuDataEN,
  menuDataPT,
  othersDataEN,
  othersDataPT,
  portfolioDataEN,
  portfolioDataPT,
  prototypeDataEN,
  prototypeDataPT,
} from "./dataContent";

export const getDataHeader = (lang: "en" | "pt") => {
  if (lang === "en") {
    return headerDataEN;
  } else {
    return headerDataPT;
  }
};

export const getDataMenu = (lang: "en" | "pt") => {
  if (lang === "en") {
    return menuDataEN;
  } else {
    return menuDataPT;
  }
};

export const getDataPrototype = (lang: "en" | "pt") => {
  if (lang === "en") {
    return prototypeDataEN;
  } else {
    return prototypeDataPT;
  }
};

export const getDataFrontend = (lang: "en" | "pt") => {
  if (lang === "en") {
    return frontendDataEN;
  } else {
    return frontendDataPT;
  }
};

export const getDataBackend = (lang: "en" | "pt") => {
  if (lang === "en") {
    return backendDataEN;
  } else {
    return backendDataPT;
  }
};

export const getDataOthers = (lang: "en" | "pt") => {
  if (lang === "en") {
    return othersDataEN;
  } else {
    return othersDataPT;
  }
};

export const getDataPortfolio = (lang: "en" | "pt") => {
  if (lang === "en") {
    return portfolioDataEN;
  } else {
    return portfolioDataPT;
  }
};

export const getDataInfra = (lang: "en" | "pt") => {
  if (lang === "en") {
    return infraDataEN;
  } else {
    return infraDataPT;
  }
};
