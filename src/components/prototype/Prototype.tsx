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
    <div id="id_prototype_div" className="container mt-5 " ref={scrollRef}>
      <div className="row justify-content-center">
        <div className="col-10 col-md-11 col-xl-12">
          <div className="col-12 col-xl-6 overflowXHidden">
            <motion.h2
              className={`${plus_jakarta_sans.className} fs-1 mb-5 d-none d-md-block`}
              style={{ x: xPrototype }}
            >
              {data?.title}
            </motion.h2>
            <motion.h2
              className={`${plus_jakarta_sans.className} fs-1 d-block d-md-none`}
              style={{ x: xPrototype }}
            >
              {data?.title}
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <Devices />
        <div className="w-100" />
        <motion.div
          className="row justify-content-center"
          style={{ x: yPrototypeIcons, opacity }}
        >
          <div className="row justify-content-center col-4 mt-5 pt-5">
            <div className="col-10 col-xl-10 text-center">
              <Image src={adobe} alt="adobe XD icon" className="img-fluid" />
            </div>
            <div className="text-center mt-3">
              <p
                className={`${plus_jakarta_sans.className} fs-3 d-none d-md-block`}
              >
                Adobe XD
              </p>
              <p
                className={`${plus_jakarta_sans.className} fs-6 d-block d-md-none`}
              >
                Adobe XD
              </p>
            </div>
          </div>
          <div className="row justify-content-center col-4 mt-5 pt-5">
            <div className="col-10 col-xl-10 text-center">
              <Image src={figma} alt="figma icon" className="img-fluid" />
            </div>
            <div className="text-center mt-3">
              <p
                className={`${plus_jakarta_sans.className} fs-3 d-none d-md-block`}
              >
                Figma
              </p>
              <p
                className={`${plus_jakarta_sans.className} fs-6 d-block d-md-none`}
              >
                Figma
              </p>
            </div>
          </div>
          <div className="row justify-content-center col-4 mt-5 pt-5">
            <div className="col-10 col-xl-10 text-center">
              <Image
                src={photoshop}
                alt="Adobe Photoshop icon"
                className="img-fluid"
              />
            </div>
            <div className="text-center mt-3">
              <p
                className={`${plus_jakarta_sans.className} fs-3 d-none d-md-block`}
              >
                Adobe Photoshop
              </p>
              <p
                className={`${plus_jakarta_sans.className} fs-6 d-block d-md-none`}
              >
                Adobe Photoshop
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="col-12 row justify-content-center"
          style={{ opacity: opacityText }}
        >
          <div className="col-12 col-xl-10 mt-5" ref={scrollTextRef}>
            <p className={`${plus_jakarta_sans.className} fs-6 text-center`}>
              {data?.firstParagraph}
            </p>
          </div>
          <motion.div
            className="row col-9 col-md-6 mt-5 pt-5 text-center"
            style={{ x: yPrototypeDevices, opacity }}
          >
            <Image src={devices} alt="devices icons" className="img-fluid" />
          </motion.div>
          <div className="col-12 col-xl-10 mt-5">
            <p className={`${plus_jakarta_sans.className} fs-6 text-center`}>
              {data?.secondParagraph}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Prototype;
