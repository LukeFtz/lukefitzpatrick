import { headerDataEN, headerDataPT } from "./dataContent";

export const getDataHeader = (lang: "en" | "pt") => {
  if (lang === "en") {
    return headerDataEN;
  } else {
    return headerDataPT;
  }
};
