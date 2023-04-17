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
    if (startAnimation) {
      animate(y, 0, {
        duration: 1,
      });
    }
  }, [startAnimation]);

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
      <div className="col-12">
        <div className="col-12 col-md-5 col-xl-5 position-absolute row justify-content-center align-items-end">
          <div className="col-10 col-md-10 col-xxl-8">
            <ProfileImage />
          </div>
        </div>
        <div className="showElementOnMob">
          <div className="row justify-content-end squaresHeight">
            <div className="col-12 col-md-8">
              <AnimatedSquaresMobile />
            </div>
          </div>
        </div>
        <div className="row justify-content-end hiddeElementOnMob squaresHeight">
          <div className="col-12 col-md-8">
            <AnimatedSquares />
          </div>
        </div>
      </div>
      <div className="blackTagHeader d-none d-md-block">
        {data && <TextHeader {...data} />}
        <BlackTagHeader />
      </div>
      <div className="blackTagHeader d-block d-md-none">
        {data && <TextHeader {...data} />}

        <AnimatedBlackTagMobile />
      </div>
      <motion.div className="mt-3 text-center" style={{ y, opacity }}>
        <div className={plus_jakarta_sans.className}>{data?.language}</div>
        <div className="display-5 fs-2">
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
