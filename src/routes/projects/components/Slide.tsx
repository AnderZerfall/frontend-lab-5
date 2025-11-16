import type { ReactNode } from "react";
import { Button } from "../../../core/components/button/Button";
import "./Slider.css"
import classNames from "classnames";

export interface SlideProps {
  title: string;
  subtitle: string | ReactNode;
  imageLink: string;
  link: string;
  description: string[] | ReactNode[];
  isActive?: boolean
}

export const Slide = ({
  title,
  subtitle,
  description,
  imageLink,
  link,
  isActive = false,
}: SlideProps) => {
  const handleRedirect = () => {
    window.location.href = link;
  };

  const renderList = () =>
    description.map((desc) => <li className="card-list__item">{desc}</li>);
  return (
    <article className={classNames("card projects-block__card slide", { "current-slide": isActive})}>
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
        <img
          src={imageLink}
          alt={title}
          className="image-wrapper__image mission-block__img"
        />
      </div>
    </article>
  );
};
