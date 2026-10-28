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

// Viewport size without scrollbars
export const getViewportSize = () => ({
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
});

// Content-box height of the element with the given id
export const getElementHeight = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return undefined;
  const style = getComputedStyle(el);
  const extra = [
    "paddingTop",
    "paddingBottom",
    "borderTopWidth",
    "borderBottomWidth",
  ]
    .map(
      (prop) =>
        parseFloat(style[prop as keyof CSSStyleDeclaration] as string) || 0
    )
    .reduce((a, b) => a + b, 0);
  return el.getBoundingClientRect().height - extra;
};

// Position of the element relative to its offset parent (document for SVG elements)
export const getElementPosition = (id: string) => {
  const el = document.getElementById(id);
  if (!el) return { top: 0, left: 0 };
  const rect = el.getBoundingClientRect();
  const style = getComputedStyle(el);

  let parent = (el as HTMLElement).offsetParent as HTMLElement | null;
  while (
    parent &&
    (parent === document.body || parent === document.documentElement) &&
    getComputedStyle(parent).position === "static"
  ) {
    parent = parent.parentElement;
  }

  let parentTop = 0;
  let parentLeft = 0;
  if (parent) {
    const parentRect = parent.getBoundingClientRect();
    const parentStyle = getComputedStyle(parent);
    parentTop = parentRect.top + (parseFloat(parentStyle.borderTopWidth) || 0);
    parentLeft =
      parentRect.left + (parseFloat(parentStyle.borderLeftWidth) || 0);
  } else {
    // Relative to the document
    parentTop = -window.scrollY;
    parentLeft = -window.scrollX;
  }

  return {
    top: rect.top - parentTop - (parseFloat(style.marginTop) || 0),
    left: rect.left - parentLeft - (parseFloat(style.marginLeft) || 0),
  };
};
