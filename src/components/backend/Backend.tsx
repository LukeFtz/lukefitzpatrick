import { Plus_Jakarta_Sans } from "@next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
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
import { backendContent } from "@/utilitities/datatypes";
import { getDataBackend } from "@/utilitities/data/getData";
import Engine from "./Engine";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: ["200", "600"],
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

  const [data, setData] = useState<backendContent | null>(null);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataBackend(dataLang);
      setData(auxData);
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataBackend("pt");
      setData(auxData);
    }
  }, []);

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
    <div id="id_Backend_div" className="container mt-12 pt-12" ref={scrollRef}>
      <div className="flex flex-wrap -mx-3 justify-center">
        <div className="shrink-0 max-w-full px-3 w-full md:w-11/12 xl:w-full">
          <div className="shrink-0 w-full xl:w-1/2 overflowXHidden">
            <motion.h2
              className={`${plus_jakarta_sans.className} text-h1 mb-12 `}
              style={{ x: xBackend }}
            >
              {data?.title}
            </motion.h2>
          </div>
        </div>
      </div>

      <div>
        <Engine />
      </div>

      <div className="flex flex-wrap -mx-3 justify-center mt-12 mb-12">
        <div className="shrink-0 max-w-full px-3 w-full">
          <motion.h2
            className={`${plus_jakarta_sans.className} text-h3 mb-12 text-center`}
            style={{ opacity }}
          >
            {data?.firstSubtitle}
          </motion.h2>
        </div>
        <motion.div
          className="grid sm:grid-cols-3 mx-3 shrink-0 max-w-full px-3 w-full md:w-1/2 mt-12 gap-x-2 justify-center text-center"
          style={{ x: xBackendDjango, opacity }}
        >
          <p className={`${plus_jakarta_sans.className} text-base font-semibold mb-12 `}>
            Django REST Framework
          </p>
          <p className={`${plus_jakarta_sans.className} text-base font-semibold mb-12 `}>
            FastAPI
          </p>
          <p className={`${plus_jakarta_sans.className} text-base font-semibold mb-12 `}>
            Flask
          </p>
        </motion.div>
        {/* <div className="w-100" /> */}

        <motion.div
          className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-full justify-center mt-12"
          style={{ opacity: opacityText }}
        >
          <div
            className="shrink-0 max-w-full px-3 w-full md:w-7/12 mt-12"
            ref={scrollTextRef}
          >
            <hr />
          </div>
        </motion.div>
        <motion.div
          className="shrink-0 max-w-full px-3 mt-12 w-full md:w-7/12"
          style={{ y: yItems, opacity: opacityItems }}
        >
          <h2
            className={`${plus_jakarta_sans.className} text-h3 mb-12 text-center`}
          >
            {data?.secondSubtitle}
          </h2>
          <div className="flex flex-wrap -mx-3 pt-12 mt-12 items-center justify-center">
            <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/3 justify-center">
              <div className="shrink-0 max-w-full px-3 w-1/2 md:w-5/12 xl:w-1/2">
                <Java />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/3 justify-center">
              <div className="shrink-0 max-w-full px-3 w-1/2 md:w-5/12 xl:w-1/2">
                <Python />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-1/3 justify-center">
              <div className="shrink-0 max-w-full px-3 w-5/12 md:w-1/3 xl:w-1/2">
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
