import React, { useEffect, useState } from "react";
import AnimatedSquares from "./AnimatedSquares";
import AnimatedSquaresMobile from "./AnimatedSquaresMobile";
import BlackTagHeader from "./animated_black_tag";
import Image from "next/image";
import { Staatliches, Plus_Jakarta_Sans, Alegreya } from "@next/font/google";
import { getDataHeader } from "@/utilitities/data/getData";
import { headerContent } from "@/utilitities/datatypes";
import TextHeader from "./TextHeader";
import { defineLanguage } from "@/utilitities/functions";
import { language } from "@/utilitities/types";
import { useRouter } from "next/router";
import $ from "jquery";
import ProfileImage from "./ProfileImage";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { useAppSelector } from "@/store/hooks";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedBlackTagMobile from "./Animated_black_tag_mobile";
import SquaresBackground from "./SquaresBackground";
import SquaresBackgroundMobile from "./SquaresBackgroundMobile";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const Header: React.FC = () => {
  const [data, setData] = useState<headerContent | null>(null);
  const router = useRouter();

  const startAnimation = useAppSelector(isLineStaterd);
  const y = useMotionValue(100);
  const opacity = useTransform(y, [100, 0], [0, 1]);

  useEffect(() => {
    // if (startAnimation) {
    animate(y, 0, {
      duration: 1,
    });
    // }
  }, []);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    const btnLangPt = $("#id_btn_pt");
    const btnLangEn = $("#id_btn_en");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataHeader(dataLang);
      setData(auxData);
      if (dataLang === "en") {
        btnLangPt.removeClass("btn-success");
        btnLangPt.addClass("btn-secondary");
        btnLangEn.removeClass("btn-secondary");
        btnLangEn.addClass("btn-success");
      } else {
        btnLangPt.removeClass("btn-secondary");
        btnLangPt.addClass("btn-success");
        btnLangEn.removeClass("btn-success");
        btnLangEn.addClass("btn-secondary");
      }
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataHeader("pt");
      setData(auxData);
    }
  }, []);

  const defineLang = ({ language }: language) => {
    if (defineLanguage({ language })) {
      router.reload();
    }
  };

  return (
    <div>
      <div className="d-none d-md-block">
        {data && <SquaresBackground {...data} />}
      </div>
      <div className="d-block d-md-none">
        {data && <SquaresBackgroundMobile {...data} />}
      </div>
      <div className="d-block d-md-none pt-3 mt-3" />
      <motion.div className="mt-5 pt-5 text-center" style={{ y, opacity }}>
        <div className={plus_jakarta_sans.className}>{data?.language}</div>
        <div className="display-5 fs-2 mt-3">
          <button
            id="id_btn_pt"
            className="btn btn-success rounded-pill btnSize me-1"
            onClick={() => {
              defineLang({ language: "pt" });
            }}
          >
            Português
          </button>
          <button
            id="id_btn_en"
            className="btn btn-secondary rounded-pill btnSize ms-1"
            onClick={() => {
              defineLang({ language: "en" });
            }}
          >
            English
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
