import type { ReactNode } from "react";
import "./Tooltip.css";

export interface TooltipProps {
  children: ReactNode;
  content: string | ReactNode;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <div className="tooltip-trigger">
      <div className="tooltip">{content}</div>
      {children}
    </div>
  );
};
