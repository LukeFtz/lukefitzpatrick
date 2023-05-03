import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import $ from "jquery";
import { M_PLUS_1, Plus_Jakarta_Sans } from "@next/font/google";
import { menuContent } from "@/utilitities/datatypes";
import { setTopPosition } from "@/store/redures/backgroundLineReducer";
import { useAppDispatch } from "@/store/hooks";
import Link from "next/link";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

let svgLeft: number;

let width = 0;
let height = 0;

const MenuIcon = ({ backend, frontend, other, prototype }: menuContent) => {
  const wrapDiv = useRef(null);
  const { scrollYProgress } = useScroll({
    target: wrapDiv,
  });

  // const opacityMobile = useMotionValue(0);
  // const opacityMobile:MotionValue = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const opacityMobile: MotionValue = useTransform(
    scrollYProgress,
    [0, 0.15],
    [0, 1]
  );
  const opacity = useTransform(scrollYProgress, [0.5, 0.6], [0, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.6, 0.7], [0, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const opacity4 = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  const position = useMotionValue<string>("relative");
  const top = useMotionValue<number>(0);
  const bottom = useMotionValue<number>(0);
  const left = useMotionValue<number>(0);
  const windowHeight = useMotionValue<number>(0);

  const dispatch = useAppDispatch();

  const definePosition = () => {
    const contentDiv = $("#id_menu");
    const circlePrototype = $("#id_prototype_circle");
    const circleFrontend = $("#id_frontend_circle");
    const circleBackend = $("#id_backend_circle");
    const circleOthers = $("#id_others_circle");

    const textPrototype = $("#id_text_prototype");
    const textFrontend = $("#id_text_frontend");
    const textBackend = $("#id_text_backend");
    const textOthers = $("#id_text_other");

    if (scrollYProgress.get() <= 0) {
      position.set("relative");
      contentDiv.addClass("align-items-center");
      contentDiv.addClass("align-items-md-start");
      contentDiv.removeClass("align-items-end");
      left.set(0);
    } else if (scrollYProgress.get() > 0 && scrollYProgress.get() < 1) {
      position.set("fixed");
      left.set(svgLeft);
    } else {
      contentDiv.removeClass("align-items-center");
      contentDiv.removeClass("align-items-md-start");
      contentDiv.addClass("align-items-end");
      position.set("relative");
      left.set(0);

      textPrototype.hover(
        () => {
          textPrototype.addClass("textColor");
          circlePrototype.addClass("circleColorHover");
        },
        () => {
          circlePrototype.removeClass("circleColorHover");
          textPrototype.removeClass("textColor");
        }
      );
      circlePrototype.hover(
        () => {
          textPrototype.addClass("textColor");
          circlePrototype.addClass("circleColorHover");
        },
        () => {
          circlePrototype.removeClass("circleColorHover");
          textPrototype.removeClass("textColor");
        }
      );

      textFrontend.hover(
        () => {
          textFrontend.addClass("textColor");
          circleFrontend.addClass("circleColorHover");
        },
        () => {
          circleFrontend.removeClass("circleColorHover");
          textFrontend.removeClass("textColor");
        }
      );
      circleFrontend.hover(
        () => {
          textFrontend.addClass("textColor");
          circleFrontend.addClass("circleColorHover");
        },
        () => {
          circleFrontend.removeClass("circleColorHover");
          textFrontend.removeClass("textColor");
        }
      );

      textBackend.hover(
        () => {
          textBackend.addClass("textColor");
          circleBackend.addClass("circleColorHover");
        },
        () => {
          circleBackend.removeClass("circleColorHover");
          textBackend.removeClass("textColor");
        }
      );
      circleBackend.hover(
        () => {
          textBackend.addClass("textColor");
          circleBackend.addClass("circleColorHover");
        },
        () => {
          circleBackend.removeClass("circleColorHover");
          textBackend.removeClass("textColor");
        }
      );

      textOthers.hover(
        () => {
          textOthers.addClass("textColor");
          circleOthers.addClass("circleColorHover");
        },
        () => {
          circleOthers.removeClass("circleColorHover");
          textOthers.removeClass("textColor");
        }
      );
      circleOthers.hover(
        () => {
          textOthers.addClass("textColor");
          circleOthers.addClass("circleColorHover");
        },
        () => {
          circleOthers.removeClass("circleColorHover");
          textOthers.removeClass("textColor");
        }
      );
    }
  };

  const defineStaticPosition = () => {
    const contentDiv = $("#id_menu");
    const renderedSvg = document.getElementById("id_menu_svg");
    const renderedTitle = document.getElementById("id_title_menu");

    if (renderedSvg && renderedTitle) {
      const svgHeight = renderedSvg.getBoundingClientRect().height;
      // const svgWidth = renderedSvg.getBoundingClientRect().width;
      const svgleft = renderedSvg.getBoundingClientRect().left;
      svgLeft = svgleft;
      // contentDiv.height(svgHeight * 2);
      windowHeight.set(height * 2);
      const windowSize = height;

      const aspectRatio = Math.round((width / height) * 100) / 100;

      // console.log(aspectRatio);
      // console.log(window.screen.width);
      if (aspectRatio < 0.9) {
        top.set(windowSize * 0.25);
        bottom.set(windowSize * 0.47);
      } else if (aspectRatio >= 1.3 && aspectRatio < 1.4) {
        top.set(windowSize * 0.025);
        bottom.set(windowSize * 0.05);
      } else {
        top.set(windowSize * 0.025);
        bottom.set(windowSize * 0.05);
      }
      if (aspectRatio < 0.9) {
        const backgroundLineTop =
          contentDiv.position().top +
          svgHeight * 1.44 +
          renderedTitle.getBoundingClientRect().height -
          windowSize;
        dispatch(setTopPosition(backgroundLineTop));
      } else if (aspectRatio >= 1.3 && aspectRatio < 1.6) {
        const backgroundLineTop =
          contentDiv.position().top +
          svgHeight * 1.35 +
          renderedTitle.getBoundingClientRect().height -
          windowSize;
        dispatch(setTopPosition(backgroundLineTop));
      } else if (aspectRatio >= 1.6) {
        const backgroundLineTop =
          contentDiv.position().top +
          // svgHeight * 1.4 +
          svgHeight * 1.3 +
          renderedTitle.getBoundingClientRect().height -
          windowSize;
        dispatch(setTopPosition(backgroundLineTop));
      } else if (aspectRatio < 0.9) {
        const backgroundLineTop =
          contentDiv.position().top +
          svgHeight * 1.5 +
          renderedTitle.getBoundingClientRect().height -
          windowSize;
        dispatch(setTopPosition(backgroundLineTop));
      }
    }
  };

  useEffect(() => {
    const auxWidth = $(window).width();
    const auxHeight = $(window).height();

    if (auxWidth && auxHeight) {
      width = auxWidth;
      height = auxHeight;
      defineStaticPosition();
      $(window).on("scroll", () => definePosition());
    }
  }, []);

  return (
    <motion.div
      id="id_menu"
      className="row justify-content-center"
      ref={wrapDiv}
      style={{
        paddingBottom: bottom,
        opacity: opacityMobile,
        height: windowHeight,
      }}
    >
      <div className="col svgSizeFull">
        <motion.svg
          viewBox="0 0 977 978"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial="hidden"
          animate="visible"
          id="id_menu_svg"
          preserveAspectRatio="none"
          style={{
            position,
            top: top,
            // bottom: top,
            left: left,
          }}
          className="svgSizeFull"
        >
          <motion.path
            d="M519.655 471.708v-9.213h-56.728v8.131h12.394c.202-1.612 1.56-2.864 3.225-2.864a3.267 3.267 0 110 6.535 3.255 3.255 0 01-3.225-2.861h-12.394v5.242h9.669v.809h-9.669v11.185h23.644c.034.007 2.34.032 3.864-1.46.913-.895 1.378-2.165 1.378-3.779v-4.824c-1.612-.202-2.865-1.562-2.865-3.227a3.268 3.268 0 016.536 0 3.259 3.259 0 01-2.863 3.227v4.824c0 1.843-.547 3.312-1.623 4.362-1.66 1.618-3.997 1.688-4.384 1.688H462.927v7.075h28.116c.204-1.611 1.562-2.862 3.228-2.862a3.268 3.268 0 010 6.536 3.26 3.26 0 01-3.228-2.864h-28.116v4.745h19.449c.059.002 4.399.206 4.399 5.361v11.75h12.619v-8.686h.812v8.686h4.406v-10.957a3.256 3.256 0 01-2.863-3.226 3.268 3.268 0 016.535 0 3.254 3.254 0 01-2.86 3.226v10.957h4.042v-6.484h.809v6.484h9.38v-38.266h-12.391a3.256 3.256 0 01-3.227 2.861 3.267 3.267 0 110-6.534 3.255 3.255 0 013.227 2.862h12.391v-7.628h-9.082v-.811h9.082z"
            fill="#3B8D4E"
          />
          <motion.path
            d="M472.596 511.576a3.255 3.255 0 01-3.229-2.861h-6.44v10.509h23.038v-11.751c0-4.381-3.453-4.545-3.602-4.55h-19.436v4.981h6.44a3.256 3.256 0 013.229-2.863 3.266 3.266 0 013.265 3.268 3.266 3.266 0 01-3.265 3.267z"
            fill="#3B8D4E"
          />
          <motion.path
            d="M521.277 520.844h-59.971v-59.971h59.971v59.971zm15.297-51.866v-2.431h-9.624v-6.018a5.328 5.328 0 00-5.328-5.328h-6.019v-9.625h-2.432v9.625h-5.268v-9.625h-2.43v9.625h-5.267v-9.625h-2.431v9.625h-5.268v-9.625h-2.431v9.625h-5.269v-9.625h-2.431v9.625h-5.265v-9.625h-2.431v9.625h-5.269v-9.625h-2.431v9.625h-6.016a5.327 5.327 0 00-5.328 5.328v6.018h-9.624v2.431h9.624v5.268h-9.624v2.432h9.624v5.266h-9.624v2.432h9.624v5.267h-9.624v2.431h9.624v5.269h-9.624v2.431h9.624v5.267h-9.624v2.433h9.624v5.266h-9.624v2.432h9.624v6.018a5.327 5.327 0 005.328 5.327h6.016v9.624h2.431v-9.624h5.269v9.624h2.431v-9.624h5.265v9.624h2.431v-9.624h5.269v9.624h2.431v-9.624h5.268v9.624h2.431v-9.624h5.267v9.624h2.43v-9.624h5.268v9.624h2.432v-9.624h6.019a5.328 5.328 0 005.328-5.327v-6.018h9.624v-2.432h-9.624v-5.266h9.624v-2.433h-9.624v-5.267h9.624v-2.431h-9.624v-5.269h9.624v-2.431h-9.624v-5.267h9.624v-2.432h-9.624v-5.266h9.624v-2.432h-9.624v-5.268h9.624z"
            fill="#006918"
          />
          <motion.path
            d="M504.037 477.285a3.268 3.268 0 100 6.534 3.256 3.256 0 003.227-2.861h12.391v-.811h-12.391a3.255 3.255 0 00-3.227-2.862zM469.367 507.904h-6.44v.811h6.44a3.256 3.256 0 003.229 2.862 3.267 3.267 0 003.265-3.268 3.266 3.266 0 00-3.265-3.268 3.256 3.256 0 00-3.229 2.863zM490.435 487.212c-1.524 1.492-3.83 1.467-3.864 1.46h-23.644v.811H486.614c.387 0 2.724-.07 4.384-1.688 1.076-1.05 1.623-2.519 1.623-4.362v-4.824c1.611-.203 2.863-1.562 2.863-3.227a3.267 3.267 0 10-6.536 0c0 1.665 1.253 3.024 2.865 3.227v4.824c0 1.614-.465 2.884-1.378 3.779zM462.927 496.558v.81h28.116c-.016-.134-.041-.266-.041-.404 0-.139.025-.271.041-.406h-28.116z"
            fill="#fff"
          />
          <motion.path
            d="M486.775 519.224v-11.75c0-5.155-4.34-5.359-4.399-5.361h-19.449v.81h19.436c.149.005 3.602.17 3.602 4.551v11.75h.81zM504.612 519.224h.812v-10.957c-.135.017-.267.042-.408.042-.136 0-.27-.025-.404-.042v10.957zM500.206 519.224v-8.686h-.812v8.686h.812zM510.275 519.224v-6.484h-.809v6.484h.809zM519.655 472.519v-.811h-9.082v.811h9.082zM462.927 470.625v.81h12.394c-.018-.135-.041-.267-.041-.405 0-.139.023-.27.041-.405h-12.394zM472.596 477.487v-.809h-9.669v.809h9.669z"
            fill="#fff"
          />
          <motion.path
            d="M462.927 508.715v-46.22h56.728v56.729H462.927v-10.509zm58.35 12.129v-59.971h-59.971v59.971h59.971z"
            fill="#000"
          />
          <motion.path
            d="M475.321 470.626c-.018.134-.041.265-.041.404 0 .138.023.271.041.405a3.255 3.255 0 003.225 2.862 3.267 3.267 0 100-6.535c-1.665 0-3.023 1.252-3.225 2.864zM491.043 496.558c-.016.135-.041.268-.041.406s.025.27.041.404a3.26 3.26 0 003.228 2.864 3.268 3.268 0 000-6.536c-1.666 0-3.024 1.251-3.228 2.862zM501.749 505.041a3.256 3.256 0 002.863 3.226c.134.017.268.042.404.042.141 0 .273-.025.408-.042a3.254 3.254 0 002.86-3.226 3.268 3.268 0 00-6.535 0z"
            fill="#fff"
          />

          {/* ********************* Prototype ************** */}
          <Link href={"/#id_prototype_div"} scroll={false}>
            <motion.path
              id="id_prototype_circle"
              d="M1 487.195C1 426.192 50.453 376.74 111.455 376.74c61.003 0 110.455 49.452 110.455 110.455 0 61.002-49.452 110.455-110.455 110.455C50.453 597.65 1 548.197 1 487.195z"
              stroke="#006918"
              fill="#fff"
              className="transition"
              strokeMiterlimit={10}
              style={{ pathLength: scrollYProgress }}
            />
          </Link>

          {/* ********************* Frontend ************** */}

          <Link href={"/#id_frontend_div"} scroll={false}>
            <motion.path
              id="id_frontend_circle"
              d="M597.757 110.447c.686 60.999-48.207 111.005-109.205 111.692-61 .686-111.005-48.207-111.692-109.206-.686-60.996 48.206-111.003 109.206-111.69C547.064.557 597.07 49.451 597.757 110.447z"
              stroke="#006918"
              fill="#fff"
              className="transition"
              strokeMiterlimit={10}
              style={{ pathLength: scrollYProgress }}
            />
          </Link>

          {/* ********************* Backend ************** */}
          <Link href={"/#id_Backend_div"} scroll={false}>
            <motion.path
              id="id_backend_circle"
              d="M754.093 486.891c0-61.003 49.452-110.456 110.455-110.456 61.007 0 110.452 49.453 110.452 110.456 0 61.002-49.445 110.455-110.452 110.455-61.003 0-110.455-49.453-110.455-110.455z"
              stroke="#006918"
              fill="#fff"
              className="transition"
              strokeMiterlimit={10}
              style={{ pathLength: scrollYProgress }}
            />
          </Link>

          {/* ********************* Others ************** */}
          <Link href={"/#id_main_iot_div"} scroll={false}>
            <motion.path
              id="id_others_circle"
              d="M377.5 865.235c0-61.002 49.453-110.455 110.455-110.455 61.004 0 110.456 49.453 110.456 110.455 0 61.001-49.452 110.455-110.456 110.455-61.002 0-110.455-49.454-110.455-110.455z"
              stroke="#006918"
              fill="#fff"
              className="transition"
              strokeMiterlimit={10}
              style={{ pathLength: scrollYProgress }}
            />
          </Link>

          <motion.path
            d="M468.196 447.547l.009-40.692s.576-7.905-4.371-12.853c-4.948-4.947-12.87-4.68-12.87-4.68l-26.216.033m-7.878.092a4.316 4.316 0 118.631 0 4.316 4.316 0 01-8.631 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M475.898 446.594s-.226-54.161-.267-54.742c-.377-19.289-18.556-20.541-18.556-20.541s-134.039.015-134.466.013c-18.276-.219-18.143-14.718-18.143-14.718s-.04-76.393-.044-76.774c-.034-13.746-13.628-13.666-13.628-13.666l-90.416.039m-8.846-.14a4.315 4.315 0 118.63 0 4.315 4.315 0 01-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M483.602 446.725s-.642-107.988-.634-110.315c-.603-32.209-28.618-32.43-28.618-32.43s-116.724.091-118.767.101c-17.258.029-17.241-23.597-17.241-23.597s-.048-41.281-.042-41.83c.113-22.987-15.262-22.346-15.262-22.346s-83.938.029-84.95-.042c-21.204-.205-19.856-25.751-19.856-25.751l-.487-79.256M194 107.315a4.315 4.315 0 118.63 0 4.315 4.315 0 01-8.63 0zM514.388 447.508l-.009-40.693s-.576-7.905 4.371-12.852c4.947-4.948 12.869-4.68 12.869-4.68l26.217.032m-.725-.219a4.315 4.315 0 118.63-.001 4.315 4.315 0 01-8.63.001z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M506.715 447.245s.226-54.162.265-54.743c.377-19.288 18.557-20.54 18.557-20.54s134.04.013 134.466.012c18.277-.218 18.143-14.717 18.143-14.717s.039-76.393.044-76.775c.034-13.745 13.629-13.665 13.629-13.665l90.415.039m-.579.05a4.316 4.316 0 118.632.002 4.316 4.316 0 01-8.632-.002z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M498.98 447.177s.099-108.029.09-110.357c.604-32.209 29.162-32.388 29.162-32.388s116.724.091 118.767.101c17.259.029 17.242-23.597 17.242-23.597s.048-41.281.041-41.83c-.112-22.988 15.263-22.346 15.263-22.346s83.938.029 84.95-.042c21.203-.206 19.856-25.751 19.856-25.751l.487-79.256m-4.373-3.568a4.316 4.316 0 118.63.002 4.316 4.316 0 01-8.63-.002z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M491.29 449.5l-.64-227.5"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />

          <motion.path
            d="M468.235 531.402l.009 40.693s.576 7.905-4.371 12.852c-4.948 4.948-12.869 4.68-12.869 4.68l-26.216-.032m-7.879-.092a4.316 4.316 0 108.631 0 4.316 4.316 0 00-8.631 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M475.937 532.355s-.226 54.161-.266 54.743c-.378 19.289-18.557 20.541-18.557 20.541s-134.039-.015-134.465-.013c-18.277.218-18.144 14.718-18.144 14.718s-.039 76.392-.044 76.774c-.034 13.745-13.628 13.666-13.628 13.666l-90.416-.039m-8.846.14a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M483.641 532.225s-.642 107.988-.634 110.315c-.603 32.209-28.618 32.43-28.618 32.43s-116.723-.091-118.767-.101c-17.258-.029-17.241 23.596-17.241 23.596s-.048 41.282-.042 41.831c.113 22.987-15.262 22.346-15.262 22.346s-83.938-.029-84.95.042c-21.204.205-19.857 25.751-19.857 25.751l-.486 79.256m-4.537 3.004a4.316 4.316 0 108.632-.002 4.316 4.316 0 00-8.632.002zM514.427 531.442l-.008 40.693s-.577 7.905 4.37 12.852 12.869 4.68 12.869 4.68l26.217-.032m-.725.219a4.316 4.316 0 108.632 0 4.316 4.316 0 00-8.632 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M506.754 531.705s.226 54.162.265 54.743c.378 19.288 18.557 20.54 18.557 20.54s134.04-.014 134.466-.012c18.277.218 18.143 14.717 18.143 14.717s.039 76.393.045 76.775c.033 13.745 13.627 13.665 13.627 13.665l90.417-.039m-.58-.051a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M499.02 531.773s.098 108.029.089 110.357c.604 32.208 29.163 32.388 29.163 32.388s116.723-.091 118.766-.101c17.259-.029 17.242 23.597 17.242 23.597s.048 41.281.041 41.83c-.112 22.988 15.263 22.346 15.263 22.346s83.938-.029 84.949.042c21.205.206 19.857 25.751 19.857 25.751l.487 79.256m-4.373 3.568a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />

          <motion.path
            d="M491.369 531.926l-.869 223.442"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />

          <motion.path
            d="M448.37 475.444s-42.438.209-43.768.188c-9.324-.157-9.109-9.224-9.109-9.224s-.044-70.469-.051-71.307c-.105-12.472-10.083-12.628-10.083-12.628s-65.684.019-66.407-.01c-8.573.366-8.483 7.781-8.483 7.781s-.038 15.196-.021 15.592c.121 8.261 8.31 8.295 8.31 8.295s52.39.429 53.157.37c9.581.445 9.516 8.138 9.516 8.138s-.045 27.508-.065 27.945c.138 7.556-9.928 7.017-9.928 7.017l-41.761.012m-8.019-.043a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M448.103 467.746s-30.173.231-30.969.231c-10.033.039-10.136-7.249-10.136-7.249s-.006-39.899-.002-40.59c.206-7.828 10.272-7.341 10.272-7.341l18.029.106m-.391.947a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0zM448.761 514s-30.173-.231-30.969-.232c-10.033-.04-10.136 7.25-10.136 7.25s-.005 39.897-.003 40.589c.208 7.828 10.273 7.34 10.273 7.34l18.029-.106m-.629-.258a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M448.716 506.253s-42.439-.209-43.769-.186c-9.323.156-9.108 9.223-9.108 9.223s-.045 70.469-.052 71.306c-.105 12.474-10.083 12.629-10.083 12.629s-65.683-.02-66.407.01c-8.572-.367-8.482-7.781-8.482-7.781s-.038-15.196-.022-15.592c.122-8.261 8.31-8.296 8.31-8.296s52.391-.428 53.157-.368c9.581-.447 9.517-8.139 9.517-8.139s-.045-27.509-.066-27.946c.139-7.555-9.927-7.017-9.927-7.017l-41.762-.011m-7.931.178a4.315 4.315 0 108.63 0 4.315 4.315 0 00-8.63 0zM446.595 483.175s-159.162-.907-160.642-1.043c-20.934.174-19.801-12.023-19.801-12.023s.015-108.847.024-109.906c-.085-17.662-17.136-17.389-17.136-17.389s-123.282-.052-124.278.004c-12.502-.074-11.509-11.526-11.509-11.526l-.269-57.233m-4.325-3.56a4.314 4.314 0 004.315 4.315 4.315 4.315 0 100-8.631 4.316 4.316 0 00-4.315 4.316z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M447.818 498.551s-158.856-.03-160.338.106c-20.934-.174-20.106 12.961-20.106 12.961s.016 108.848.025 109.907c-.086 17.66-17.136 17.388-17.136 17.388s-123.282.051-124.278-.005c-12.502.074-11.51 11.526-11.51 11.526l-.268 57.233m-4.465 3.422a4.315 4.315 0 108.631 0 4.315 4.315 0 00-8.631 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M446.901 490.877L222 490"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />

          <motion.path
            d="M529.462 475.436s42.437.209 43.767.188c9.325-.157 9.109-9.225 9.109-9.225s.045-70.468.052-71.306c.105-12.472 10.082-12.628 10.082-12.628s65.685.02 66.408-.01c8.572.367 8.482 7.782 8.482 7.782s.039 15.195.021 15.591c-.121 8.26-8.31 8.295-8.31 8.295s-52.39.428-53.157.369c-9.58.446-9.516 8.139-9.516 8.139s.046 27.509.067 27.945c-.14 7.556 9.927 7.017 9.927 7.017l41.761.012m8.019-.043a4.316 4.316 0 11-8.632 0 4.316 4.316 0 018.632 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M529.728 467.737s30.173.231 30.97.231c10.033.04 10.136-7.249 10.136-7.249s.005-39.897.002-40.589c-.207-7.828-10.273-7.341-10.273-7.341l-18.028.106m.39.947a4.315 4.315 0 11-8.63 0 4.315 4.315 0 018.63 0zM529.07 513.992s30.174-.231 30.969-.232c10.034-.039 10.136 7.25 10.136 7.25s.006 39.897.003 40.589c-.208 7.828-10.273 7.341-10.273 7.341l-18.029-.106m.629-.259a4.316 4.316 0 11-8.63-.002 4.316 4.316 0 018.63.002z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M529.116 506.245s42.438-.209 43.768-.186c9.324.156 9.108 9.224 9.108 9.224s.045 70.468.052 71.305c.106 12.473 10.083 12.629 10.083 12.629s65.684-.02 66.407.01c8.573-.367 8.482-7.782 8.482-7.782s.038-15.195.022-15.591c-.122-8.261-8.31-8.296-8.31-8.296s-52.39-.427-53.157-.368c-9.581-.446-9.517-8.139-9.517-8.139s.047-27.509.067-27.946c-.14-7.555 9.927-7.017 9.927-7.017l41.761-.011m7.932.178a4.317 4.317 0 11-8.634-.002 4.317 4.317 0 018.634.002zM531.236 483.167s159.162-.907 160.642-1.042c20.934.173 19.801-12.024 19.801-12.024s-.015-108.847-.024-109.906c.085-17.661 17.137-17.389 17.137-17.389s123.281-.052 124.277.004c12.502-.074 11.51-11.525 11.51-11.525l.268-57.234m4.325-3.56a4.315 4.315 0 11-8.63.001 4.315 4.315 0 018.63-.001z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M530.013 498.543s158.857-.03 160.338.106c20.934-.174 20.106 12.961 20.106 12.961s-.016 108.847-.025 109.906c.086 17.661 17.137 17.389 17.137 17.389s123.282.051 124.277-.005c12.502.074 11.51 11.526 11.51 11.526l.268 57.233m4.465 3.422a4.314 4.314 0 11-8.63 0 4.316 4.316 0 118.63 0z"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />
          <motion.path
            d="M529.93 490.873l224.316-.623"
            stroke="#006918"
            strokeWidth={1.27}
            strokeMiterlimit={10}
            style={{ pathLength: scrollYProgress }}
          />

          <Link href={"/#id_prototype_div"} scroll={false}>
            <motion.text xmlSpace="preserve" id="id_text_prototype" fill="#000">
              <motion.tspan
                x={10}
                y={500}
                style={{ opacity }}
                className={`${plus_jakarta_sans.className} fs-2 ms-2 transition`}
              >
                {prototype}
              </motion.tspan>
            </motion.text>
          </Link>

          <Link href={"/#id_frontend_div"} scroll={false}>
            <motion.text id="id_text_frontend" xmlSpace="preserve" fill="#000">
              <motion.tspan
                x={410}
                y={120}
                style={{ opacity: opacity2 }}
                className={`${plus_jakarta_sans.className} fs-2 ms-2 transition`}
              >
                {frontend}
              </motion.tspan>
            </motion.text>
          </Link>

          <Link href={"/#id_Backend_div"} scroll={false}>
            <motion.text xmlSpace="preserve" id="id_text_backend" fill="#000">
              <motion.tspan
                x={790}
                y={500}
                style={{ opacity: opacity3 }}
                className={`${plus_jakarta_sans.className} fs-2 ms-2 transition`}
              >
                {backend}
              </motion.tspan>
            </motion.text>
          </Link>

          <Link href={"/#id_main_iot_div"} scroll={false}>
            <motion.text id="id_text_other" xmlSpace="preserve" fill="#000">
              <motion.tspan
                x={433}
                y={880}
                style={{ opacity: opacity4 }}
                className={`${plus_jakarta_sans.className} fs-2 ms-2 transition`}
              >
                {other}
              </motion.tspan>
            </motion.text>
          </Link>
        </motion.svg>
      </div>
    </motion.div>
  );
};

export default MenuIcon;
