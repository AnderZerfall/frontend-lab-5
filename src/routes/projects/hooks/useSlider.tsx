import { useState } from "react";

export interface SliderOptions {
  maxSlides: number;
}

export const useSlider = ({ maxSlides }: SliderOptions) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === maxSlides ? 0 : prev + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? maxSlides : prev - 1));
  };

  return {
    currentSlide,
    handleNextSlide,
    handlePrevSlide,
  };
};
