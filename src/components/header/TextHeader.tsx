import React, { useEffect } from "react";
import { Staatliches, Plus_Jakarta_Sans, Alegreya } from "@next/font/google";
import $ from "jquery";
import { headerContent } from "@/utilitities/datatypes";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { isLineStaterd } from "@/store/redures/headerReducer";

// import { Container } from './styles';
const staatliches = Staatliches({ weight: "400", subsets: ["latin"] });
const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const TextHeader: React.FC<headerContent> = ({
  about,
  title,
}: headerContent) => {
  const startAnimation = useAppSelector(isLineStaterd);
  const x = useMotionValue(200);
  const opacity = useTransform(x, [200, 0], [0, 1]);

  useEffect(() => {
    if (startAnimation) {
      animate(x, 0, {
        duration: 1,
      });
    }
  }, [startAnimation]);

  useEffect(() => {
    const width = $(window).width();

    if (width) {
      if (width > 768) {
        const p = $("#id_main_black_tag");
        const contentDiv = $("#id_black_tag_content");
        const path = document.getElementById("id_main_black_tag");
        contentDiv.css("left", p.position().left);
        if (path) {
          contentDiv.width(path.getBoundingClientRect().width * 0.98);
          contentDiv.height(path.getBoundingClientRect().height * 0.8);
        }
      }
    }
  }, []);
  return (
    <div
      id="id_black_tag_content"
      className="position-absolute text-light text-center maxWidth overflow-x-hidden backgroundBlack"
    >
      <motion.div
        className="row justify-content-center d-flex align-content-around flex-wrap h-100"
        style={{ x, opacity }}
      >
        <div className="d-none d-md-block">
          <div>
            <h1 className={`col-12 ${staatliches.className} display-5`}>
              LUKE GERALD PEREIRA FITZPATRICK
            </h1>
            <div className={`col-12 ${plus_jakarta_sans.className} fs-3 mt-3`}>
              {title}
            </div>
          </div>
          <div className={`col-12 ${plus_jakarta_sans.className} ps-5 pe-5`}>
            {about}
          </div>
        </div>
        <div className="d-block d-md-none">
          <div>
            <h1 className={`col-12 ${staatliches.className} display-5`}>
              LUKE GERALD PEREIRA FITZPATRICK
            </h1>
            <div className={`col-12 ${plus_jakarta_sans.className} fs-2 mt-3`}>
              {title}
            </div>
          </div>
          <div className={`col-12 ${plus_jakarta_sans.className} pt-5 pb-5`}>
            {about}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TextHeader;
