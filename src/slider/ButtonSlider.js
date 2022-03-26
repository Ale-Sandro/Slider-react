import React from "react";
import arrowLeft from "../icons/left-arrow.svg";
import arrowRight from "../icons/right-arrow.svg";
import style from "./ButtonSlider.module.css";

export default function ButtonSlider(props) {
  return (
    <button
      className={`${style.button} ${style[props.direction]}`}
      onClick={props.moveSlide}
    >
      <img
        src={props.direction === "left" ? arrowLeft : arrowRight}
        alt="button"
      />
    </button>
  );
}
