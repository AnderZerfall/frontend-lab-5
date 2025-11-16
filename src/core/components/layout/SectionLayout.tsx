import classNames from "classnames";
import type { ReactNode } from "react";
import "./BaseLayout.css"

export interface SectionLayoutProps {
  name: string;
  title?: string;
  children: ReactNode;
}

export const SectionLayout = ({
  name,
  title,
  children,
}: SectionLayoutProps) => {
  return (
    <div className={classNames("container", `${name}__container`)} id={name}>
      {title && <h2 className={classNames(name, `${name}__title`)}>{title}</h2>}
      {children}
    </div>
  );
};
