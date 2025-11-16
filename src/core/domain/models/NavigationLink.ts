import type { ReactNode } from "react";

export interface NavigationLink {
    id: string,
    title: string,
    link: string,
    icon: string | ReactNode
}