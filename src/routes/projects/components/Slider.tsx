import { Slide } from "./Slide";
import "./Slider.css";
import type { SlideContent } from "../models/Slide";
import { useSlider } from "../hooks/useSlider";

export interface SliderProps {
  slidesContent: SlideContent[];
}

export const Slider = ({ slidesContent }: SliderProps) => {
  const { currentSlide, handleNextSlide, handlePrevSlide } = useSlider({
    maxSlides: slidesContent.length - 1,
  });
  return (
    <div className="projects-block__cards slider">
      <button
        key="next-button"
        className="slider-previous-button slider-button"
        onClick={handleNextSlide}
      >
        ⪡
      </button>

      <div className="slider-container">
        {slidesContent.map((content, index) => (
          <Slide
            key={content.id}
            content={content}
            isActive={index === currentSlide}
            index={currentSlide}
          />
        ))}
      </div>

      <button
        key="previous-button"
        className="slider-next-button slider-button"
        onClick={handlePrevSlide}
      >
        ⪢
      </button>
    </div>
  );
};
