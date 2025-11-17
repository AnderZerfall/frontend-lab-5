import type { MissionContent } from "../../models/Mission";
import "./MissionCard.css";

export interface MissionCardProps {
  missionContent: MissionContent;
}

export const MissionCard = ({
  missionContent: { title, description, imageLink },
}: MissionCardProps) => {
  return (
    <article className="card mission-block__card">
      <div className="card__text-block">
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description}</p>
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
