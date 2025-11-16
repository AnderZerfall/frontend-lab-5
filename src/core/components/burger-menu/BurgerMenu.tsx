import { useNavigate } from "react-router";
import type { NavigationLink } from "../../domain/models/NavigationLink";
import { Button } from "../button/Button";
import { Navigation } from "../navigation/Navigation";
import { router } from "../../../routes/routes";
import "./BurgerMenu.css"

export interface BurgerMenuProps {
  links: NavigationLink[];
  isOpen: boolean;
}

export const BurgerMenu = ({ links, isOpen }: BurgerMenuProps) => {
  const navigate = useNavigate();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="header__burger-menu">
      <Navigation links={links} />
      <div className="header__cta">
        <Button onClick={() => navigate(router.contact)}>Contact</Button>
        <Button onClick={() => navigate(router.signup)}>Sign Up</Button>
      </div>
    </div>
  );
};
