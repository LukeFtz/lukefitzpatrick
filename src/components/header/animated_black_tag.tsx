import React, { SVGProps, useEffect } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import { useDispatch } from "react-redux";
import { started } from "@/store/redures/headerReducer";

const BlackTagHeader = (props: SVGProps<SVGSVGElement>) => {
  const blackTagX = useMotionValue(0);
  const transparentTagX = useMotionValue(1);

  const gray = useMotionValue(0.00001);
  const transparentGray = useMotionValue(0.00009);

  const blackLine = useMotionValue(1);
  const transparentLine = useMotionValue(1);

  const dispatch = useDispatch();

  const defineBlackLine = () => {
    animate(blackLine, 0.00009, {
      ease: [0, 0.3, 0.6, 1],
      duration: 1.5,
    });
    animate(transparentLine, 0, {
      duration: 1.5,
      ease: [0, 0.3, 0.6, 1],
    });
  };

  const defineGray = () => {
    animate(gray, 1, {
      duration: 0.5,
      type: "spring",
      onComplete: () => {
        defineBlackLine();
        dispatch(started());
      },
    });
    animate(transparentGray, 0, {
      duration: 0.5,
      type: "spring",
    });
  };

  useEffect(() => {
    animate(blackTagX, 0.00009, {
      ease: [0, 0.3, 0.2, 1.01],
      duration: 1.5,
      delay: 0.5,
      onComplete: () => defineGray(),
    });
    animate(transparentTagX, 0, {
      duration: 1.5,
      delay: 0.5,
      ease: [0, 0.3, 0.2, 1.01],
    });
  }, []);

  return (
    <motion.svg
      viewBox="0 0 1728 622"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className="blackTagHeader"
    >
      <motion.defs>
        <motion.linearGradient id="grad">
          <motion.stop offset={transparentTagX} stopColor="transparent" />
          <motion.stop offset={blackTagX} stopColor="black" />
        </motion.linearGradient>
        <motion.linearGradient id="gray">
          <motion.stop offset={gray} stopColor="#D9D9D9" />
          <motion.stop offset={transparentGray} stopColor="transparent" />
        </motion.linearGradient>
        <motion.linearGradient id="id_blackline">
          <motion.stop offset={transparentLine} stopColor="transparent" />
          <motion.stop offset={blackLine} stopColor="black" />
        </motion.linearGradient>
      </motion.defs>

      <motion.path
        d="M0 608h973.5l50.5 14H0v-14z"
        fill="url(#id_blackline)"
        preserveAspectRatio="none"
      />

      <motion.path d="M625 509V0l399 622-399-113z" fill="url(#gray)" />
      <motion.path
        id="id_main_black_tag"
        d="M625 0h1103v509H625V0z"
        fill="url(#grad)"
      />
    </motion.svg>
  );
};

export default BlackTagHeader;
