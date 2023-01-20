import { getDataMenu } from "@/utilitities/data/getData";
import { menuContent } from "@/utilitities/datatypes";
import { Plus_Jakarta_Sans } from "@next/font/google";
import React, { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";

// import { Container } from './styles';
const plus_jakarta_sans = Plus_Jakarta_Sans({
  weight: "200",
  subsets: ["latin"],
});
const Menu: React.FC = () => {
  const [data, setData] = useState<menuContent | null>(null);

  useEffect(() => {
    const dataLang: string | null = localStorage.getItem("language");
    if ((dataLang && dataLang === "en") || dataLang === "pt") {
      const auxData = getDataMenu(dataLang);
      setData(auxData);
    } else {
      localStorage.setItem("language", "pt");
      const auxData = getDataMenu("pt");
      setData(auxData);
    }
  }, []);

  return (
    <div className="text-center">
      <h2 className={`${plus_jakarta_sans.className} mb-5`}>{data?.title}</h2>
      <div className="row justify-content-center align-items-end mt-5 ">
        <div className="col-7">{data && <MenuIcon {...data} />}</div>
      </div>
    </div>
  );
};

export default Menu;
