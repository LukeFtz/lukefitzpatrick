import { Plus_Jakarta_Sans } from "@next/font/google";
import Image from "next/image";
import React, { useEffect } from "react";
import devices from "../../../public/media/prototype/devices.svg";
import adobe from "../../../public/media/prototype/adobe.svg";
import figma from "../../../public/media/prototype/figma.svg";
import photoshop from "../../../public/media/prototype/photoshop.svg";
import $ from "jquery";
import { useAppDispatch } from "@/store/hooks";
import { setPrototypeScale } from "@/store/redures/backgroundLineReducer";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});

const Prototype: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const line = document.getElementById("id_prototype_div");
    const lineVerticalLine = document.getElementById(
      "id_vertical_prototype_line"
    );
    // console.log(line?.getBoundingClientRect().height);
    // console.log(lineVerticalLine?.getBoundingClientRect().height);
    if (line && lineVerticalLine) {
      const scaleY =
        (line.getBoundingClientRect().height + window.screen.height / 1.6) /
        lineVerticalLine.getBoundingClientRect().height;
      dispatch(setPrototypeScale(Math.round(scaleY * 100) / 100));
      // console.log(scaleY);
    }
  }, []);

  return (
    <div id="id_prototype_div" className="container mt-5">
      <h2 className={`${plus_jakarta_sans.className} fs-1 mb-5`}>
        Prototipação
      </h2>

      <div className="row justify-content-center mt-5">
        <div className="row col-12 col-xl-6 mt-5 pt-5 text-center">
          <Image src={devices} alt="devices icons" className="img-fluid" />
        </div>
        <div className="w-100" />
        <div className="row justify-content-center col-4 mt-5 pt-5">
          <div className="col-10 text-center">
            <Image src={adobe} alt="adobe XD icon" className="img-fluid" />
          </div>
          <div className="text-center mt-3">
            <p className={`${plus_jakarta_sans.className} fs-2`}>Adobe XD</p>
          </div>
        </div>
        <div className="row justify-content-center col-4 mt-5 pt-5">
          <div className="col-10 text-center">
            <Image src={figma} alt="figma icon" className="img-fluid" />
          </div>
          <div className="text-center mt-3">
            <p className={`${plus_jakarta_sans.className} fs-2`}>Figma</p>
          </div>
        </div>
        <div className="row justify-content-center col-4 mt-5 pt-5">
          <div className="col-10 text-center">
            <Image
              src={photoshop}
              alt="Adobe Photoshop icon"
              className="img-fluid"
            />
          </div>
          <div className="text-center mt-3">
            <p className={`${plus_jakarta_sans.className} fs-2`}>
              Adobe Photoshop
            </p>
          </div>
        </div>

        <div className="col-12 col-xl-10 mt-5">
          <p className={`${plus_jakarta_sans.className} fs-6 text-center`}>
            Essas ferramentas apresentadas são as principais que eu domino e
            utilizo para realizar prototipagem de layout dos sistemas para os
            dispositivos mobile e desktop
          </p>
        </div>
        <div className="col-12 col-xl-10 mt-5">
          <p className={`${plus_jakarta_sans.className} fs-6 text-center`}>
            Além dessas já realizei alguns trabalhos com ferramentas como Corel
            Draw e Adobe Ilustrator.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prototype;
