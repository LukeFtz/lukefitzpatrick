import { Plus_Jakarta_Sans } from "@next/font/google";
import React, { useEffect } from "react";
import MenuIcon from "./MenuIcon";
import TextMenu from "./TextMenu";

// import { Container } from './styles';
const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});
const Menu: React.FC = () => {
  return (
    <div className="text-center">
      <h2 className={`${plus_jakarta_sans.className} mb-5`}>
        Conhecimento Tecnológico
      </h2>
      <div className="row justify-content-center align-items-end mt-5 ">
        <div className="col-7">
          <MenuIcon />
          {/* <TextMenu /> */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
