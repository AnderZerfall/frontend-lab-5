import "./Banner.css";

export interface DefaultBannerProps {
  title: string;
  subtitle?: string;
}

export const DefaultBanner = ({ title, subtitle }: DefaultBannerProps) => {
  return (
    <section className="content-block banner-block">
      <div className="container banner-block__container">
        <div className="banner-block__headline">
          <h2 className="banner-block__title">{title}</h2>
          {subtitle && <p className="hero-block__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
};
