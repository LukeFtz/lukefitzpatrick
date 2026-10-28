import React, { useEffect, useState } from "react";
import AnimatedSquares from "./AnimatedSquares";
import AnimatedSquaresMobile from "./AnimatedSquaresMobile";
import BlackTagHeader from "./animated_black_tag";
import Image from "next/image";
import { getDataHeader } from "@/utilitities/data/getData";
import { headerContent } from "@/utilitities/datatypes";
import TextHeader from "./TextHeader";
import { defineLanguage } from "@/utilitities/functions";
import { language } from "@/utilitities/types";
import { useRouter } from "next/router";
import ProfileImage from "./ProfileImage";
import { isLineStaterd } from "@/store/redures/headerReducer";
import { useAppSelector } from "@/store/hooks";
import { animate, motion, useMotionValue, useTransform } from "framer-motion";
import AnimatedBlackTagMobile from "./Animated_black_tag_mobile";
import SquaresBackground from "./SquaresBackground";
import SquaresBackgroundMobile from "./SquaresBackgroundMobile";
import { plus_jakarta_sans } from "@/utilitities/fonts";


const langButton =
  "inline-block rounded-full border px-3 py-1.5 text-base font-normal leading-normal text-white transition-colors btnSize";
const langButtonActive = "bg-success border-success hover:bg-success-hover";
const langButtonInactive =
  "bg-secondary border-secondary hover:bg-secondary-hover";

const Header: React.FC = () => {
  const [data, setData] = useState<headerContent | null>(null);
  const [currentLang, setCurrentLang] = useState<language["language"]>("pt");
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
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataHeader(dataLang);
      setData(auxData);
      setCurrentLang(dataLang);
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
      <div className="hidden md:block">
        {data && <SquaresBackground {...data} />}
      </div>
      <div className="block md:hidden">
        {data && <SquaresBackgroundMobile {...data} />}
      </div>
      <div className="block md:hidden pt-4 mt-4" />
      <motion.div className="mt-12 pt-12 text-center" style={{ y, opacity }}>
        <div className={plus_jakarta_sans.className}>{data?.language}</div>
        <div className="text-display-5 font-light leading-tight text-h2 mt-4">
          <button
            id="id_btn_pt"
            className={`${langButton} ${
              currentLang === "pt" ? langButtonActive : langButtonInactive
            } mr-1`}
            onClick={() => {
              defineLang({ language: "pt" });
            }}
          >
            Português
          </button>
          <button
            id="id_btn_en"
            className={`${langButton} ${
              currentLang === "en" ? langButtonActive : langButtonInactive
            } ml-1`}
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
