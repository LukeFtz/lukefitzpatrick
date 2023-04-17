import React, { useEffect, useState } from "react";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import $ from "jquery";

let width = 0;
let height = 0;

const AnimatedSquares = () => {
  const viewBox = useMotionValue(1047);

  const rotate = useMotionValue(0);
  const rotate2 = useMotionValue(0);

  const path01X = useMotionValue(0);
  const path01Y = useMotionValue(0);

  const path02X = useMotionValue(0);
  const path02Y = useMotionValue(0);

  const path03X = useMotionValue(0);
  const path03Y = useMotionValue(0);

  const path04X = useMotionValue(0);
  const path04Y = useMotionValue(0);

  const path05X = useMotionValue(0);
  const path05Y = useMotionValue(0);

  const path06X = useMotionValue(0);
  const path06Y = useMotionValue(0);

  const path07X = useMotionValue(0);
  const path07Y = useMotionValue(0);

  const path08X = useMotionValue(0);
  const path08Y = useMotionValue(0);

  const path09X = useMotionValue(0);
  const path09Y = useMotionValue(0);

  const path10X = useMotionValue(0);
  const path10Y = useMotionValue(0);

  const opacity = useMotionValue(0);

  let default01Y: number;
  let default02Y: number;
  let default03Y: number;
  let default04Y: number;
  let default05Y: number;
  let default06Y: number;
  let default07Y: number;
  let default08Y: number;
  let default09Y: number;
  let default10Y: number;

  let animated01Y: number;
  let animated02Y: number;
  let animated03Y: number;
  let animated04Y: number;
  let animated05Y: number;
  let animated06Y: number;
  let animated07Y: number;
  let animated08Y: number;
  let animated09Y: number;
  let animated10Y: number;

  const setValues = () => {
    default01Y = 400;
    default02Y = 250;
    default03Y = 1;
    default04Y = 50;
    default05Y = 150;
    default06Y = 300;
    default07Y = 100;
    default08Y = 200;
    default09Y = 0;
    default10Y = 390;

    animated01Y = 350;
    animated02Y = 200;
    animated03Y = 50;
    animated04Y = 10;
    animated05Y = 180;
    animated06Y = 270;
    animated07Y = 70;
    animated08Y = 250;
    animated09Y = 50;
    animated10Y = 350;
  };

  const setDefaultY = () => {
    animate(path01Y, default01Y, {
      duration: 1,
      delay: 5,
      onComplete: () => animateY(),
    });

    animate(path02Y, default02Y, {
      duration: 1,
      delay: 5,
    });

    animate(path03Y, default03Y, {
      duration: 1,
      delay: 5,
    });

    animate(path04Y, default04Y, {
      duration: 1,
      delay: 5,
    });

    animate(path05Y, default05Y, {
      duration: 1,
      delay: 5,
    });

    animate(path06Y, default06Y, {
      duration: 1,
      delay: 5,
    });

    animate(path07Y, default07Y, {
      duration: 1,
      delay: 5,
    });

    animate(path08Y, default08Y, {
      duration: 1,
      delay: 5,
    });

    animate(path09Y, default09Y, {
      duration: 1,
      delay: 5,
    });

    animate(path10Y, default10Y, {
      duration: 1,
      delay: 5,
    });
  };

  const animateY = () => {
    animate(path01Y, animated01Y, {
      duration: 1,
      delay: 5,
      onComplete: () => setDefaultY(),
    });

    animate(path02Y, animated02Y, {
      duration: 1,
      delay: 5,
    });

    animate(path03Y, animated03Y, {
      duration: 1,
      delay: 5,
    });

    animate(path04Y, animated04Y, {
      duration: 1,
      delay: 5,
    });

    animate(path05Y, animated05Y, {
      duration: 1,
      delay: 5,
    });

    animate(path06Y, animated06Y, {
      duration: 1,
      delay: 5,
    });

    animate(path07Y, animated07Y, {
      duration: 1,
      delay: 5,
    });

    animate(path08Y, animated08Y, {
      duration: 1,
      delay: 5,
    });

    animate(path09Y, animated09Y, {
      duration: 1,
      delay: 5,
    });

    animate(path10Y, animated10Y, {
      duration: 1,
      delay: 5,
    });
  };

  const aniamted = () => {
    // if (startAnimation) {
    opacity.set(1);

    animate(rotate, -720, {
      duration: 1.5,
      type: "spring",
      stiffness: 15,
      onComplete: () => animateY(),
    });
    animate(rotate2, -360, {
      duration: 1,
      type: "spring",
      stiffness: 15,
    });

    animate(path01X, width * 0.02, {
      duration: 1.5,
    });

    animate(path02X, width * 0.08, {
      duration: 1.5,
    });

    animate(path03X, 1, {
      duration: 1.5,
    });

    animate(path04X, 110, {
      duration: 1.5,
    });

    animate(path05X, 110, {
      duration: 1.5,
    });

    animate(path06X, 200, {
      duration: 1.5,
    });

    animate(path07X, 250, {
      duration: 1.5,
    });

    animate(path08X, 290, {
      duration: 1.5,
    });

    animate(path09X, 300, {
      duration: 1.5,
    });

    animate(path10X, 340, {
      duration: 1.5,
    });
    // }
  };

  const defineViewBox = () => {
    const aspectRatio = Math.round((width / height) * 100) / 100;

    if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
      viewBox.set(700);
    } else if (aspectRatio >= 1.4 && aspectRatio < 1.6) {
      viewBox.set(800);
    } else {
      viewBox.set(1047);
    }
  };

  useEffect(() => {
    const auxWidth = $(window).width();
    const auxHeight = $(window).height();

    if (auxWidth && auxHeight) {
      width = auxWidth;
      height = auxHeight;

      defineViewBox();

      setValues();

      path01Y.set(default01Y);
      path02Y.set(default02Y);
      path03Y.set(default03Y);
      path04Y.set(default04Y);
      path05Y.set(default05Y);
      path06Y.set(default06Y);
      path07Y.set(default07Y);
      path08Y.set(default08Y);
      path09Y.set(default09Y);
      path10Y.set(default10Y);

      path01X.set(width);
      path02X.set(width);
      path03X.set(width);
      path04X.set(width);
      path05X.set(width);
      path06X.set(width);
      path07X.set(width);
      path08X.set(width);
      path09X.set(width);
      path10X.set(width);
      aniamted();
    }
  }, []);

  return (
    <motion.svg
      // viewBox="0 0 1047 275"
      viewBox={`0 0 393 485`}
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        id="id_path01"
        fill="#000"
        preserveAspectRatio="none"
        d="M.02 31.207L21.488.02l31.187 21.467-21.468 31.188z"
        style={{ x: path01X, y: path01Y, opacity, rotateZ: rotate }}
      />
      <motion.path
        id="id_path02"
        fill="#000"
        d="M7.747 0l47.05 7.747-7.748 47.05-47.05-7.748z"
        style={{ x: path02X, y: path02Y, opacity, rotateZ: rotate2 }}
      />
      <motion.path
        id="id_path03"
        fill="#000"
        d="M36.132.226l43.274 36.132-36.133 43.274L0 43.499z"
        style={{ x: path03X, y: path03Y, opacity, rotateZ: rotate }}
      />
      <motion.path
        id="id_path04"
        fill="#000"
        d="M0 23.237L33.458 0l24.143 34.763L24.143 58z"
        style={{ x: path04X, y: path04Y, opacity, rotateZ: rotate2 }}
      />
      <motion.path
        id="id_path05"
        fill="#000"
        d="M0 26.305L123.491 0l26.305 123.491-123.491 26.305z"
        style={{ x: path05X, y: path05Y, opacity, rotateZ: rotate }}
      />
      <motion.path
        id="id_path06"
        fill="#000"
        d="M35.204.552l54.464 33.787-35.103 56.587L.1 57.139z"
        style={{ x: path06X, y: path06Y, opacity, rotateZ: rotate2 }}
      />
      <motion.path
        id="id_path07"
        fill="#000"
        d="M0 21.597L31.098 0l21.597 31.097-31.098 21.598z"
        style={{ x: path07X, y: path07Y, opacity, rotateZ: rotate }}
      />
      <motion.path
        id="id_path08"
        fill="#000"
        d="M.73 47.634L69.315 0l47.633 68.587-68.586 47.633z"
        style={{ x: path08X, y: path08Y, opacity, rotateZ: rotate2 }}
      />
      <motion.path
        id="id_path09"
        fill="#000"
        d="M0 40.5L58.316 0l40.5 58.315-58.316 40.5z"
        style={{ x: path09X, y: path09Y, opacity, rotateZ: rotate }}
      />
      <motion.path
        id="id_path10"
        fill="#000"
        d="M0 21.597L31.098 0l21.597 31.097-31.098 21.598z"
        style={{ x: path10X, y: path10Y, opacity, rotateZ: rotate }}
      />
    </motion.svg>
  );
};

export default AnimatedSquares;
