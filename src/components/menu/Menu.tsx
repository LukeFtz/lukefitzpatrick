import { getDataMenu } from "@/utilitities/data/getData";
import { menuContent } from "@/utilitities/datatypes";
import React, { useEffect, useState } from "react";
import MenuIcon from "./MenuIcon";
import { orbitron, plus_jakarta_sans } from "@/utilitities/fonts";

// import { Container } from './styles';
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
    <div className="text-center shadow-[-20px_0_20px_rgba(0,0,0,0.15)] pt-16">
      <h2 id="id_title_menu" className={`${orbitron.className} bg-black bg-clip-text text-2xl font-bold uppercase tracking-wider text-transparent pt-2  md:text-4xl`}>
        {data?.title}
      </h2>
      <div className="flex flex-wrap justify-center items-end pt-12 ">

        {data && <MenuIcon {...data} />}

      </div>
    </div>
  );
};

export default Menu;
