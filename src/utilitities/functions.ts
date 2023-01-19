import { language, setTextPosition } from "./types";

export const defineLanguage = ({ language }: language) => {
  try {
    localStorage.setItem("language", language);
    return true;
  } catch (e) {
    return false;
  }
};

export const returnPositionY = ({ size, text, window }: setTextPosition) => {
  if (text === "PROTOTYPE") {
    return window / 2 - size / 2;
  }
  if (text === "FRONTEND") {
    return 0;
  }
  if (text === "BACKEND") {
    return window / 2 - size / 2;
  }
  return window - size;
};
