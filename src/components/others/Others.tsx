import { Plus_Jakarta_Sans } from "@next/font/google";
import React, { useEffect, useState } from "react";
import { Ansible, Arduino, Docker, GitHub } from "./Icons";
import { motion } from "framer-motion";
import { footerContent } from "@/utilitities/datatypes";
import { getDataFooter } from "@/utilitities/data/getData";
// import bootstrap from "bootstrap";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const variants = {
  open: { y: 0 },
  closed: { y: 500 },
};

const Others: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState<footerContent | null>(null);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataFooter(dataLang);
      setData(auxData);
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataFooter("pt");
      setData(auxData);
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="row col-12 col-md-7 col-xl-6 align-items-center justify-content-center mb-5 pb-5">
          <hr />
          <div className="row justify-content-center col-3">
            <div className="col-11 col-md-7">
              <Ansible />
            </div>
          </div>
          <div className="row justify-content-center col-3">
            <div className="col-11 col-md-7">
              <Docker />
            </div>
          </div>
          <div className="row justify-content-center col-3">
            <div className="col-11 col-md-7">
              <GitHub />
            </div>
          </div>
          <div className="row justify-content-center col-3">
            <div className="col-11 col-md-7">
              <Arduino />
            </div>
          </div>
          <div className="w-100" />
          <div className="row justify-content-center col-3 mt-3">
            <p className={`${plus_jakarta_sans.className} fs-6 text-center `}>
              Ansible
            </p>
          </div>
          <div className="row justify-content-center col-3 mt-3">
            <p className={`${plus_jakarta_sans.className} fs-6 text-center `}>
              Docker
            </p>
          </div>
          <div className="row justify-content-center col-3 mt-3">
            <p className={`${plus_jakarta_sans.className} fs-6 text-center `}>
              GitHub
            </p>
          </div>
          <div className="row justify-content-center col-3 mt-3">
            <p className={`${plus_jakarta_sans.className} fs-6 text-center `}>
              Arduino
            </p>
          </div>
        </div>

        <div className="h-40 overflowY">
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{ duration: 1 }}
            className="row justify-content-center text-primary"
          >
            <div className="col-6 text-center ">
              <div>
                <a
                  href="https://www.freepik.com/free-vector/iot-concept-isometric-icons-cycle-composition_3886805.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  Designed by macrovector / Freepik
                </a>
              </div>
              <div>
                <a
                  href="https://www.freepik.com/free-vector/digital-device-mockup_4122505.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  designed by Rawpixel.com - Freepik.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.freepik.com/free-vector/server-room-cloud-storage-icon-datacenter-database-concept-data-exchange-process_3628676.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  designed by Fullvector - Freepik.com
                </a>
              </div>
            </div>
            <div className="col-6 text-center">
              <div>
                <a
                  href="https://www.freepik.com/free-vector/online-webinar-isometric-icon-internet-course-mobile-phone-with-book-screen_4102273.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  designed by Fullvector - Freepik.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.freepik.com/free-vector/digital-device-mockup-set_4122518.htm"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  designed by Rawpixel.com - Freepik.com
                </a>
              </div>
              <div>
                <a href="https://www.freepik.com/free-vector/illustration-circuit_2606103.htm">
                  designed by Rawpixel.com - Freepik.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="row col-12 mt-5 pt-5 mb-5 text-primary">
          <a
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className={`${plus_jakarta_sans.className} fs-6 text-center cursorDefinition`}
          >
            {data?.link}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Others;
