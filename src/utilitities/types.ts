import { MotionValue } from "framer-motion";

export interface language {
  language: "en" | "pt";
}

export interface TextMenuProps {
  position: MotionValue;
  size: {
    width: number;
    height: number;
  };
  prototypeData: {
    positionLeft: number;
    positionTop: number;
  };
  frontendData: {
    positionLeft: number;
    positionTop: number;
  };
  backendData: {
    positionLeft: number;
    positionTop: number;
  };
  othersData: {
    positionLeft: number;
    positionTop: number;
  };
  window: number;
}

export interface setTextPosition {
  text: "PROTOTYPE" | "FRONTEND" | "BACKEND" | "OTHERS";
  size: number;
  window: number;
}
