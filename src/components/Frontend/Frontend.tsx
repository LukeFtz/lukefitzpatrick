import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import redux from "../../../public/media/frontend/redux.svg";
import react from "../../../public/media/frontend/react.svg";
import typescript from "../../../public/media/frontend/typescript.svg";
import mobile from "../../../public/media/frontend/mobile.svg";

import {
  Jquery,
  NextJs,
  ReactRouter,
  ReactNavigation,
  Expo,
  SoftwareMansion,
} from "./icons";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { frontendContent } from "@/utilitities/datatypes";
import { getDataFrontend } from "@/utilitities/data/getData";
import Desktop from "./Desktop";
import { plus_jakarta_sans_semibold as plus_jakarta_sans } from "@/utilitities/fonts";


let scrollPrev = 0;

let width = 0;
let height = 0;

const Frontend: React.FC = () => {
  const top = useMotionValue<number>(0);
  const xFrontend = useMotionValue<number>(500);
  const yFrontendReact = useMotionValue<number>(-100);
  const opacityText = useMotionValue(0);
  const yFrontendItems = useTransform(yFrontendReact, [-100, 0], [100, 0]);
  const opacity = useTransform(yFrontendReact, [-100, 0], [0, 1]);
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const scrollTextRef = useRef(null);
  const isTextInView = useInView(scrollTextRef);

  // const scrollPrev = useMotionValue(0);

  const [data, setData] = useState<frontendContent | null>(null);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataFrontend(dataLang);
      setData(auxData);
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataFrontend("pt");
      setData(auxData);
    }
  }, []);

  const showText = () => {
    animate(opacityText, 1, {
      duration: 1,
    });
  };

  const showItems = () => {
    animate(yFrontendReact, 0, {
      duration: 1,
      onComplete: () => showText(),
    });
  };

  useEffect(() => {
    // defineValues();
    if (isInView) {
      animate(xFrontend, 0, {
        duration: 1,
        onComplete: () => showItems(),
      });
    }
  }, [isInView]);

  useEffect(() => {
    // defineValues();
    if (isTextInView) {
      showItems();
    }
  }, [isTextInView]);

  return (
    <div id="id_frontend_div" className="container pt-12" ref={scrollRef}>
      <div className="flex flex-wrap -mx-3 justify-center">
        <div className="shrink-0 max-w-full px-3 w-11/12 md:w-5/6 xl:w-full">
          <div className="flex flex-wrap -mx-3 justify-end text-right">
            <div className="shrink-0 max-w-full px-3 w-full xl:w-1/2 overflowXHidden">
              <motion.h2
                className={`${plus_jakarta_sans.className} text-h1 mb-12 `}
                style={{ x: xFrontend }}
              >
                {data?.title}
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="flex flex-wrap justify-center sm:w-9/12 mx-auto">
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/4 justify-center">
            <motion.div
              className="shrink-0 max-w-full px-3 w-full md:w-3/4"
              style={{ y: yFrontendItems, opacity }}
            >
              <div className="max-w-full h-auto w-full">
                <svg className="text-[#000000] dark:text-[#000000] " fill="none" height="100%" viewBox="-48 -88 514 624" width="100%"><path d="M299.613.5h68.094v353.034h-68.094V.5Z" stroke="url(#_S_1_-upright)" strokeWidth="2" vectorEffect="non-scaling-stroke"></path><path d="m68.993 1 395.512 499.213a268 268 0 0 1-45.25 34.753L54.963 74.459l-.893-1.128v274.127H.5V1h68.493Z" stroke="url(#_S_1_-diagonal)" strokeWidth="2" vectorEffect="non-scaling-stroke"></path><defs><linearGradient gradientUnits="userSpaceOnUse" id="_S_1_-upright" x1="367.707" x2="367.707" y1="151.917" y2="353.534"><stop stopColor="currentColor"></stop><stop offset=".3" stopColor="currentColor" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="_S_1_-diagonal" x1="281.642" x2="424.017" y1="308.647" y2="486.349"><stop stopColor="currentColor"></stop><stop offset="1" stopColor="currentColor" stopOpacity="0"></stop></linearGradient></defs></svg>
              </div>
            </motion.div>
            <motion.div
              className="shrink-0 max-w-full px-3 w-full text-center mb-12"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} text-base font-semibold  mb-12`}
              >
                Next.js
              </h2>
            </motion.div>
          </div>
          <motion.div
            className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/2 justify-center"
            style={{ y: yFrontendReact, opacity }}
          >
            <div className="shrink-0 max-w-full px-3 w-full md:w-5/6 reactRotate">
              <Image src={react} alt="React icon" className="max-w-full h-auto w-full" />
            </div>
            <motion.div
              className="shrink-0 max-w-full px-3 w-full text-center mt-12"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} text-base font-semibold ReactNative md:mt-12`}
              >
                React & React Native
              </h2>
            </motion.div>
          </motion.div>
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/4 justify-center">
            <motion.div
              className="shrink-0 max-w-full px-3 w-full md:w-3/4"
              style={{ y: yFrontendItems, opacity }}
            >
              <Image
                src={typescript}
                alt="Typescript icon"
                className="max-w-full h-auto w-full"
              />
            </motion.div>
            <motion.div
              className="shrink-0 max-w-full px-3 w-full text-center mb-12"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} text-base font-semibold  mb-12`}
              >
                Typescript
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="mt-12">
          <Desktop />
        </div>

        <div className="container mt-12">
          <div className="flex flex-wrap -mx-3 justify-center">
            <motion.div
              className="shrink-0 max-w-full px-3 w-full md:w-3/4"
              style={{ opacity: opacityText }}
            >
              <p
                className={`${plus_jakarta_sans.className} text-h6 mt-12 text-center`}
              >
                {data?.firstParagraph}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-full" />
        <motion.div
          className="flex flex-wrap -mx-3 justify-center"
          style={{ opacity: opacityText }}
        >
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 justify-center w-full md:w-1/2">
            <div className="shrink-0 max-w-full px-3 w-full text-center">
              <Image
                src={mobile}
                alt="Mobile icon"
                className="max-w-full h-auto w-full"
              />
            </div>
          </div>
        </motion.div>
        <div className="container mt-12 mb-12">
          <div className="flex flex-wrap -mx-3 justify-center mb-12">
            <div className="shrink-0 max-w-full px-3 w-full md:w-2/3">
              <p
                className={`${plus_jakarta_sans.className} text-h6 mt-12 text-center`}
              >
                {data?.secondParagraph}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 justify-center mt-12 mb-12">
            <div className="flex flex-wrap mx-auto shrink-0 max-w-full px-3">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-x-2">
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  Server Side Rendering
                </p>

                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  Tailwind CSS
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  React Router Dom
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  Framer Motion
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  Redux
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  TanStack
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  TipTap
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  React Navigation
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  Expo
                </p>
                <p
                  className={`${plus_jakarta_sans.className} text-base font-semibold  text-left`}
                >
                  React Native Reanimated
                </p>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  );
};

export default Frontend;
