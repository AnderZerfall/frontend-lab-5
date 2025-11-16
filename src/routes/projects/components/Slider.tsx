import { useEffect, useMemo, useRef, useState } from "react";
import { Slide, type SlideProps } from "./Slide";
import "./Slider.css";

export interface SliderProps {
  content: SlideProps[];
}

export const Slider = ({ content }: SliderProps) => {
    const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <div className="projects-block__cards slider">
      <button className="slider-previous-button slider-button" onClick={handleNextSlide}>
        ⪡
      </button>
      <div className="slider-container">{slides}</div>

      <button className="slider-next-button slider-button" onClick={handlePrevSlide}>
        ⪢
      </button>
    </div>
  );
};
