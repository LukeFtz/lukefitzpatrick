import { language } from "./types";

export const defineLanguage = ({ language }: language) => {
  try {
    localStorage.setItem("language", language);
    return true;
  } catch (e) {
    return false;
  }
};
