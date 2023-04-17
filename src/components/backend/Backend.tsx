import { Plus_Jakarta_Sans } from "@next/font/google";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import django from "../../../public/media/backend/django.svg";
import django_rest from "../../../public/media/backend/django_rest.png";
import { C, Java, Python } from "./icons";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const Backend: React.FC = () => {
  const xBackend = useMotionValue<number>(-500);
  const xBackendDjango = useMotionValue<number>(-100);
  const opacityText = useMotionValue(0);
  const opacityItems = useMotionValue(0);
  const yItems = useTransform(opacityItems, [0, 1], [100, 0]);
  const xBackendDjangoRest = useTransform(xBackendDjango, [-100, 0], [100, 0]);
  const opacity = useTransform(xBackendDjango, [-100, 0], [0, 1]);
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const scrollTextRef = useRef(null);
  const isTextInView = useInView(scrollTextRef);

  const showItemsLang = () => {
    animate(opacityItems, 1, {
      duration: 1,
    });
  };

  const showText = () => {
    animate(opacityText, 1, {
      duration: 0.5,
      onComplete: () => showItemsLang(),
    });
  };

  const showItems = () => {
    animate(xBackendDjango, 0, {
      duration: 1,
      onComplete: () => showText(),
    });
  };

  useEffect(() => {
    // defineValues();
    if (isInView) {
      animate(xBackend, 0, {
        duration: 1,
        // onComplete: () => {},
      });
    }
  }, [isInView]);

  useEffect(() => {
    // defineValues();
    if (isTextInView) {
      showItems();
    }
  }, [isTextInView]);

  // useEffect(() => {
  //   defineValues();
  // }, []);

  return (
    <div id="id_Backend_div" className="container mt-5 pt-5" ref={scrollRef}>
      <div className="row justify-content-center">
        <div className="col-12 col-md-11 col-xl-12">
          <div className="col-12 col-xl-6 overflowXHidden">
            <motion.h2
              className={`${plus_jakarta_sans.className} fs-1 mb-5 `}
              style={{ x: xBackend }}
            >
              Back-end
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5 mb-5 ">
        <div>
          <motion.h2
            className={`${plus_jakarta_sans.className} fs-3 mb-5 text-center`}
            style={{ opacity }}
          >
            Criação de APIs com
          </motion.h2>
        </div>
        <motion.div
          className="row col-12 col-md-6 mt-5 justify-content-center"
          style={{ x: xBackendDjango, opacity }}
        >
          <div className="col-12 col-md-7 col-xl-8">
            <Image
              src={django}
              alt="devices icons"
              className="img-fluid w-100"
            />
          </div>
        </motion.div>
        <motion.div
          className="row col-12 col-md-6 mt-5 justify-content-center"
          style={{ x: xBackendDjangoRest, opacity }}
        >
          <div className="col-12 col-md-7 col-xl-8">
            <Image
              src={django_rest}
              alt="devices icons"
              className="img-fluid w-100"
            />
          </div>
        </motion.div>
        {/* <div className="w-100" /> */}

        <motion.div
          className="col-12 row justify-content-center mt-5"
          style={{ opacity: opacityText }}
        >
          <div className="col-12 col-md-7 mt-5" ref={scrollTextRef}>
            <hr />
          </div>
        </motion.div>
        <motion.div
          className="mt-5 col-12 col-md-7"
          style={{ y: yItems, opacity: opacityItems }}
        >
          <h2
            className={`${plus_jakarta_sans.className} fs-3 mb-5 text-center`}
          >
            Linguagens de Programação
          </h2>
          <div className="row pt-5 mt-5 align-items-center justify-content-center">
            <div className="col-4 row justify-content-center">
              <div className="col-6 col-md-5 col-xl-6">
                <Java />
              </div>
            </div>
            <div className="col-4 row justify-content-center">
              <div className="col-6 col-md-5 col-xl-6">
                <Python />
              </div>
            </div>
            <div className="col-4 row justify-content-center">
              <div className="col-5 col-md-4 col-xl-6">
                <C />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Backend;
