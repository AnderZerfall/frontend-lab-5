import { LinkType } from "../../domain/constants/LinkType";
import type { ContactItemProps } from "./ContactItem";

export const contacts: ContactItemProps[] = [
  {
    type: LinkType.Default,
    link: "https://goo.gl/maps/example",
    title: "16 Ivana Mazepy St, Fastiv, Ukraine",
    icon: "📍",
  },
  {
    type: LinkType.Phone,
    link: "+380977367071",
    title: "+38 (097) 736-70-71",
    icon: " 📞",
  },
  {
    type: LinkType.Email,
    link: "fe.anna.androschuk@gmail.com",
    icon: "📩",
  },
  {
    type: LinkType.Default,
    link: "https://github.com/anderzerfall",
    title: "github.com/AnderZerfall",
    icon: "😺",
  },
];
