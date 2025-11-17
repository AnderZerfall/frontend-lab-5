import { Button } from "../../../core/components/button/Button";
import classNames from "classnames";
import type { SlideContent } from "../models/Slide";
import "./Slider.css";

export interface SlideProps {
  content: SlideContent;
  isActive?: boolean;
  index?: number;
}

export const Slide = ({
  content: { id, title, subtitle, description, imageLink, link },
  isActive = false,
  index = 0,
}: SlideProps) => {
  const handleRedirect = () => {
    window.location.href = link;
  };

  const renderList = () =>
    description.map((desc, descIndex) => (
      <li className="card-list__item" key={`list-item-${id}-${descIndex}`}>
        {desc}
      </li>
    ));
  return (
    <article
      className={classNames("card projects-block__card slide", {
        "current-slide": isActive,
      })}
      style={{ translate: `${-100 * index}%` }}
    >
      <div className="card__content">
        <div className="card__headline">
          <h3 className="card__title">{title}</h3>
          <span className="card__subtitle">{subtitle}</span>
        </div>
        <div className="card__description">
          <ol className="card__list card-list">{renderList()}</ol>
        </div>
        <Button onClick={handleRedirect}>Go to Doodly</Button>
      </div>
      <div className="image-wrapper card__image">
        <img src={imageLink} alt={title} className="image-wrapper__image" />
      </div>
    </article>
  );
};
