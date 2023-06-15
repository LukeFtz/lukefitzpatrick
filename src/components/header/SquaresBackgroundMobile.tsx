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

const SquaresBackgroundMobile: React.FC<headerContent> = ({
  title,
}: headerContent) => {
  const xThirdTop = useMotionValue(30);
  const yThirdTop = useMotionValue(30);
  const oThirdTop = useMotionValue(0);

  const xThirdBottom = useMotionValue(30);
  const yThirdBottom = useMotionValue(-30);
  const oThirdBottom = useMotionValue(0);

  const xThirdRightTop = useMotionValue(-30);
  const yThirdRightTop = useMotionValue(30);
  const oThirdRightTop = useMotionValue(0);

  const xThirdRightBottom = useMotionValue(-30);
  const yThirdRightBottom = useMotionValue(-30);
  const oThirdRightBottom = useMotionValue(0);

  const yLeft = useMotionValue(30);
  const oLeft = useMotionValue(0);

  const yRight = useMotionValue(-30);
  const oRight = useMotionValue(0);

  const oMain = useMotionValue(0);

  const animateThirds = () => {
    animate(oThirdTop, 1, {
      duration: 0.5,
    });
    animate(xThirdTop, 0, {
      duration: 0.5,
    });
    animate(yThirdTop, 0, {
      duration: 0.5,
    });

    animate(oThirdBottom, 1, {
      duration: 0.5,
    });
    animate(xThirdBottom, 0, {
      duration: 0.5,
    });
    animate(yThirdBottom, 0, {
      duration: 0.5,
    });

    animate(oThirdRightTop, 1, {
      duration: 0.5,
    });
    animate(xThirdRightTop, 0, {
      duration: 0.5,
    });
    animate(yThirdRightTop, 0, {
      duration: 0.5,
    });

    animate(oThirdRightBottom, 1, {
      duration: 0.5,
    });
    animate(xThirdRightBottom, 0, {
      duration: 0.5,
    });
    animate(yThirdRightBottom, 0, {
      duration: 0.5,
    });
  };

  const animateSeconds = () => {
    animate(oLeft, 1, {
      duration: 0.5,
    });

    animate(oRight, 1, {
      duration: 0.5,
      onComplete: animateThirds,
    });

    animate(yLeft, 0, {
      duration: 0.5,
    });

    animate(yRight, 0, {
      duration: 0.5,
    });
  };

  const animateMain = () => {
    animate(oMain, 1, {
      duration: 0.5,
      bounce: 0.25,
      onComplete: animateSeconds,
    });
  };

  useEffect(() => {
    animateMain();
  }, []);

  return (
    <div className="">
      {/* <div className={`${styles.backgroundheight}`}> */}
      <div className={`${styles.backgroundheight}`}>
        <div
          className={`row align-items-center justify-content-center ${styles.paddingTop}`}
        >
          <motion.div
            id="id_thirdSquareLeftTop"
            style={{
              x: xThirdTop,
              y: yThirdTop,
              rotateZ: "45deg",
              opacity: oThirdTop,
            }}
            className={`${styles.thirdSquareLeftTop} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareLeftBottom"
            style={{
              x: xThirdBottom,
              y: yThirdBottom,
              rotateZ: "45deg",
              opacity: oThirdBottom,
            }}
            className={`${styles.thirdSquareLeftBottom} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareRightTop"
            style={{
              x: xThirdRightTop,
              y: yThirdRightTop,
              rotateZ: "45deg",
              opacity: oThirdRightTop,
            }}
            className={`${styles.thirdSquareRightTop} position-absolute`}
          />
          <motion.div
            id="id_thirdSquareRightBottom"
            style={{
              x: xThirdRightBottom,
              y: yThirdRightBottom,
              rotateZ: "45deg",
              opacity: oThirdRightBottom,
            }}
            className={`${styles.thirdSquareRightBottom} position-absolute`}
          />
          <motion.div
            id="id_leftSquare"
            style={{ y: yLeft, rotateZ: "45deg", opacity: oLeft }}
            className={`${styles.secondSquareLeft} position-absolute`}
          />
          <motion.div
            id="id_rightSquare"
            style={{ y: yRight, rotateZ: "45deg", opacity: oRight }}
            className={`${styles.secondSquareRight} position-absolute`}
          />
          <motion.div
            style={{ opacity: oMain }}
            className={`${styles.mainSquare} row justify-content-center`}
          >
            <Image
              src={picture}
              alt="Photo Luke"
              className={`${styles.profileimage}`}
            />
          </motion.div>
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
      </div>
    </div>
    // </div>
  );
};

export default SquaresBackgroundMobile;
