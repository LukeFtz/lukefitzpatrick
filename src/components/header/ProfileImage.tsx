import Image from "next/image";
import React, { useEffect } from "react";
import picture from "../../../public/media/geral/my_picture.png";
import { useSelector } from "react-redux";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { useAppSelector } from "@/store/hooks";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import $ from "jquery";

// import { Container } from './styles';

const ProfileImage: React.FC = () => {
  const startAnimation = useAppSelector(isLineStaterd);
  const x = useMotionValue(-100);
  const opacity = useTransform(x, [-100, 0], [0, 1]);

  const defineTop = () => {
    const bottomLine = $("#id_black_line_path").position().top;
    const blackTagMobile = $("#id_back_tag_mobile").position().top;
    const divImgLuke = $("#id_div_img_Luke").height();
    const defDivImgLuke = $("#id_div_img_Luke");

    if (divImgLuke && bottomLine !== 0) {
      const margin = bottomLine - divImgLuke;
      defDivImgLuke.css({ "margin-top": margin + "px" });
    } else if (divImgLuke && blackTagMobile) {
      const margin = blackTagMobile - divImgLuke;
      console.log(margin);
      defDivImgLuke.css({ "margin-top": margin + "px" });
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
      style={{ x, opacity }}
      className="imgPersonDiv"
    >
      <Image src={picture} alt="Photo Luke" className="img-fluid w-100" />
    </motion.div>
  );
};

export default ProfileImage;
