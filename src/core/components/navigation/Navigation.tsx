import { Link } from "react-router-dom";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";
import type { NavigationLink } from "../../domain/models/NavigationLink";

import "./Navigation.css";

export interface NavigationProps {
  className?: string;
  links: NavigationLink[];
}

export const Navigation = ({ className, links }: NavigationProps) => {
  const renderLinks = () =>
    links.map((link) => {
      if (link.link.includes("#")) {
        return (
          <HashLink
            to={link.link}
            className="nav__item"
            key={`link-${link.title}`}
            id={link.id}
            data-link-name
          >
            {link.title}
          </HashLink>
        );
      }

      return (
        <Link
          to={link.link}
          className="nav__item"
          key={`link-${link.title}`}
          id={link.id}
          data-link-name
        >
          {link.title}
        </Link>
      );
    });

  return (
    <nav className={classNames("nav__list", className)}>{renderLinks()}</nav>
  );
};
