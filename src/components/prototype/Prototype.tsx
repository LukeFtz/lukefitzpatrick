import { Plus_Jakarta_Sans } from "@next/font/google";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import devices from "../../../public/media/prototype/devices.svg";
import adobe from "../../../public/media/prototype/adobe.svg";
import figma from "../../../public/media/prototype/figma.svg";
import photoshop from "../../../public/media/prototype/photoshop.svg";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { prototypeContent } from "@/utilitities/datatypes";
import { getDataPrototype } from "@/utilitities/data/getData";
import Devices from "./Devices";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const Prototype: React.FC = () => {
  const xPrototype = useMotionValue<number>(-500);
  const yPrototypeDevices = useMotionValue<number>(-100);
  const opacityText = useMotionValue(0);
  const yPrototypeIcons = useTransform(yPrototypeDevices, [-100, 0], [100, 0]);
  const opacity = useTransform(yPrototypeDevices, [-100, 0], [0, 1]);
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);
  const scrollTextRef = useRef(null);
  const isTextInView = useInView(scrollTextRef);

  const [data, setData] = useState<prototypeContent | null>(null);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataPrototype(dataLang);
      setData(auxData);
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataPrototype("pt");
      setData(auxData);
    }
  }, []);

  const showText = () => {
    animate(opacityText, 1, {
      duration: 1,
    });
  };

  const showItems = () => {
    animate(yPrototypeDevices, 0, {
      duration: 1,
      onComplete: () => showText(),
    });
  };

  useEffect(() => {
    // defineValues();
    if (isInView) {
      animate(xPrototype, 0, {
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

  return (
    <div id="id_prototype_div" className="container mt-12" ref={scrollRef}>
      <div className="flex flex-wrap -mx-3 justify-center">
        <div className="shrink-0 max-w-full px-3 w-5/6 md:w-11/12 xl:w-full">
          <div className="shrink-0 w-full xl:w-1/2 overflowXHidden">
            <motion.h2
              className={`${plus_jakarta_sans.className} text-h1 mb-12 hidden md:block`}
              style={{ x: xPrototype }}
            >
              {data?.title}
            </motion.h2>
            <motion.h2
              className={`${plus_jakarta_sans.className} text-h1 block md:hidden`}
              style={{ x: xPrototype }}
            >
              {data?.title}
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap -mx-3 justify-center mt-12">
        <Devices className="shrink-0 max-w-full px-3 w-full sm:w-9/12" />
        <div className="shrink-0 max-w-full px-3 w-full" />
        <motion.div
          className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-full sm:w-9/12 justify-center"
          style={{ x: yPrototypeIcons, opacity }}
        >
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 justify-center w-1/3 mt-12 pt-12">
            <div className="shrink-0 max-w-full px-3 w-5/6 text-center">
              <Image src={adobe} alt="adobe XD icon" className="max-w-full h-auto" />
            </div>
            <div className="shrink-0 max-w-full px-3 w-full text-center mt-4">
              <p
                className={`${plus_jakarta_sans.className} text-h3 hidden md:block`}
              >
                Adobe XD
              </p>
              <p
                className={`${plus_jakarta_sans.className} text-h6 block md:hidden`}
              >
                Adobe XD
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 justify-center w-1/3 mt-12 pt-12">
            <div className="shrink-0 max-w-full px-3 w-5/6 text-center">
              <Image src={figma} alt="figma icon" className="max-w-full h-auto" />
            </div>
            <div className="shrink-0 max-w-full px-3 w-full text-center mt-4">
              <p
                className={`${plus_jakarta_sans.className} text-h3 hidden md:block`}
              >
                Figma
              </p>
              <p
                className={`${plus_jakarta_sans.className} text-h6 block md:hidden`}
              >
                Figma
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 justify-center w-1/3 mt-12 pt-12">
            <div className="shrink-0 max-w-full px-3 w-5/6 text-center">
              <Image
                src={photoshop}
                alt="Adobe Photoshop icon"
                className="max-w-full h-auto"
              />
            </div>
            <div className="shrink-0 max-w-full px-3 w-full text-center mt-4">
              <p
                className={`${plus_jakarta_sans.className} text-h3 hidden md:block`}
              >
                Adobe Photoshop
              </p>
              <p
                className={`${plus_jakarta_sans.className} text-h6 block md:hidden`}
              >
                Adobe Photoshop
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-full justify-center"
          style={{ opacity: opacityText }}
        >
          <div className="shrink-0 max-w-full px-3 w-full xl:w-5/6 mt-12" ref={scrollTextRef}>
            <p className={`${plus_jakarta_sans.className} text-h6 text-center`}>
              {data?.firstParagraph}
            </p>
          </div>
          <motion.div
            className="flex flex-wrap -mx-3 shrink-0 max-w-full px-3 w-3/4 md:w-1/2 mt-12 pt-12 text-center"
            style={{ x: yPrototypeDevices, opacity }}
          >
            <Image src={devices} alt="devices icons" className="shrink-0 max-w-full px-3 w-full h-auto" />
          </motion.div>
          <div className="shrink-0 max-w-full px-3 w-full xl:w-5/6 mt-12">
            <p className={`${plus_jakarta_sans.className} text-h6 text-center`}>
              {data?.secondParagraph}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prototype;
