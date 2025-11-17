import type { DefaultBannerProps } from "../../../../core/components/layout/DefaultBanner";
import "./Banner.css";

export const Banner = ({ title, subtitle }: DefaultBannerProps) => {
  return (
    <section className="content-block hero-block">
      <div className="container hero-block__container">
        <div className="hero-block__headline">
          <h1 className="hero-block__title">{title}</h1>
          {subtitle && (
            <p className="hero-block__subtitle " id="type-writer">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};
