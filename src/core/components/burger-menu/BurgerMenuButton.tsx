import classNames from "classnames";
import "./BurgerMenu.css";

export interface BurgerMenuButtonProps {
  isOpen?: boolean;
  onClick: () => void;
}

export const BurgerMenuButton = ({
  isOpen = false,
  onClick,
}: BurgerMenuButtonProps) => {
  return (
    <div
      className={classNames("header__burger-icon", {
        "burger-menu-opened": isOpen,
      })}
      onClick={onClick}
      is-opened={isOpen ? "true" : "false"}
    />
  );
};
