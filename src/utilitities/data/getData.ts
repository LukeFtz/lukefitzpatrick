import {
  headerDataEN,
  headerDataPT,
  menuDataEN,
  menuDataPT,
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
