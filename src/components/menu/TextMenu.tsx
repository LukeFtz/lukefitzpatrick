import React, { useEffect } from "react";
import $ from "jquery";
import { motion, useMotionValue, useScroll } from "framer-motion";
import { TextMenuProps } from "@/utilitities/types";
import { returnPositionY } from "@/utilitities/functions";
import { Plus_Jakarta_Sans } from "@next/font/google";

// import { Container } from './styles';

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const TextMenu: React.FC<TextMenuProps> = ({
  position,
  backendData,
  frontendData,
  othersData,
  prototypeData,
  size,
  window,
}: TextMenuProps) => {
  const valuePrototype = returnPositionY({
    size: size.height,
    text: "PROTOTYPE",
    window,
  });

  const valueFrontend = returnPositionY({
    size: size.height,
    text: "FRONTEND",
    window,
  });

  const valueBackend = returnPositionY({
    size: size.height,
    text: "BACKEND",
    window,
  });

  const valueOther = returnPositionY({
    size: size.height,
    text: "OTHERS",
    window,
  });

  const newPosition = useMotionValue<string>("absolute");
  const circleWidth = useMotionValue(size.width);
  const circleHeight = useMotionValue(size.height);

  const topPrototype = useMotionValue(valuePrototype);
  const topFrontend = useMotionValue(valueFrontend);
  const topBackend = useMotionValue(valueBackend);
  const topOthers = useMotionValue(valueOther);

  //   useEffect(() => {
  //     const contenddiv = $("#id_text_label_div");

  //     if (scrollYProgress.get() <= 0) {
  //       position.set("relative");
  //       contentDiv.removeClass("align-items-end");
  //     } else if (scrollYProgress.get() > 0 && scrollYProgress.get() < 1) {
  //       position.set("fixed");
  //     } else {
  //       contentDiv.addClass("align-items-end");
  //       position.set("relative");
  //     }

  //   }, []);

  useEffect(() => {
    if (position.get() === "relative") {
      //   newPosition.set("absolute");
    } else {
      newPosition.set("fixed");
    }
  }, [position]);

  return (
    <motion.div id="id_text_label_div">
      <motion.div
        style={{
          position: newPosition,
          top: 0,
          left: 0,
        }}
      >
        <motion.div
          style={{
            left: prototypeData.positionLeft,
            top: topPrototype,
            position: newPosition,
            width: circleWidth,
            height: circleHeight,
          }}
          className="row text-center align-items-center"
        >
          <p className={`${plus_jakarta_sans.className} fs-2 ms-2`}>
            Prototype
          </p>
        </motion.div>
        <motion.div
          style={{
            left: frontendData.positionLeft,
            top: topFrontend,
            position: newPosition,
            width: circleWidth,
            height: circleHeight,
          }}
          className="row text-center align-items-center"
        >
          <p className={`${plus_jakarta_sans.className} fs-2 ms-2`}>Frontend</p>
        </motion.div>
        <motion.div
          style={{
            left: backendData.positionLeft,
            top: topBackend,
            position: newPosition,
            width: circleWidth,
            height: circleHeight,
          }}
          className="row text-center align-items-center"
        >
          <p className={`${plus_jakarta_sans.className} fs-2 ms-2`}>Backend</p>
        </motion.div>
        <motion.div
          style={{
            left: othersData.positionLeft,
            top: topOthers,
            position: newPosition,
            width: circleWidth,
            height: circleHeight,
          }}
          className="row text-center align-items-center"
        >
          <p className={`${plus_jakarta_sans.className} fs-2 ms-2`}>Others</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default React.memo(TextMenu);
