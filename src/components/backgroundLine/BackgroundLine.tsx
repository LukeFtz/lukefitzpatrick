import React, { useEffect, useRef, useState } from "react";
import {
  circOut,
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
import { Plus_Jakarta_Sans } from "@next/font/google";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

let width = 0;
let height = 0;

const STROKE = 20;
const PADDING = 5;

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

  const firstLine = useTransform(scrollYProgress, [0.1, 0.12], [0, 1]);
  const firstCurveLine = useTransform(scrollYProgress, [0.12, 0.18], [0, 1]);
  const prototypeLine = useTransform(scrollYProgress, [0.18, 0.2], [0, 1]);
  const prototypeBottomCurve = useTransform(
    scrollYProgress,
    [0.2, 0.3],
    [0, 1]
  );

  const prototypeBottomLine = useTransform(
    scrollYProgress,
    [0.3, 0.32],
    [0, 1]
  );

  const frontendTopCurve = useTransform(scrollYProgress, [0.48, 0.5], [0, 1]);
  const frontendVertical = useTransform(scrollYProgress, [0.5, 0.94], [0, 1]);
  const frontendBottomCurve = useTransform(
    scrollYProgress,
    [0.94, 0.95],
    [0, 1]
  );
  const frontendBottomLine = useTransform(
    scrollYProgress,
    [0.95, 0.96],
    [0, 1]
  );
  const backendTopCurve = useTransform(scrollYProgress, [0.96, 0.97], [0, 1]);
  const backendVerticalLine = useTransform(
    scrollYProgress,
    [0.97, 0.99],
    [0, 1]
  );
  const othersBottomCurve = useTransform(
    scrollYProgress,
    [0.99, 0.999],
    [0, 1]
  );
  const othersLine = useTransform(scrollYProgress, [0.999, 1], [0, 1]);

  const defineValues = () => {
    const aspectRatio = Math.round((width / height) * 100) / 100;

    if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
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
      textOthers.set(6000);
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
      if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
        // verify devices
        scaleY = (lineVerticalLine * 1.1) / line;
        extraTopPadding = curvePrototype * 8;
      } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
        scaleY = lineVerticalLine / line;
        extraTopPadding = curvePrototype * 6;
      } else if (aspectRatio >= 1.5 && aspectRatio < 1.6) {
        // Verify devices
        scaleY = lineVerticalLine / line;
        extraTopPadding = curvePrototype * 6;
      } else if (aspectRatio >= 1.6 && aspectRatio < 1.7) {
        // verify devices
        scaleY = lineVerticalLine / line;
        extraTopPadding = curvePrototype * 6;
      } else if (aspectRatio >= 1.7 && aspectRatio < 1.8) {
        scaleY = (line + height / 1.6) / lineVerticalLine;
        extraTopPadding = curvePrototype * 1.45;
      } else {
        scaleY = (line + height / 2) / lineVerticalLine;
        extraTopPadding = curvePrototype * 0.6;
      }

      yPrototypeSize.set(Math.round(scaleY * 100) / 100);
      const auxValue = Math.abs(line - lineVerticalLine);
      setText(auxValue);

      prototypeY.set(curvePrototype + extraTopPadding);
      if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
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
        marginTopFrontendProto.set(auxValue * 0.65);
        marginTopPrototype.set(auxValue * 0.6);
      } else {
        marginTopFrontendProto.set(auxValue * 0.48);
        marginTopPrototype.set(auxValue * 0.4);
      }
    }

    const frontendSize = $("#id_frontend_div").height();
    const frontendLine = $("#id_frontend_path_vertical").height();

    if (frontendSize && frontendLine) {
      let scaleY2: number;

      let auxValueFront: number;

      if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
        // Verify devices
        scaleY2 = frontendSize / 1185;
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = Math.abs((50 * (yFrontendSize.get() - 1)) / 0.5);
        marginTopFrontend.set(Math.abs(frontendSize - frontendLine) * 155);
      } else if (aspectRatio >= 1.4 && aspectRatio < 1.5) {
        scaleY2 = frontendSize / 1300;
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 2.1 - 50;
        marginTopFrontend.set(auxValueFront * 54);
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
        scaleY2 = frontendSize / (frontendLine - 50);
        yFrontendSize.set(scaleY2);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 6;
        marginTopFrontend.set(auxValueFront * 5.3);
      } else {
        scaleY2 = frontendSize / frontendLine;
        yFrontendSize.set(Math.round(scaleY2 * 100) / 100);
        auxValueFront = ((50 * (yFrontendSize.get() - 1)) / 0.5) * 6;
        marginTopFrontend.set(auxValueFront * 7.2);
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
      {/* <p>{text}</p> */}
      <motion.svg
        //   width="1550"
        //   height="5412.5"
        // viewBox="0 0 1550 5412.5"
        viewBox={`0 0 1550 ${viewBoxY.get()}`}
        fill="none"
        // version="1.1"
        id="svg7431"
        xmlns="http://www.w3.org/2000/svg"
        style={{ y }}
        className="mt-5 pt-3"
      >
        <motion.path
          d="M 296.5,5.0000217 H 148.453 90.978384"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_first_line_background"
          style={{ pathLength: firstLine, y: PADDING }}
        />

        <motion.path
          d="M 90.978384,5.0000217 H 76.7268 c 0,0 -71.7265303,0 -71.7267903,50.4140003 -1.7e-6,0.323134 -3.1e-6,7.500621 -4.2e-6,20.638243"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_curve_top_prototype"
          style={{
            pathLength: firstCurveLine,
            y: PADDING,
            x: PADDING,
            height: 50,
          }}
        />

        <motion.path
          d="m 5.0000055,76.052265 c -1.24e-5,142.362035 3.7e-6,984.583835 4.2e-6,1388.841835"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_vertical_prototype_line"
          // transform={`matrix(1 0 0 ${scaleYPrototype} 0 -${prototypeY.get()})`}
          // transform={`matrix(1 0 0 ${yPrototypeSize.get()} 0 -${prototypeY.get()})`}
          style={{
            pathLength: prototypeLine,
            x: PADDING,
            scaleY: yPrototypeSize,
            y: prototypeY,
            height: 1400,
          }}
        />

        <motion.path
          d="m 5.0000097,1464.8941 v 18.0559 c 0,0 3e-5,66.16 71.7267903,66.16"
          stroke="#00681d"
          strokeWidth={STROKE}
          height={799}
          id="id_curver_prototype_bottom"
          style={{
            pathLength: prototypeBottomCurve,
            y: marginTopPrototype,
            x: PADDING,
            // translateY: prototypeY.get() * 13,
          }}
        />
        <motion.path
          d="M 76.7268,1549.11 H 1470.52"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_prototype_bottom"
          style={{
            pathLength: prototypeBottomLine,
            y: marginTopPrototype,
            x: -PADDING,
          }}
        />
        <motion.path
          d="m 1470.52,1549.11 c 0,0 74.48,0 74.48,97.21"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_curve"
          style={{
            pathLength: frontendTopCurve,
            y: marginTopPrototype,
            x: -PADDING,
          }}
        />
        <motion.g style={{ scaleY: yFrontendSize, y: frontendY }}>
          <motion.path
            d="M 1545,1646.32 V 2739 3724"
            stroke="#00681d"
            strokeWidth={STROKE}
            // height={yFrontendDefault.get()}
            id="id_frontend_path_vertical"
            style={{
              pathLength: frontendVertical,
              y: marginTopFrontendProto,
              x: -PADDING,
              height: 2003,
            }}
          />
        </motion.g>
        <motion.path
          d="m 1545,3724 c 0,85.5 -105.5,82.5 -105.5,82.5"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_bottom_curve"
          style={{
            pathLength: frontendBottomCurve,
            y: marginTopFrontend,
            x: -PADDING,
          }}
        />
        <motion.path
          d="M 1439.5,3806.5 H 76.7268"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_frontend_bottom"
          style={{
            pathLength: frontendBottomLine,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          d="m 76.7268,3806.5 c -54.415406,0 -67.5486582,51.7993 -70.7183909,76.803 -1.0083977,7.9545 -1.0083994,13.197 -1.0083994,13.197"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_backend_curve_top"
          style={{
            pathLength: backendTopCurve,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          d="M 5.0000097,3896.5 V 5320"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_backend_vertical_line"
          style={{
            pathLength: backendVerticalLine,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          d="m 5.0000097,5320 c 0,87.5 71.7267903,87.5 71.7267903,87.5"
          stroke="#00681d"
          strokeWidth={STROKE}
          id="id_others_bottom_curve"
          style={{
            pathLength: othersBottomCurve,
            y: marginTopFrontend,
            x: PADDING,
          }}
        />
        <motion.path
          d="M 76.7268,5407.5 H 507.5"
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
              pathLength: scrollYProgress,
              y: marginTopFrontend,
              height: 227,
            }}
          />
          <motion.path
            d="M575 5403.5c.5 11.5.5 13 1.5 18.5-3.369.5-6.863.5-11.5.5-17.673 0-32-1.83-32-19.5s14.327-20 32-20c5.346 0 9.836.21 13.5 1-1.5 5.5-3 9-3.5 19.5z"
            fill="#00681D"
            style={{ pathLength: scrollYProgress, y: marginTopFrontend }}
          />
          <motion.path
            d="M536 5391.66l-35 5.84v10l35 6.5v-11.17-11.17z"
            fill="#00681D"
            style={{ pathLength: scrollYProgress, y: marginTopFrontend }}
          />
        </motion.g>
        <motion.text xmlSpace="preserve" fill="#fff">
          <motion.tspan
            x={700}
            y={textOthers.get()}
            className={`${plus_jakarta_sans.className} fs-1 ms-2`}
          >
            Outros
          </motion.tspan>
        </motion.text>
        <defs>
          <linearGradient
            id="prefix__paint0_linear_273_13"
            // x1={-588.313}
            // y1={1282.98}
            // x2={1294.82}
            // y2={1344.12}
            // gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0066cc" />
            <stop offset={1} stopColor="#00ccff" />
          </linearGradient>
        </defs>
      </motion.svg>
    </div>
  );
};

export default BackgroundLine;
