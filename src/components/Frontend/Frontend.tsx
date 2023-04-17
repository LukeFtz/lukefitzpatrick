import { Plus_Jakarta_Sans } from "@next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import redux from "../../../public/media/frontend/redux.svg";
import react from "../../../public/media/frontend/react.svg";
import typescript from "../../../public/media/frontend/typescript.svg";
import mobile from "../../../public/media/frontend/mobile.svg";
import $ from "jquery";

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

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

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
  const { scrollY } = useScroll();
  // const scrollPrev = useMotionValue(0);
  const webMob = useMotionValue(0);
  const webMob2 = useMotionValue(0);
  const webMob3 = useMotionValue(0);

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

  const animateWebMobDefault = () => {
    animate(webMob, 0, {
      duration: 1,
      ease: "easeOut",
    });
    animate(webMob2, 0, {
      duration: 1,
      ease: "easeOut",
    });
    animate(webMob3, 0, {
      duration: 1,
      ease: "easeOut",
    });
  };
  const animateWebMobUp = () => {
    animate(webMob, -50, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
    animate(webMob2, -90, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
    animate(webMob3, -120, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
  };
  const animateWebMobDown = () => {
    animate(webMob, 120, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
    animate(webMob2, 90, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
    animate(webMob3, 50, {
      duration: 0.1,
      onComplete: () => animateWebMobDefault(),
    });
  };

  const scrollHandler = () => {
    if (scrollY.get() - scrollPrev > 0) {
      scrollPrev = scrollY.get();
      animateWebMobUp();
    } else {
      animateWebMobDown();
      scrollPrev = scrollY.get();
    }
  };

  useMotionValueEvent(scrollY, "change", () => scrollHandler());

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
    <div
      id="id_frontend_div"
      className="container mainFrontendDiv pt-5"
      ref={scrollRef}
    >
      <div className="row justify-content-center">
        <div className="col-9 col-md-10 col-xl-12">
          <div className="row justify-content-end text-end">
            <div className="col-12 col-xl-6 overflowXHidden">
              <motion.h2
                className={`${plus_jakarta_sans.className} fs-1 mb-5 `}
                style={{ x: xFrontend }}
              >
                Front-end
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="container row ">
          <div className="row col-3 mt-5 pt-5 justify-content-center">
            <motion.div
              className="col-12 col-md-9"
              style={{ y: yFrontendItems, opacity }}
            >
              <Image src={redux} alt="Redux icon" className="img-fluid w-100" />
            </motion.div>
            <motion.div
              className="col-12 text-center mb-5"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} fontSmall fs-md-5 mb-5`}
              >
                Redux
              </h2>
            </motion.div>
          </div>
          <motion.div
            className="row col-6 mt-5 pt-5 justify-content-center"
            style={{ y: yFrontendReact, opacity }}
          >
            <div className="col-12 col-md-10 reactRotate">
              <Image src={react} alt="React icon" className="img-fluid w-100" />
            </div>
            <motion.div
              className="col-12 text-center mt-5"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} fontSmallReactNative  mt-md-5`}
              >
                React & React Native
              </h2>
            </motion.div>
          </motion.div>
          <div className="row col-3 mt-5 pt-5 justify-content-center">
            <motion.div
              className="col-12 col-md-9"
              style={{ y: yFrontendItems, opacity }}
            >
              <Image
                src={typescript}
                alt="Typescript icon"
                className="img-fluid w-100"
              />
            </motion.div>
            <motion.div
              className="col-12 text-center mb-5"
              style={{ opacity: opacityText }}
            >
              <h2
                className={`${plus_jakarta_sans.className} fontSmall fs-md-5 mb-5`}
              >
                Typescript
              </h2>
            </motion.div>
          </div>
        </div>

        <div className="container mt-5">
          <div className="row justify-content-center ">
            <motion.div
              className="col-10 col-md-9"
              style={{ opacity: opacityText }}
            >
              <p
                className={`${plus_jakarta_sans.className} fs-6 mt-5 text-center`}
              >
                Os frameworks acima são usados em projetos que visão aplicações
                web e mobile, a combinação delas permitem a criação de
                interfaces ponderosas com boa performance e qualidade de código
              </p>
            </motion.div>
          </div>
        </div>
        <div className="w-100" />
        <motion.div
          className="row justify-content-center"
          style={{ opacity: opacityText }}
        >
          <div className="row justify-content-center col-12 col-md-6 mt-5 pt-5">
            <div className="col-12 col-md-12 text-center">
              <Image
                src={mobile}
                alt="Mobile icon"
                className="img-fluid w-100"
              />
            </div>
          </div>
        </motion.div>
        <div className="container mt-5 mb-5">
          <div className="row justify-content-center mb-5">
            <div className="col-10 col-md-8">
              <p
                className={`${plus_jakarta_sans.className} fs-6 mt-5 text-center`}
              >
                As ferramentas abaixo servem de complemento para as tecnologias
                apresentadas, dispostas de acordo com a sua categoria
              </p>
            </div>
          </div>
          <div className="row justify-content-center mt-5 mb-5">
            <div className="col-6 col-md-6 row ">
              <div className="mb-5">
                <h3
                  className={`${plus_jakarta_sans.className} fs-5 fs-md-3 mt-5 text-center`}
                >
                  Web
                </h3>
              </div>

              <div className="border-end row">
                <motion.div
                  className="row col-12 align-items-center mb-5 mt-5"
                  style={{ y: webMob }}
                >
                  <div className="col-6 col-md-2">
                    <NextJs />
                  </div>
                  <div className="col-6 col-md-10">
                    <p
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-start`}
                    >
                      Next.js
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="row col-12 align-items-center mb-5 mt-5"
                  style={{ y: webMob2 }}
                >
                  <div className="col-6 col-md-2">
                    <ReactRouter />
                  </div>
                  <div className="col-6 col-md-10">
                    <p
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-start`}
                    >
                      React Router Dom
                    </p>
                  </div>
                </motion.div>
                <motion.div
                  className="row col-12 align-items-center mt-5"
                  style={{ y: webMob3 }}
                >
                  <div className="col-6 col-md-2">
                    <Jquery />
                  </div>
                  <div className="col-6 col-md-10">
                    <p
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-start`}
                    >
                      Jquery
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-6 col-md-6 row">
              <div className="mb-5">
                <h3
                  className={`${plus_jakarta_sans.className} fs-5 fs-md-3 mt-5 text-center`}
                >
                  Mobile
                </h3>
              </div>

              <div className="row">
                <motion.div
                  className="row col-12 align-items-center mb-5 mt-5"
                  style={{ y: webMob }}
                >
                  <div className="col-9 col-md-10">
                    <p
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-end`}
                    >
                      React Navigation
                    </p>
                  </div>
                  <div className="col-3 col-md-2 ">
                    <ReactNavigation />
                  </div>
                </motion.div>
                <motion.div
                  className="row col-12 align-items-center mb-5 mt-5"
                  style={{ y: webMob2 }}
                >
                  <div className="col-9 col-md-10">
                    <p
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-end`}
                    >
                      Expo
                    </p>
                  </div>
                  <div className="col-3 col-md-2">
                    <Expo />
                  </div>
                </motion.div>
                <motion.div
                  className="row col-12 align-items-center mt-5"
                  style={{ y: webMob3 }}
                >
                  <div className="col-9 col-md-10">
                    <div
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-end`}
                    >
                      React Native Reanimated
                    </div>
                    <div
                      className={`${plus_jakarta_sans.className} fontSmall fs-md-5 text-end`}
                    >
                      React Native Gesture Handler
                    </div>
                  </div>
                  <div className="col-3 col-md-2">
                    <SoftwareMansion />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
