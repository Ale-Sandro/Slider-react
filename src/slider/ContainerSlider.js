import React, { useState } from "react";
import ButtonSlider from "./ButtonSlider";
import style from "./ContainerSlider.module.css";
import dataSlider from "./dataSlider";

export default function ConteneurSlider() {
  const [slideActive, setSlideActive] = useState(0);

  const activeSlideHandler = (slide) => {
    setSlideActive(slide);
  };

  const prevSlideHandler = () => {
    if (slideActive === 0) {
      setSlideActive(dataSlider.length - 1);
      return;
    }
    setSlideActive(slideActive - 1);
  };

  const nextSlideHandler = () => {
    if (slideActive === dataSlider.length - 1) {
      setSlideActive(0);
      return;
    }
    setSlideActive(slideActive + 1);
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
      <ButtonSlider direction="left" moveSlide={prevSlideHandler} />
      <ButtonSlider direction="right" moveSlide={nextSlideHandler} />
    </div>
  );
}
