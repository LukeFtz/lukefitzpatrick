import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import $ from "jquery";
import { useAppSelector } from "@/store/hooks";
import {
  positionY,
  scalePrototype,
} from "@/store/redures/backgroundLineReducer";

const BackgroundLine: React.FC = () => {
  const y = useMotionValue<number>(0);
  const prototypeY = useMotionValue<number>(0);
  const positionTop = useAppSelector(positionY);
  const scaleYPrototype = useAppSelector(scalePrototype);

  const svgLine = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgLine,
  });

  const firstLine = useTransform(scrollYProgress, [0.25, 0.3], [0, 1]);
  const firstCurveLine = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);
  const prototypeLine = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const prototypeBottomCurve = useTransform(
    scrollYProgress,
    [0.45, 0.47],
    [0, 1]
  );

  const prototypeBottomLine = useTransform(
    scrollYProgress,
    [0.47, 0.48],
    [0, 1]
  );

  const frontendTopCurve = useTransform(scrollYProgress, [0.48, 0.49], [0, 1]);
  const frontendVertical = useTransform(scrollYProgress, [0.49, 0.7], [0, 1]);
  const frontendBottomCurve = useTransform(
    scrollYProgress,
    [0.75, 0.8],
    [0, 1]
  );

  useEffect(() => {
    if (positionTop) {
      y.set(positionTop);
    }
  }, [positionTop]);

  useEffect(() => {
    if (scaleYPrototype) {
      const auxValue = (50 * (scaleYPrototype - 1)) / 0.5;
      prototypeY.set(auxValue);
    }
  }, [scaleYPrototype]);

  return (
    <div ref={svgLine}>
      <motion.svg
        //   width="1550"
        //   height="5412.5"
        viewBox="0 0 1550 5412.5"
        fill="none"
        version="1.1"
        id="svg7431"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y }}
        className="mt-5 pt-3"
      >
        {/* <motion.path
          d="M 296.5,5.0000217 H 148.453 90.978384 m 0,0 H 76.7268 c 0,0 -71.7265303,0 -71.7267903,50.4140003 -1.7e-6,0.323134 -3.1e-6,7.500621 -4.2e-6,20.638243 m 0,0 c -1.24e-5,142.362035 3.7e-6,984.583835 4.2e-6,1388.841835 m 0,0 v 18.0559 c 0,0 3e-5,66.16 71.7267903,66.16 H 1470.52 c 0,0 74.48,0 74.48,97.21 V 2739 3724 c 0,85.5 -105.5,82.5 -105.5,82.5 H 76.7268 c -71.7267603,0 -71.7267903,90 -71.7267903,90 V 5320 c 0,87.5 71.7267903,87.5 71.7267903,87.5 H 507.5"
          //   stroke="#00681d"
          strokeWidth={10}
          id="path7429"
          style={{ pathLength: scrollYProgress }}
          //   style={{ display: "none" }}
        /> */}

        <motion.path
          d="M 296.5,5.0000217 H 148.453 90.978384"
          stroke="#00681d"
          strokeWidth={10}
          id="id_first_line_background"
          style={{ pathLength: firstLine }}
          //   style={{ display: "inline" }}
        />

        <motion.path
          d="M 90.978384,5.0000217 H 76.7268 c 0,0 -71.7265303,0 -71.7267903,50.4140003 -1.7e-6,0.323134 -3.1e-6,7.500621 -4.2e-6,20.638243"
          stroke="#00681d"
          strokeWidth={10}
          id="id_curve_top_prototype"
          style={{ pathLength: firstCurveLine }}

          //   style={{ display: "inline" }}
        />

        <motion.path
          d="m 5.0000055,76.052265 c -1.24e-5,142.362035 3.7e-6,984.583835 4.2e-6,1388.841835"
          stroke="#00681d"
          strokeWidth={10}
          id="id_vertical_prototype_line"
          transform={`matrix(1 0 0 ${scaleYPrototype} 0 -${prototypeY.get()})`}
          style={{
            pathLength: prototypeLine,
          }}

          //   style={{ display: "inline" }}
        />

        <motion.path
          d="m 5.0000097,1464.8941 v 18.0559 c 0,0 3e-5,66.16 71.7267903,66.16"
          stroke="#00681d"
          strokeWidth={10}
          id="id_curver_prototype_bottom"
          style={{
            pathLength: prototypeBottomCurve,
            y: prototypeY.get() * 13,
            // translateY: prototypeY.get() * 13,
          }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="M 76.7268,1549.11 H 1470.52"
          stroke="#00681d"
          strokeWidth={10}
          id="id_prototype_bottom"
          style={{ pathLength: prototypeBottomLine }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="m 1470.52,1549.11 c 0,0 74.48,0 74.48,97.21"
          stroke="#00681d"
          strokeWidth={10}
          id="id_frontend_curve"
          style={{ pathLength: frontendTopCurve }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="M 1545,1646.32 V 2739 3724"
          stroke="#00681d"
          strokeWidth={10}
          id="id_frontend_vertical"
          style={{ pathLength: frontendVertical }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="m 1545,3724 c 0,85.5 -105.5,82.5 -105.5,82.5"
          stroke="#00681d"
          strokeWidth={10}
          id="id_frontend_bottom_curve"
          style={{ pathLength: frontendBottomCurve }}
          //   style={{ display: "inline" }}
        />
        <motion.path
          d="M 1439.5,3806.5 H 76.7268"
          stroke="#00681d"
          strokeWidth={10}
          id="path8036"
          style={{ pathLength: scrollYProgress }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="m 76.7268,3806.5 c -54.415406,0 -67.5486582,51.7993 -70.7183909,76.803 -1.0083977,7.9545 -1.0083994,13.197 -1.0083994,13.197"
          stroke="#00681d"
          strokeWidth={10}
          id="path8038"
          style={{ pathLength: scrollYProgress }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="M 5.0000097,3896.5 V 5320"
          stroke="#00681d"
          strokeWidth={10}
          id="path8040"
          style={{ pathLength: scrollYProgress }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="m 5.0000097,5320 c 0,87.5 71.7267903,87.5 71.7267903,87.5"
          stroke="#00681d"
          strokeWidth={10}
          id="path8042"
          style={{ pathLength: scrollYProgress }}

          //   style={{ display: "inline" }}
        />
        <motion.path
          d="M 76.7268,5407.5 H 507.5"
          stroke="#00681d"
          strokeWidth={10}
          id="path8044"
          style={{ pathLength: scrollYProgress }}

          //   style={{ display: "inline" }}
        />
      </motion.svg>
    </div>
  );
};

export default BackgroundLine;
