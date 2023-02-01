import { language, pageScrollLine } from "./types";

export const defineLanguage = ({ language }: language) => {
  try {
    localStorage.setItem("language", language);
    return true;
  } catch (e) {
    return false;
  }
};

export const defineAreaValue = ({ area }: pageScrollLine) => {
  let newArea: pageScrollLine;
  if (area === "FIRST_LINE") {
    newArea = {
      area: "FIRST_LINE",
      nextArea: "HALF_PROTOTYPE",
      prevArea: "FIRST_LINE",
    };
    return newArea;
  }
  if (area === "HALF_PROTOTYPE") {
    newArea = {
      area: "HALF_PROTOTYPE",
      nextArea: "FULL_PROTOTYPE",
      prevArea: "FIRST_LINE",
    };
    return newArea;
  }
  if (area === "FULL_PROTOTYPE") {
    newArea = {
      area: "FULL_PROTOTYPE",
      nextArea: "PROTOTYPE_BOTTOM_CURVE",
      prevArea: "HALF_PROTOTYPE",
    };
    return newArea;
  }
  if (area === "PROTOTYPE_BOTTOM_CURVE") {
    newArea = {
      area: "PROTOTYPE_BOTTOM_CURVE",
      nextArea: "BOTTOM_LINE",
      prevArea: "FULL_PROTOTYPE",
    };
    return newArea;
  }
  if (area === "BOTTOM_LINE") {
    newArea = {
      area: "BOTTOM_LINE",
      nextArea: "FRONTEND_CURVE",
      prevArea: "PROTOTYPE_BOTTOM_CURVE",
    };
    return newArea;
  }
  if (area === "FRONTEND_CURVE") {
    newArea = {
      area: "FRONTEND_CURVE",
      nextArea: "HALF_FRONTEND",
      prevArea: "BOTTOM_LINE",
    };
    return newArea;
  }
  if (area === "HALF_FRONTEND") {
    newArea = {
      area: "HALF_FRONTEND",
      nextArea: "FULL_FRONTEND",
      prevArea: "FRONTEND_CURVE",
    };
    return newArea;
  }
  if (area === "FULL_FRONTEND") {
    newArea = {
      area: "FULL_FRONTEND",
      nextArea: "FRONTEND_BOTTOM_CURVE",
      prevArea: "HALF_FRONTEND",
    };
    return newArea;
  }
  if (area === "FRONTEND_BOTTOM_CURVE") {
    newArea = {
      area: "FRONTEND_BOTTOM_CURVE",
      nextArea: "FRONTEND_BOTTOM_LINE",
      prevArea: "FULL_FRONTEND",
    };
    return newArea;
  }
  if (area === "FRONTEND_BOTTOM_LINE") {
    newArea = {
      area: "FRONTEND_BOTTOM_LINE",
      nextArea: "BACKEND_CURVE",
      prevArea: "FRONTEND_BOTTOM_CURVE",
    };
    return newArea;
  }
  if (area === "BACKEND_CURVE") {
    newArea = {
      area: "BACKEND_CURVE",
      nextArea: "HALF_BACKEND",
      prevArea: "FRONTEND_BOTTOM_CURVE",
    };
    return newArea;
  }
  if (area === "HALF_BACKEND") {
    newArea = {
      area: "HALF_BACKEND",
      nextArea: "FULL_BACKEND",
      prevArea: "BACKEND_CURVE",
    };
    return newArea;
  }
  if (area === "FULL_BACKEND") {
    newArea = {
      area: "FULL_BACKEND",
      nextArea: "OTHERS_CURVE",
      prevArea: "HALF_BACKEND",
    };
    return newArea;
  }
  if (area === "OTHERS_CURVE") {
    newArea = {
      area: "OTHERS_CURVE",
      nextArea: "OTHERS_LINE",
      prevArea: "FULL_BACKEND",
    };
    return newArea;
  }
  if (area === "OTHERS_LINE") {
    newArea = {
      area: "OTHERS_LINE",
      nextArea: "PLUG",
      prevArea: "OTHERS_CURVE",
    };
    return newArea;
  }
  if (area === "PLUG") {
    newArea = { area: "PLUG", nextArea: "CLOUD", prevArea: "OTHERS_LINE" };
    return newArea;
  }

  newArea = { area: "CLOUD", nextArea: "CLOUD", prevArea: "PLUG" };
  return newArea;
};
