import type { ReactNode } from "react";

export interface SlideContent {
  id: string;
  title: string;
  subtitle: string | ReactNode;
  imageLink: string;
  link: string;
  description: string[] | ReactNode[];
}
