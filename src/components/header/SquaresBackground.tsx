import Image from "next/image";
import React, { useEffect } from "react";
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
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const xVelocity = useVelocity(mouseX);

  let elemRectThirdSquareLeftTop: HTMLElement | null;
  let rectThirdSquareLeftTop: DOMRect;

  useEffect(() => {
    elemRectThirdSquareLeftTop = document.getElementById(
      "id_thirdSquareLeftTop"
    );
    if (elemRectThirdSquareLeftTop) {
      rectThirdSquareLeftTop =
        elemRectThirdSquareLeftTop.getBoundingClientRect();
    }
  }, []);

  const getMousePosition = (e: React.PointerEvent<HTMLDivElement>) => {
    // console.log("movement " + e.movementX);
    // console.log("Client " + e.clientX);
    mouseY.set(e.clientX);

    console.log(xVelocity.getVelocity());

    if (e.movementX !== 0) {
      const xThirdSquareTop = e.clientX < rectThirdSquareLeftTop.x;
      const wThirdSquareTop =
        e.clientX > rectThirdSquareLeftTop.width + rectThirdSquareLeftTop.x;

      if (xThirdSquareTop || wThirdSquareTop) {
        if (xThirdSquareTop) {
          mouseX.set(-Math.abs(-rectThirdSquareLeftTop.x + e.clientX) * 0.4);
          //   mouseX.set(-50);
        }
        mouseY.set(e.clientY);
      }
    } else {
      //   mouseX.set(0);
      //   mouseY.set(0);
    }
  };

  return (
    <div className="">
      <div className={`${styles.backgroundheight}`}>
        <motion.div onPointerMove={getMousePosition}>
          <div
            className={`row align-items-center justify-content-center ${styles.marginTop}`}
          >
            <motion.div
              id="id_thirdSquareLeftTop"
              style={{ marginLeft: mouseX }}
              className={`${styles.thirdSquareLeftTop} position-absolute`}
            />
            <div
              className={`${styles.thirdSquareLeftBottom} position-absolute`}
            />
            <div
              className={`${styles.thirdSquareRightTop} position-absolute`}
            />
            <div
              className={`${styles.thirdSquareRightBottom} position-absolute`}
            />
            <div className={`${styles.secondSquareLeft} position-absolute`} />
            <div className={`${styles.secondSquareRight} position-absolute`} />
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
    </div>
  );
};

export default SquaresBackground;
