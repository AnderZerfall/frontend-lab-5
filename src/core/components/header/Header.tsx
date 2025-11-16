import { Link, useNavigate } from "react-router";
import { Navigation } from "../navigation/Navigation";
import { links } from "../navigation/config";
import { Button } from "../button/Button";
import { BurgerMenu } from "../burger-menu/BurgerMenu";
import { useState } from "react";
import { BurgerMenuButton } from "../burger-menu/BurgerMenuButton";
import { router } from "../../../routes/routes";

import "./Header.css"

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const filteredLinks = links.filter(
    (link) => link.title.toLowerCase() !== "contacts"
  );

  const toggleBurgerMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
      <header className="header">
        <div className="header__container">
          <Link to="/" aria-label="Go to homepage" className="header__logo">
            FUKURO
          </Link>
          <BurgerMenuButton onClick={toggleBurgerMenu} isOpen={isOpen} />
          <Navigation links={filteredLinks} />
          <div className="header__cta">
            <Button onClick={() => navigate(router.contact)}>Contact</Button>
            <Button onClick={() => navigate(router.signup)} variant="secondary">Sign Up</Button>
          </div>
        </div>
      </header>
      <BurgerMenu links={filteredLinks} isOpen={isOpen} />
    </>
  );
};
