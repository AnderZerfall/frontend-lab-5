import { ContactItem } from "./ContactItem";
import { Navigation } from "../navigation/Navigation";
import { Link } from "react-router-dom";
import { contacts } from "./config";
import { links } from "../navigation/config";
import "./Footer.css"

export const Footer = () => {
  const renderContactBlock = () =>
    contacts.map((props) => <ContactItem {...props} key={`item-${props.title}`} />);

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <Link to="/" aria-label="Go to homepage">
            FUKURO
          </Link>
        </div>

        <Navigation links={links} />

        <address className="footer__contact" aria-label="Contact information">
          {renderContactBlock()}
        </address>
      </div>
    </footer>
  );
};
