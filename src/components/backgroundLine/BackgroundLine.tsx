import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import $ from "jquery";
import { useAppSelector } from "@/store/hooks";
import {
  positionY,
  scalePrototype,
} from "@/store/redures/backgroundLineReducer";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { pageScrollLine } from "@/utilitities/types";
import { defineAreaValue } from "@/utilitities/functions";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

let width = 0;
let height = 0;

const STROKE = 1;
const PADDING = 5;

let prevScroll = 0;

let currentArea: pageScrollLine = defineAreaValue({
  nextArea: "FIRST_LINE",
  prevArea: "FIRST_LINE",
  area: "FIRST_LINE",
});

let passOnFirstLine = true;

const BackgroundLine: React.FC = () => {
  const viewBoxY = useMotionValue<number>(6800);
  const textOthers = useMotionValue<number>(6070);
  const y = useMotionValue<number>(0);
  const yPrototypeSize = useMotionValue<number>(1);
  const marginTopFrontendProto = useMotionValue<number>(0);
  const marginTopPrototype = useMotionValue<number>(1);
  const prototypeY = useMotionValue<number>(0);

  const yFrontendSize = useMotionValue<number>(1);
  const marginTopFrontend = useMotionValue<number>(1);
  const frontendY = useMotionValue<number>(0);

  const positionTop = useAppSelector(positionY);

  const scaleYPrototype = useAppSelector(scalePrototype);

  const [text, setText] = useState<string | number>("");

  const svgLine = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgLine,
  });

  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });

  // const firstLine = useTransform(scrollYProgress, [0.1, 0.12], [0, 1]);
  // const firstCurveLine = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  // const prototypeLine = useTransform(scrollYProgress, [0.18, 0.2], [0, 1]);
  // const prototypeBottomCurve = useTransform(
  //   scrollYProgress,
  //   [0.2, 0.3],
  //   [0, 1]
  // );

  // const prototypeBottomLine = useTransform(
  //   scrollYProgress,
  //   [0.3, 0.32],
  //   [0, 1]
  // );

  // const frontendTopCurve = useTransform(scrollYProgress, [0.48, 0.5], [0, 1]);
  // const frontendVertical = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  // const frontendBottomCurve = useTransform(
  //   scrollYProgress,
  //   [0.94, 0.95],
  //   [0, 1]
  // );
  // const frontendBottomLine = useTransform(
  //   scrollYProgress,
  //   [0.95, 0.96],
  //   [0, 1]
  // );
  // const backendTopCurve = useTransform(scrollYProgress, [0.96, 0.97], [0, 1]);
  // const backendVerticalLine = useTransform(
  //   scrollYProgress,
  //   [0.97, 0.99],
  //   [0, 1]
  // );
  // const othersBottomCurve = useTransform(
  //   scrollYProgress,
  //   [0.99, 0.999],
  //   [0, 1]
  // );
  // const othersLine = useTransform(scrollYProgress, [0.999, 1], [0, 1]);
  const firstLine = useMotionValue<number>(0);
  const firstCurveLine = useMotionValue<number>(0);
  const prototypeLine = useMotionValue<number>(0);
  const prototypeBottomCurve = useMotionValue<number>(0);

  const prototypeBottomLine = useMotionValue<number>(0);

  const frontendTopCurve = useMotionValue<number>(0);
  const frontendVertical = useMotionValue<number>(0);
  const frontendBottomCurve = useMotionValue<number>(0);
  const frontendBottomLine = useMotionValue<number>(0);

  const backendTopCurve = useMotionValue<number>(0);
  const backendVerticalLine = useMotionValue<number>(0);
  const othersBottomCurve = useMotionValue<number>(0);
  const othersLine = useMotionValue<number>(0);
  const cloud = useMotionValue<number>(0);

  const animateFirstLine = () => {
    animate(firstLine, 1, {
      duration: 0.5,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => animateFirstCurve(),
    });
  };

  const animateFirstCurve = () => {
    animate(firstCurveLine, 1, {
      duration: 0.5,
      onPlay: () =>
        (currentArea = { ...currentArea, nextArea: "HALF_PROTOTYPE" }),
      onComplete: () => (passOnFirstLine = false),
    });
  };

  const animateHalfPrototype = () => {
    animate(prototypeLine, 0.5, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "HALF_PROTOTYPE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFullPrototype = () => {
    animate(prototypeLine, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FULL_PROTOTYPE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateCurvePrototype = () => {
    animate(prototypeBottomCurve, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "PROTOTYPE_BOTTOM_CURVE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateBottomPrototype = () => {
    animate(prototypeBottomLine, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "BOTTOM_LINE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFrontendCurve = () => {
    animate(frontendTopCurve, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FRONTEND_CURVE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateHalfFrontend = () => {
    animate(frontendVertical, 0.5, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "HALF_FRONTEND" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFullFrontend = () => {
    animate(frontendVertical, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FULL_FRONTEND" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFrontendBottomCurve = () => {
    animate(frontendBottomCurve, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FRONTEND_BOTTOM_CURVE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFrontendBottomLine = () => {
    animate(frontendBottomLine, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FRONTEND_BOTTOM_LINE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateBackendCurve = () => {
    animate(backendTopCurve, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "BACKEND_CURVE" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateHalfBackend = () => {
    animate(backendVerticalLine, 0.5, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "HALF_BACKEND" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };
  const animateFullBackend = () => {
    animate(backendVerticalLine, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "FULL_BACKEND" };
        currentArea = defineAreaValue(currentArea);
        animateOthersCurve();
      },
    });
  };
  const animateOthersCurve = () => {
    animate(othersBottomCurve, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "OTHERS_CURVE" };
        currentArea = defineAreaValue(currentArea);
        animateOthersLine();
      },
    });
  };
  const animateOthersLine = () => {
    animate(othersLine, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "OTHERS_LINE" };
        currentArea = defineAreaValue(currentArea);
        animateOpacity();
      },
    });
  };
  const animateOpacity = () => {
    animate(cloud, 1, {
      duration: 1,
      onPlay: () => (currentArea = { ...currentArea, nextArea: "DEFAULT" }),
      onComplete: () => {
        currentArea = { ...currentArea, area: "CLOUD" };
        currentArea = defineAreaValue(currentArea);
      },
    });
  };

  const moveForward = (currentScrool: number) => {
    if (
      currentScrool >= 0.18 &&
      currentArea.area === "FIRST_LINE" &&
      passOnFirstLine
    ) {
      animateFirstLine();
    } else if (
      currentScrool >= 0.2 &&
      currentArea.nextArea === "HALF_PROTOTYPE"
    ) {
      animateHalfPrototype();
    } else if (
      currentScrool >= 0.25 &&
      currentArea.nextArea === "FULL_PROTOTYPE"
    ) {
      animateFullPrototype();
    } else if (
      currentScrool >= 0.3 &&
      currentArea.nextArea === "PROTOTYPE_BOTTOM_CURVE"
    ) {
      animateCurvePrototype();
    } else if (
      currentScrool >= 0.31 &&
      currentArea.nextArea === "BOTTOM_LINE"
    ) {
      animateBottomPrototype();
    } else if (
      currentScrool >= 0.35 &&
      currentArea.nextArea === "FRONTEND_CURVE"
    ) {
      animateFrontendCurve();
    } else if (
      currentScrool >= 0.36 &&
      currentArea.nextArea === "HALF_FRONTEND"
    ) {
      animateHalfFrontend();
    } else if (
      currentScrool >= 0.6 &&
      currentArea.nextArea === "FULL_FRONTEND"
    ) {
      animateFullFrontend();
    } else if (
      currentScrool >= 0.8 &&
      currentArea.nextArea === "FRONTEND_BOTTOM_CURVE"
    ) {
      animateFrontendBottomCurve();
    } else if (
      currentScrool >= 0.81 &&
      currentArea.nextArea === "FRONTEND_BOTTOM_LINE"
    ) {
      animateFrontendBottomLine();
    } else if (
      currentScrool >= 0.82 &&
      currentArea.nextArea === "BACKEND_CURVE"
    ) {
      animateBackendCurve();
    } else if (
      currentScrool >= 0.85 &&
      currentArea.nextArea === "HALF_BACKEND"
    ) {
      animateHalfBackend();
    } else if (
      currentScrool >= 0.9 ||
      (currentScrool === 1 && currentArea.nextArea === "FULL_BACKEND")
    ) {
      animateFullBackend();
    }
    // } else if (
    //   currentScrool >= 0.86 &&
    //   currentArea.nextArea === "OTHERS_CURVE"
    // ) {
    //   animateOthersCurve();
    // } else if (currentScrool >= 0.9 && currentArea.nextArea === "OTHERS_LINE") {
    //   animateOthersLine();
    // }

    prevScroll = currentScrool;
  };

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // console.log("Page scroll: ", latest);
    if (latest - prevScroll > 0) {
      moveForward(latest);
    }
  });

  const defineValues = () => {
    const aspectRatio = Math.round((width / height) * 100) / 100;
    console.log(aspectRatio);
    if (aspectRatio < 0.9) {
      viewBoxY.set(15000);
    } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
      viewBoxY.set(8000);
      textOthers.set(7775);
    } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
      viewBoxY.set(7500);
      textOthers.set(7140);
    } else if (aspectRatio >= 1.5 && aspectRatio < 1.6) {
      viewBoxY.set(7500);
      textOthers.set(6850);
    } else if (aspectRatio >= 1.6 && aspectRatio < 1.7) {
      viewBoxY.set(7500);
      textOthers.set(6850);
    } else if (aspectRatio >= 1.7 && aspectRatio < 1.8) {
      viewBoxY.set(6800);
      textOthers.set(5900);
    } else {
      viewBoxY.set(6800);
      textOthers.set(6070);
    }

    const line = $("#id_prototype_div").height();
    const lineVerticalLine = $("#id_vertical_prototype_line").height();
    const curvePrototype = $("#id_curve_top_prototype").height();

    let extraTopPadding = 0;
    if (line && lineVerticalLine && curvePrototype) {
      let scaleY = 1;
      // if (aspectRatio < 0.9) {
      //   scaleY = (line + height) / 350;
      //   extraTopPadding = height * 3.45;
      // } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
      //   // verify devices
      //   scaleY = (lineVerticalLine * 1.1) / line;
      //   extraTopPadding = curvePrototype * 8;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
      //   scaleY = lineVerticalLine / line;
      //   extraTopPadding = curvePrototype * 6;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else if (aspectRatio >= 1.5 && aspectRatio < 1.6) {
      //   // Verify devices
      //   scaleY = lineVerticalLine / line;
      //   extraTopPadding = curvePrototype * 6;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else if (aspectRatio >= 1.6 && aspectRatio < 1.7) {
      //   // verify devices
      //   scaleY = lineVerticalLine / line;
      //   extraTopPadding = curvePrototype * 6;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else if (aspectRatio >= 1.7 && aspectRatio < 1.8) {
      //   if ((line + height / 2) / lineVerticalLine > 1) {
      //     // scaleY = (line * 1.1 + height / 2) / lineVerticalLine;
      //     // extraTopPadding = scaleY * 30;
      //     // scaleY = (line * 1.1 + height / 2) / lineVerticalLine;
      //     // extraTopPadding = (scaleY - 1) * 300;
      //     scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //     extraTopPadding = (scaleY - 1) * 350;
      //     console.log(scaleY);
      //     console.log(line);
      //     console.log(lineVerticalLine);
      //     console.log(height / 2);
      //     // console.log(scaleY);
      //     // console.log(extraTopPadding);
      //   } else {
      //     scaleY = (line + height / 1.3) / 1095;
      //     extraTopPadding = scaleY * 80;
      //   }
      // } else {
      //   // scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // }

      // if (height / 2 <= 350) {
      //   scaleY = (line + height / 1.1) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 380;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else if (height / 2 <= 400) {
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // } else {
      //   // scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   scaleY = (line + height / 2) / 15 / lineVerticalLine;
      //   extraTopPadding = (scaleY - 1) * 350;
      //   console.log(scaleY);
      //   console.log(line);
      //   console.log(lineVerticalLine);
      //   console.log(height / 2);
      // }

      if ((line + height / 2) / 15 / lineVerticalLine <= 1.11) {
        scaleY = (line + height / 1) / 15 / lineVerticalLine;
        extraTopPadding = (scaleY - 1) * 380;
        console.log(scaleY);
        console.log(line);
        console.log(lineVerticalLine);
        console.log(height / 2);
      } else {
        // scaleY = (line + height / 2) / 15 / lineVerticalLine;
        scaleY = (line + height / 2) / 15 / lineVerticalLine;
        extraTopPadding = (scaleY - 1) * 350;
        console.log(scaleY);
        console.log(line);
        console.log(lineVerticalLine);
        console.log(height / 2);
      }

      yPrototypeSize.set(scaleY);
      const auxValue = Math.abs(line - lineVerticalLine);

      prototypeY.set(curvePrototype + extraTopPadding);
      if (aspectRatio < 0.9) {
        const auxValueMobile =
          Math.abs(line - lineVerticalLine * scaleY) * 0.88;
        // Margin Base on scale
        marginTopPrototype.set(auxValueMobile);
        marginTopFrontendProto.set(auxValueMobile * 0.429);
      } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
        // Verify devices
        marginTopPrototype.set(auxValue);
        marginTopFrontendProto.set(auxValue);
      } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
        marginTopPrototype.set(auxValue * 1.45);
        marginTopFrontendProto.set(auxValue * 1.6);
      } else if (aspectRatio >= 1.5 && aspectRatio < 1.6) {
        // Verify devices
        marginTopPrototype.set(auxValue * 13);
        marginTopFrontendProto.set(auxValue * 13.9);
      } else if (aspectRatio >= 1.6 && aspectRatio < 1.7) {
        // Verify devices
        marginTopPrototype.set(auxValue * 13);
        marginTopFrontendProto.set(auxValue * 13.9);
      } else if (aspectRatio >= 1.7 && aspectRatio < 1.8) {
        const diference = (((scaleY - 1) * 100 - 13) * 5.83 + 150) * scaleY;
        if ((line + height / 2) / lineVerticalLine > 1) {
          marginTopFrontendProto.set(diference + 10);
          marginTopPrototype.set(diference);
        } else {
          marginTopFrontendProto.set(diference + 50);
          marginTopPrototype.set(diference + 20);
        }
      } else {
        const diference = (((scaleY - 1) * 100 - 13) * 5.83 + 95) * scaleY;
        if ((line + height / 2) / lineVerticalLine > 1) {
          marginTopFrontendProto.set(diference - 10);
          marginTopPrototype.set(diference);
        } else {
          marginTopFrontendProto.set(diference - 5);
          marginTopPrototype.set(diference);
        }
      }
    }

    const frontendSize = $("#id_frontend_div").height();
    const frontendLine = $("#id_frontend_path_vertical").height();

    if (frontendSize && frontendLine) {
      let scaleY2: number;

      let auxValueFront: number;

      if (aspectRatio < 0.9) {
        // scaleY2 = (frontendSize + height) / 668;
        scaleY2 = 3.6;
        yFrontendSize.set(scaleY2);
        auxValueFront = Math.abs((50 * (yFrontendSize.get() - 1)) / 0.5);
        // marginTopFrontend.set();
        setText(scaleY2);
        // extraTopPadding = height * 3.45;
      } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
        // Verify devices
        scaleY2 = frontendSize / 1185;
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = Math.abs((50 * (yFrontendSize.get() - 1)) / 0.5);
        marginTopFrontend.set(Math.abs(frontendSize - frontendLine) * 155);
      } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
        scaleY2 = frontendSize / 1300;
        yFrontendSize.set(scaleY2);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 2.1 - 50;
        marginTopFrontend.set(auxValueFront * 27.5);
      } else if (aspectRatio >= 1.5 && aspectRatio < 1.6) {
        scaleY2 = frontendSize / (frontendLine - 407);
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 2.1 - 50;
        marginTopFrontend.set(auxValueFront * 67);
      } else if (aspectRatio >= 1.6 && aspectRatio < 1.7) {
        scaleY2 = frontendSize / (frontendLine - 407);
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 2.1 - 50;
        marginTopFrontend.set(auxValueFront * 67);
      } else if (aspectRatio >= 1.7 && aspectRatio < 1.8) {
        if (frontendSize / (frontendLine - 50) > 1.12) {
          scaleY2 = frontendSize / frontendLine;
          yFrontendSize.set(scaleY2);
          auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 6.7;
          marginTopFrontend.set(auxValueFront * 5);
          // console.log("prev " + auxValueFront * 5);
          // console.log((((scaleY2 - 1) * 100 - 13) * 5.83 + 100) * scaleY2);
          // console.log((((scaleY2 - 1) * 100 - 12) * 28.48 + 369) * scaleY2);
          // console.log((((scaleY2 - 1) * 100 - 12) * 17.48 + 369) * scaleY2);

          // console.log((scaleY2 - 1) * 100);
          // auxValueFront = (((scaleY2 - 1) * 100 - 12) * 28.48 + 369) * scaleY2;
          // marginTopFrontend.set(auxValueFront);
        } else {
          scaleY2 = frontendSize / 1540;
          yFrontendSize.set(scaleY2);
          auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 6;
          marginTopFrontend.set(auxValueFront * 4.64);

          // console.log("prev " + auxValueFront * 5);
          // console.log((((scaleY2 - 1) * 100 - 12) * 17.48 + 369) * scaleY2);
          // console.log((scaleY2 - 1) * 100);
        }
      } else {
        scaleY2 = frontendSize / (frontendLine + 285);
        yFrontendSize.set(scaleY2);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 6;
        marginTopFrontend.set(auxValueFront);
      }
      frontendY.set(auxValueFront);
    }
  };

  useEffect(() => {
    const auxWidth = $(window).width();
    const auxHeight = $(window).height();

    if (auxWidth && auxHeight) {
      width = auxWidth;
      height = auxHeight;
      defineValues();
    }
  }, []);

  useEffect(() => {
    if (positionTop) {
      y.set(positionTop);
    }
  }, [positionTop]);

  return (
    <div ref={svgLine}>
      <p>{text}</p>
      <motion.svg
        // width="100"
        //   height="5412.5"
        // viewBox="0 0 1550 5412.5"
        viewBox={`0 0 100 ${viewBoxY.get()}`}
        fill="none"
        // version="1.1"
        id="svg7431"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ y }}
        className="mt-5 pt-3"
      >
        {/* <motion.path
          d="M 296.5,5.0000217 H 148.453 90.978384"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_first_line_background"
          style={{ pathLength: firstLine, y: PADDING }}
        /> */}

        <motion.path
          d="M 19.129038,0.3225789 H 9.5776184 5.8695784"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_first_line_background"
          // style={{ pathLength: firstLine, y: PADDING }}
          style={{ pathLength: 1, y: PADDING }}
        />

        <motion.path
          // d="M 90.978384,5.0000217 H 76.7268 c 0,0 -71.7265303,0 -71.7267903,50.4140003 -1.7e-6,0.323134 -3.1e-6,7.500621 -4.2e-6,20.638243"
          d="m 5.8695784,0.3225789 h -0.91946 c 0,0 -4.62751996,0 -4.62753996,3.2525189 0,0.02085 0,0.483912 0,1.331499"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_curve_top_prototype"
          style={{
            pathLength: 1,
            // pathLength: firstCurveLine,
            y: PADDING,
            x: STROKE,
            height: 50,
          }}
        />
        <motion.path
          // d="m 5.0000055,76.052265 c -1.24e-5,142.362035 3.7e-6,984.583835 4.2e-6,1388.841835"
          d="m 0.32257844,4.9065968 c 0,9.1846512 0,63.5215552 0,89.6028042"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_vertical_prototype_line"
          // transform={`matrix(1 0 0 ${scaleYPrototype} 0 -${prototypeY.get()})`}
          // transform={`matrix(1 0 0 ${yPrototypeSize.get()} 0 -${prototypeY.get()})`}
          style={{
            // pathLength: prototypeLine,
            pathLength: 1,
            display: "inline",
            x: STROKE,
            scaleY: yPrototypeSize,
            // scaleY: 1.2,
            // y: 4.907,
            y: 10,
            height: 89.603,
            // y: prototypeY,
            // height: 1400,
            // height: 00,
          }}
        />

        <motion.path
          // d="m 5.0000097,1464.8941 v 18.0559 c 0,0 3e-5,66.16 71.7267903,66.16"
          d="m 0.32257844,94.509401 v 1.16491 c 0,0 0,4.26833 4.62753996,4.26833"
          stroke="#00681d"
          strokeWidth={STROKE}
          height={5.756}
          id="id_curve_prototype_bottom"
          style={{
            // pathLength: prototypeBottomCurve,
            pathLength: 1,
            // y: marginTopPrototype,
            y: 4.8,
            x: STROKE,
          }}
        />

        <motion.path
          // d="M 76.7268,1549.11 H 1470.52"
          d="M 4.9501184,99.942641 H 94.872288"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_prototype_bottom"
          style={{
            pathLength: 1,
            y: 4.8,

            // y: marginTopPrototype,
            x: STROKE,
          }}
        />
        <motion.path
          // d="m 1470.52,1549.11 c 0,0 74.48,0 74.48,97.21"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_curve"
          style={{
            // pathLength: frontendTopCurve,
            pathLength: 1,
            y: marginTopPrototype,
            x: -PADDING,
          }}
        />
        <motion.g style={{ scaleY: yFrontendSize, y: frontendY }}>
          <motion.path
            // d="M 1545,1646.32 V 2739 3724"
            stroke="#00681d"
            strokeWidth={STROKE}
            // height={yFrontendDefault.get()}
            id="id_frontend_path_vertical"
            style={{
              // pathLength: frontendVertical,
              pathLength: 1,
              y: marginTopFrontendProto,
              x: -PADDING,
              height: 2003,
            }}
          />
        </motion.g>
        <motion.path
          // d="m 1545,3724 c 0,85.5 -105.5,82.5 -105.5,82.5"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_bottom_curve"
          style={{
            // pathLength: frontendBottomCurve,
            pathLength: 1,
            y: marginTopFrontend,
            x: -PADDING,
          }}
        />
        <motion.path
          // d="M 1439.5,3806.5 H 76.7268"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_bottom"
          style={{
            // pathLength: frontendBottomLine,
            pathLength: 1,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          // d="m 76.7268,3806.5 c -54.415406,0 -67.5486582,51.7993 -70.7183909,76.803 -1.0083977,7.9545 -1.0083994,13.197 -1.0083994,13.197"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_backend_curve_top"
          style={{
            // pathLength: backendTopCurve,
            pathLength: 1,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          // d="M 5.0000097,3896.5 V 5320"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_backend_vertical_line"
          style={{
            // pathLength: backendVerticalLine,
            pathLength: 1,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          // d="m 5.0000097,5320 c 0,87.5 71.7267903,87.5 71.7267903,87.5"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_others_bottom_curve"
          style={{
            // pathLength: othersBottomCurve,
            pathLength: 1,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          // d="M 76.7268,5407.5 H 507.5"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_others_line"
          style={{ pathLength: othersLine, y: marginTopFrontend }}
        />
        <motion.g style={{ y: 5 }}>
          <motion.path
            id="id_cloud_iot"
            d="M923.135 5365.21a61.85 61.85 0 00-24.115 4.87c.169-1.6.261-3.22.261-4.87 0-25.46-20.64-46.11-46.105-46.11-8.61 0-16.64 2.4-23.536 6.51-3.813-35.75-34.061-63.61-70.827-63.61-38.316 0-69.477 30.27-71.097 68.19a81.885 81.885 0 00-30.398-5.83c-45.462 0-82.318 36.86-82.318 82.32 0 45.46 36.856 82.32 82.318 82.32h265.817c34.183 0 61.896-27.71 61.896-61.9 0-34.18-27.713-61.89-61.896-61.89z"
            fill="url(#prefix__paint0_linear_273_13)"
            style={{
              pathLength: 1,
              y: marginTopFrontend,
              height: 227,
              opacity: cloud,
            }}
          />
          <motion.path
            d="M575 5403.5c.5 11.5.5 13 1.5 18.5-3.369.5-6.863.5-11.5.5-17.673 0-32-1.83-32-19.5s14.327-20 32-20c5.346 0 9.836.21 13.5 1-1.5 5.5-3 9-3.5 19.5z"
            fill="#00681D"
            style={{ pathLength: 1, y: marginTopFrontend, opacity: cloud }}
          />
          <motion.path
            d="M536 5391.66l-35 5.84v10l35 6.5v-11.17-11.17z"
            fill="#00681D"
            style={{ pathLength: 1, y: marginTopFrontend, opacity: cloud }}
          />
        </motion.g>
        <defs>
          <linearGradient id="prefix__paint0_linear_273_13">
            <stop stopColor="#0066cc" />
            <stop offset={1} stopColor="#00ccff" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default BackgroundLine;
