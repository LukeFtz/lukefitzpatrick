import {
  backendDataEN,
  backendDataPT,
  footerDataEN,
  footerDataPT,
  frontendDataEN,
  frontendDataPT,
  headerDataEN,
  headerDataPT,
  menuDataEN,
  menuDataPT,
  othersDataEN,
  othersDataPT,
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

export const getDataFooter = (lang: "en" | "pt") => {
  if (lang === "en") {
    return footerDataEN;
  } else {
    return footerDataPT;
  }
};
