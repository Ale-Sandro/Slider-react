import React, { useState } from "react";
import style from "./ContainerSlider.module.css";
import dataSlider from "./dataSlider";

export default function ConteneurSlider() {
  const [slideActive, setSlideActive] = useState(0);

  const activeSlideHandler = (slide) => {
    setSlideActive(slide);
  };
  return (
    <div className={style.containerSlider}>
      {dataSlider.map((slide, i) => {
        return (
          <div
            key={dataSlider[i].id}
            className={`${style.slide}  
              ${i === slideActive ? style["slide--active"] : " "}`}
            onClick={() => activeSlideHandler(i)}
          >
            <img src={dataSlider[i].src} alt="" />
          </div>
        );
      })}
    </div>
  );
}
