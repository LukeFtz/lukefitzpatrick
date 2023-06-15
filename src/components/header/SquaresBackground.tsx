import Image from "next/image";
import React, { useEffect, PointerEvent } from "react";
import picture from "../../../public/media/geral/my_picture.png";
import styles from "@/styles/header/header.module.css";
import { Plus_Jakarta_Sans } from "@next/font/google";
import { headerContent } from "@/utilitities/datatypes";
import { animate, motion, useMotionValue, useVelocity } from "framer-motion";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const SquaresBackground: React.FC<headerContent> = ({
  title,
}: headerContent) => {
  const xThirdTop = useMotionValue(0);
  const yThirdTop = useMotionValue(0);

  const xThirdBottom = useMotionValue(0);
  const yThirdBottom = useMotionValue(0);

  const xThirdRightTop = useMotionValue(0);
  const yThirdRightTop = useMotionValue(0);

  const xThirdRightBottom = useMotionValue(0);
  const yThirdRightBottom = useMotionValue(0);

  const xLeft = useMotionValue(0);
  const yLeft = useMotionValue(0);

  const xRight = useMotionValue(0);
  const yRight = useMotionValue(0);

  let elemRectThirdSquareLeftTop: HTMLElement | null;
  let rectThirdSquareLeftTop: DOMRect;

  let elemRectThirdSquareLeftBottom: HTMLElement | null;
  let rectThirdSquareLeftBottom: DOMRect;

  let elemRectThirdSquareRightTop: HTMLElement | null;
  let rectThirdSquareRightTop: DOMRect;

  let elemRectThirdSquareRightBottom: HTMLElement | null;
  let rectThirdSquareRightBottom: DOMRect;

  let elemRectLeft: HTMLElement | null;
  let rectLeft: DOMRect;

  let elemRectRight: HTMLElement | null;
  let rectRight: DOMRect;

  useEffect(() => {
    elemRectThirdSquareLeftTop = document.getElementById(
      "id_thirdSquareLeftTop"
    );
    if (elemRectThirdSquareLeftTop) {
      rectThirdSquareLeftTop =
        elemRectThirdSquareLeftTop.getBoundingClientRect();
    }

    elemRectThirdSquareLeftBottom = document.getElementById(
      "id_thirdSquareLeftBottom"
    );
    if (elemRectThirdSquareLeftBottom) {
      rectThirdSquareLeftBottom =
        elemRectThirdSquareLeftBottom.getBoundingClientRect();
    }

    elemRectThirdSquareRightTop = document.getElementById(
      "id_thirdSquareRightTop"
    );
    if (elemRectThirdSquareRightTop) {
      rectThirdSquareRightTop =
        elemRectThirdSquareRightTop.getBoundingClientRect();
    }

    elemRectThirdSquareRightBottom = document.getElementById(
      "id_thirdSquareRightBottom"
    );
    if (elemRectThirdSquareRightBottom) {
      rectThirdSquareRightBottom =
        elemRectThirdSquareRightBottom.getBoundingClientRect();
    }

    elemRectLeft = document.getElementById("id_leftSquare");
    if (elemRectLeft) {
      rectLeft = elemRectLeft.getBoundingClientRect();
    }

    elemRectRight = document.getElementById("id_leftSquare");
    if (elemRectRight) {
      rectRight = elemRectRight.getBoundingClientRect();
    }
  }, []);

  const getMousePosition = (e: PointerEvent<HTMLDivElement>) => {
    if (e.movementX !== 0) {
      const xThirdSquareTop = e.clientX <= rectThirdSquareLeftTop.x;
      const yThirdSquareTop = e.clientY <= rectThirdSquareLeftTop.y;

      const xThirdSquareBottom = e.clientX <= rectThirdSquareLeftBottom.x;
      const yThirdSquareBottom = e.clientY <= rectThirdSquareLeftBottom.y;

      const xThirdSquareRightTop = e.clientX <= rectThirdSquareRightTop.x;
      const yThirdSquareRightTop = e.clientY <= rectThirdSquareRightTop.y;

      const xThirdSquareRightBottom = e.clientX <= rectThirdSquareRightBottom.x;
      const yThirdSquareRightBottom = e.clientY <= rectThirdSquareRightBottom.y;

      const xLeftSquare = e.clientX <= rectLeft.x;
      const yLeftSquare = e.clientY <= rectLeft.y;

      const xRightSquare = e.clientX <= rectRight.x;
      const yRightSquare = e.clientY <= rectRight.y;

      // *************************** left TOP *****************************
      if (xThirdSquareTop) {
        const moveToDo =
          -Math.abs(-rectThirdSquareLeftTop.x + e.clientX) * 0.05 > -50
            ? -Math.abs(-rectThirdSquareLeftTop.x + e.clientX) * 0.05
            : -50;
        xThirdTop.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientX - rectThirdSquareLeftTop.x) * 0.05 <= 30
            ? Math.abs(-rectThirdSquareLeftTop.x + e.clientX) * 0.05
            : 30;
        xThirdTop.set(moveToDo);
      }
      if (yThirdSquareTop) {
        const moveToDo =
          -Math.abs(-rectThirdSquareLeftTop.y + e.clientY) * 0.25 > -50
            ? -Math.abs(-rectThirdSquareLeftTop.y + e.clientY) * 0.05
            : -50;
        yThirdTop.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectThirdSquareLeftTop.y) * 0.05 <= 30
            ? Math.abs(-rectThirdSquareLeftTop.y + e.clientY) * 0.05
            : 30;
        yThirdTop.set(moveToDo);
      }

      // *************************** left BOTTOM *****************************

      if (xThirdSquareBottom) {
        const moveToDo =
          -Math.abs(-rectThirdSquareLeftBottom.x + e.clientX) * 0.05 > -50
            ? -Math.abs(-rectThirdSquareLeftBottom.x + e.clientX) * 0.05
            : -50;
        xThirdBottom.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientX - rectThirdSquareLeftBottom.x) * 0.05 <= 30
            ? Math.abs(-rectThirdSquareLeftBottom.x + e.clientX) * 0.05
            : 30;
        xThirdBottom.set(moveToDo);
      }
      if (yThirdSquareBottom) {
        const moveToDo =
          -Math.abs(-rectThirdSquareLeftBottom.y + e.clientY) * 0.05 > -30
            ? -Math.abs(-rectThirdSquareLeftBottom.y + e.clientY) * 0.05
            : -30;
        yThirdBottom.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectThirdSquareLeftBottom.y) * 0.05 <= 50
            ? Math.abs(-rectThirdSquareLeftBottom.y + e.clientY) * 0.05
            : 50;
        yThirdBottom.set(moveToDo);
      }

      // *************************** Right TOP *****************************

      if (xThirdSquareRightTop) {
        const moveToDo =
          -Math.abs(-rectThirdSquareRightTop.x + e.clientX) * 0.05 > -30
            ? -Math.abs(-rectThirdSquareRightTop.x + e.clientX) * 0.05
            : -30;
        xThirdRightTop.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(-rectThirdSquareRightTop.x + e.clientX) * 0.05 < 50
            ? Math.abs(-rectThirdSquareRightTop.x + e.clientX) * 0.05
            : 50;
        xThirdRightTop.set(moveToDo);
      }

      if (yThirdSquareRightTop) {
        const moveToDo =
          -Math.abs(-rectThirdSquareRightTop.y + e.clientY) * 0.25 > -50
            ? -Math.abs(-rectThirdSquareRightTop.y + e.clientY) * 0.05
            : -50;
        yThirdRightTop.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectThirdSquareRightTop.y) * 0.05 <= 30
            ? Math.abs(-rectThirdSquareRightTop.y + e.clientY) * 0.05
            : 30;
        yThirdRightTop.set(moveToDo);
      }
      // *************************** Right BOTTOM *****************************

      if (xThirdSquareRightBottom) {
        const moveToDo =
          -Math.abs(-rectThirdSquareRightBottom.x + e.clientX) * 0.05 > -30
            ? -Math.abs(-rectThirdSquareRightBottom.x + e.clientX) * 0.05
            : -30;
        xThirdRightBottom.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientX - rectThirdSquareRightBottom.x) * 0.05 <= 50
            ? Math.abs(-rectThirdSquareRightBottom.x + e.clientX) * 0.05
            : 50;
        xThirdRightBottom.set(moveToDo);
      }

      if (yThirdSquareRightBottom) {
        const moveToDo =
          -Math.abs(-rectThirdSquareRightBottom.y + e.clientY) * 0.05 > -30
            ? -Math.abs(-rectThirdSquareRightBottom.y + e.clientY) * 0.05
            : -30;
        yThirdRightBottom.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectThirdSquareRightBottom.y) * 0.05 <= 50
            ? Math.abs(-rectThirdSquareRightBottom.y + e.clientY) * 0.05
            : 50;
        yThirdRightBottom.set(moveToDo);
      }

      // *************************** left *****************************

      if (xLeftSquare) {
        const moveToDo =
          -Math.abs(-rectLeft.x + e.clientX) * 0.05 > -30
            ? -Math.abs(-rectLeft.x + e.clientX) * 0.05
            : -30;
        xLeft.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientX - rectLeft.x) * 0.05 <= 10
            ? Math.abs(-rectLeft.x + e.clientX) * 0.05
            : 10;
        xLeft.set(moveToDo);
      }

      if (yLeftSquare) {
        const moveToDo =
          -Math.abs(-rectLeft.y + e.clientY) * 0.25 > -45
            ? -Math.abs(-rectLeft.y + e.clientY) * 0.15
            : -45;
        yLeft.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectLeft.y) * 0.05 <= 45
            ? Math.abs(-rectLeft.y + e.clientY) * 0.05
            : 45;
        yLeft.set(moveToDo);
      }
      // *************************** right *****************************

      if (xRightSquare) {
        const moveToDo =
          -Math.abs(-rectRight.x + e.clientX) * 0.05 > -10
            ? -Math.abs(-rectRight.x + e.clientX) * 0.05
            : -10;
        xRight.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientX - rectRight.x) * 0.05 <= 30
            ? Math.abs(-rectRight.x + e.clientX) * 0.05
            : 30;
        xRight.set(moveToDo);
      }

      if (yRightSquare) {
        const moveToDo =
          -Math.abs(-rectRight.y + e.clientY) * 0.25 > -45
            ? -Math.abs(-rectRight.y + e.clientY) * 0.15
            : -45;
        yRight.set(moveToDo);
      } else {
        const moveToDo =
          Math.abs(e.clientY - rectRight.y) * 0.05 <= 45
            ? Math.abs(-rectRight.y + e.clientY) * 0.05
            : 45;
        yRight.set(moveToDo);
      }
    }

    // } else {
    //   //   xThirdTop.set(0);
    //   //   yThirdTop.set(0);
    // }
  };

  //   const checkForMouseStop = (e: PointerEvent<HTMLDivElement>) => {
  //     console.log("mouse: " + e.movementX);
  //   };

  return (
    <div className="">
      {/* <div className={`${styles.backgroundheight}`}> */}
      <motion.div
        onPointerMove={getMousePosition}
        className={`${styles.backgroundheight}`}
      >
        <div
          className={`row align-items-center justify-content-center ${styles.paddingTop}`}
        >
          <motion.div
            id="id_thirdSquareLeftTop"
            style={{ x: xThirdTop, y: yThirdTop, rotateZ: "45deg" }}
            className={`${styles.thirdSquareLeftTop} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareLeftBottom"
            style={{ x: xThirdBottom, y: yThirdBottom, rotateZ: "45deg" }}
            className={`${styles.thirdSquareLeftBottom} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareRightTop"
            style={{ x: xThirdRightTop, y: yThirdRightTop, rotateZ: "45deg" }}
            className={`${styles.thirdSquareRightTop} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareRightBottom"
            style={{
              x: xThirdRightBottom,
              y: yThirdRightBottom,
              rotateZ: "45deg",
            }}
            className={`${styles.thirdSquareRightBottom} position-absolute`}
          />
          <motion.div
            id="id_leftSquare"
            style={{ x: xLeft, y: yLeft, rotateZ: "45deg" }}
            className={`${styles.secondSquareLeft} position-absolute`}
          />
          <motion.div
            id="id_rightSquare"
            style={{ x: xRight, y: yRight, rotateZ: "45deg" }}
            className={`${styles.secondSquareRight} position-absolute`}
          />
          <div className={`${styles.mainSquare} row justify-content-center`}>
            <Image
              src={picture}
              alt="Photo Luke"
              className={`${styles.profileimage}`}
            />
          </div>
        </div>
        <div>
          <h1
            className={`${plus_jakarta_sans.className} text-center ${styles.marginTop}`}
          >
            Luke Fitzpatrick
          </h1>
          <h2
            className={`${plus_jakarta_sans.className} text-center fs-4 mt-3 text-secondary`}
          >
            {title}
          </h2>
        </div>
      </motion.div>
    </div>
    // </div>
  );
};

export default SquaresBackground;
