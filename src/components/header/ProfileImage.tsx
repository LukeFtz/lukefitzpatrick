import Image from "next/image";
import React, { useEffect } from "react";
import picture from "../../../public/media/geral/my_picture.png";
import { useSelector } from "react-redux";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { useAppSelector } from "@/store/hooks";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import { getElementHeight, getElementPosition } from "@/utilitities/functions";

// import { Container } from './styles';

const ProfileImage: React.FC = () => {
  const startAnimation = useAppSelector(isLineStaterd);
  const x = useMotionValue(-100);
  const opacity = useTransform(x, [-100, 0], [0, 1]);
  const marginTop = useMotionValue<number | undefined>(undefined);

  const defineTop = () => {
    const bottomLine = getElementPosition("id_black_line_path").top;
    const blackTagMobile = getElementPosition("id_back_tag_mobile").top;
    const divImgLuke = getElementHeight("id_div_img_Luke");

    if (divImgLuke && bottomLine !== 0) {
      const margin = bottomLine - divImgLuke;
      marginTop.set(margin);
    } else if (divImgLuke && blackTagMobile) {
      const margin = blackTagMobile - divImgLuke;
      // console.log(margin);
      marginTop.set(margin);
    }
    // console.log()
    // const aspectRatio =
    //   Math.round((window.screen.width / window.screen.height) * 100) / 100;

    // let newTop;
    // if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
    //   newTop = Math.abs(id_aux_top_frontend.position().top + 100 - topLine);
    // } else if (aspectRatio >= 1.4 && aspectRatio < 1.6) {
    //   newTop = Math.abs(id_aux_top_frontend.position().top - topLine) + 200;
    //   // topFrontend.css({ "padding-top": "200px" });
    // } else {
    //   newTop = Math.abs(topLine - id_aux_top_frontend.position().top);
    // }
    // topFrontend.css({ "margin-top": newTop + "px" });
  };

  useEffect(() => {
    defineTop();
  }, []);

  useEffect(() => {
    if (startAnimation) {
      animate(x, 0, {
        duration: 1,
      });
    }
  }, [startAnimation]);

  return (
    <motion.div
      id="id_div_img_Luke"
      style={{ x, opacity, marginTop }}
      className="imgPersonDiv"
    >
      <Image
        src={picture}
        alt="Photo Luke"
        className="max-w-full h-auto w-full"
      />
    </motion.div>
  );
};

export default ProfileImage;
