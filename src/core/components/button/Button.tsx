import classNames from "classnames";
import type { ComponentProps, ReactNode } from "react";
import "./Button.css";

export type ButtonVariant = "primary" | "secondary" | "accent";

export interface ButtonProps extends ComponentProps<"button"> {
  children: ReactNode;
  variant?: ButtonVariant;
}

const BUTTON_VARIANT_MAP = {
  primary: "button--primary",
  secondary: "button--secondary",
  accent: "button--accent",
};

export const Button = ({
  children,
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames("button", BUTTON_VARIANT_MAP[variant])}
    >
      {children}
    </button>
  );
};
