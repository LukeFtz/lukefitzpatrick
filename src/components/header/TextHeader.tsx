import React, { useEffect } from "react";
import { Staatliches, Plus_Jakarta_Sans, Alegreya } from "@next/font/google";
import { headerContent } from "@/utilitities/datatypes";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { useAppSelector } from "@/store/hooks";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { getElementPosition, getViewportSize } from "@/utilitities/functions";

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
  const left = useMotionValue<number | undefined>(undefined);
  const width = useMotionValue<number | undefined>(undefined);
  const height = useMotionValue<number | undefined>(undefined);

  useEffect(() => {
    if (startAnimation) {
      animate(x, 0, {
        duration: 1,
      });
    }
  }, [startAnimation]);

  useEffect(() => {
    const viewportWidth = getViewportSize().width;

    if (viewportWidth) {
      if (viewportWidth > 768) {
        const path = document.getElementById("id_main_black_tag");
        left.set(getElementPosition("id_main_black_tag").left);
        if (path) {
          width.set(path.getBoundingClientRect().width * 0.98);
          height.set(path.getBoundingClientRect().height * 0.8);
        }
      }
    }
  }, []);
  return (
    <motion.div
      id="id_black_tag_content"
      style={{ left, width, height }}
      className="absolute text-light text-center maxWidth overflow-x-hidden backgroundBlack"
    >
      <motion.div
        className="flex flex-wrap -mx-3 justify-center content-around h-full"
        style={{ x, opacity }}
      >
        <div className="shrink-0 max-w-full px-3 w-full hidden md:block">
          <div>
            <h1
              className={`shrink-0 w-full ${staatliches.className} text-display-5 font-light leading-tight`}
            >
              LUKE GERALD PEREIRA FITZPATRICK
            </h1>
            <div
              className={`shrink-0 w-full ${plus_jakarta_sans.className} text-h3 mt-4`}
            >
              {title}
            </div>
          </div>
          <div
            className={`shrink-0 w-full ${plus_jakarta_sans.className} pl-12 pr-12`}
          >
            {about}
          </div>
        </div>
        <div className="shrink-0 max-w-full px-3 w-full block md:hidden">
          <div>
            <h1
              className={`shrink-0 w-full ${staatliches.className} text-display-5 font-light leading-tight`}
            >
              LUKE GERALD PEREIRA FITZPATRICK
            </h1>
            <div
              className={`shrink-0 w-full ${plus_jakarta_sans.className} text-h2 mt-4`}
            >
              {title}
            </div>
          </div>
          <div
            className={`shrink-0 w-full ${plus_jakarta_sans.className} pt-12 pb-12`}
          >
            {about}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TextHeader;
