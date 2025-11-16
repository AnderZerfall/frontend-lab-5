import { router } from "../../../routes/routes";
import type { NavigationLink } from "../../domain/models/NavigationLink";

export const links: NavigationLink[] = [
  {
    id: "projects-link",
    title: "Projects",
    link: router.projects,
    icon: "",
  },
  {
    id: "mission-link",
    title: "Our Mission",
    link: router.mission,
    icon: "",
  },
  {
    id: "founders-link",
    title: "Founders",
    link: router.founders,
    icon: "",
  },
  {
    id: "reviews-link",
    title: "Reviews",
    link: router.reviews,
    icon: "",
  },
  {
    id: "profile-link",
    title: "Profile",
    link: router.profile,
    icon: "",
  },
  {
    id: "contacts-link",
    title: "Contacts",
    link: router.contact,
    icon: "",
  },
];
