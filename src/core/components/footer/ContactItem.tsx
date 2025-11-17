import type { ReactNode } from "react";
import type { LinkType } from "../../domain/constants/LinkType";
import { getLinkByType } from "../../utils/linkBuilder";
import "./Footer.css";

export interface ContactItemProps {
  type: LinkType;
  link: string;
  title?: string;
  icon?: string | ReactNode;
}

export const ContactItem = ({ type, link, title, icon }: ContactItemProps) => {
  return (
    <p className="footer__contact-item">
      {icon}
      <a href={getLinkByType(type, link)} className="footer__contact-link">
        {title ? title : link}
      </a>
    </p>
  );
};
