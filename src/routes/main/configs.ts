import type { MissionCardProps } from "./components/mission-card/MissionCard";

export const missions: MissionCardProps[] = [
  {
    title: "Mission 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, assumenda.",
    imageLink: "/images/icons/mission/star.svg",
  },
  {
    title: "Mission 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, assumenda.",
    imageLink: "/images/icons/mission/github.svg",
  },
  {
    title: "Mission 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, assumenda.",
    imageLink: "/images/icons/mission/lock.svg",
  },
];

export const founders = [
  {
    id: "anderzerfall-task",
    name: "Ander - FUKURO",
    avatar: "https://avatars.githubusercontent.com/anderzerfall",
    description: `"Omg, it's a shiny button! Let me just take it..."`,
    role: "Team Lead & Developer",
    techStack: [
      { src: "/images/icons/stack/html.svg", alt: "HTML5" },
      { src: "/images/icons/stack/react.svg", alt: "React" },
      { src: "/images/icons/stack/js.svg", alt: "JavaScript" },
    ],
  },
  {
    id: "chainmeJB-task",
    name: "ChainmeJB - Yulia",
    avatar: "https://avatars.githubusercontent.com/chainmeJB",
    description: "The chillest project manager you'll ever meet",
    role: "Project Manager & Developer",
    techStack: [
      { src: "/images/icons/stack/aws.svg", alt: "AWS" },
      { src: "/images/icons/stack/mongodb.svg", alt: "MongoDB" },
      { src: "/images/icons/stack/docker.svg", alt: "Docker" },
    ],
  },
  {
    id: "kirkus26-task",
    name: "Kirkus26 - Kyrylo",
    avatar: "https://avatars.githubusercontent.com/kirkus26",
    description:
      "Pretends to know everything, yet knows nothing. That's why we're keeping him in the basement and don't allow him to touch projects until they are simple. Nevertheless, he's a good guy!",
    role: "Support Managers",
    techStack: [
      { src: "/images/icons/stack/trello.svg", alt: "Trello" },
      { src: "/images/icons/stack/jira.svg", alt: "Jira" },
      { src: "/images/icons/stack/gmail.svg", alt: "Gmail" },
    ],
  },
  {
    id: "chertnn-task",
    name: "Cherttn - Kira",
    avatar: "https://avatars.githubusercontent.com/chainmeJB",
    description: "Passionate about customer satisfaction.",
    role: "Support Managers",
    techStack: [
      { src: "/images/icons/stack/trello.svg", alt: "Trello" },
      { src: "/images/icons/stack/jira.svg", alt: "Jira" },
      { src: "/images/icons/stack/gmail.svg", alt: "Gmail" },
    ],
  },
  {
    id: "conswho-task",
    name: "ConsWho - Nikita",
    avatar: "https://avatars.githubusercontent.com/chainmeJB",
    description: `"Best employee of the month" - that's his call`,
    role: "Support Managers",
    techStack: [
      { src: "/images/icons/stack/trello.svg", alt: "Trello" },
      { src: "/images/icons/stack/jira.svg", alt: "Jira" },
      { src: "/images/icons/stack/gmail.svg", alt: "Gmail" },
    ],
  },
];

export const techStack = [
  {
    role: "Support Managers",
    techStack: [
      { src: "/images/icons/stack/trello.svg", alt: "Trello" },
      { src: "/images/icons/stack/jira.svg", alt: "Jira" },
      { src: "/images/icons/stack/gmail.svg", alt: "Gmail" },
    ],
  },
  {
    role: "Team Lead & Developer",
    techStack: [
      { src: "/images/icons/stack/html.svg", alt: "HTML5" },
      { src: "/images/icons/stack/react.svg", alt: "React" },
      { src: "/images/icons/stack/js.svg", alt: "JavaScript" },
    ],
  },
  {
    role: "Project Manager & Developer",
    techStack: [
      { src: "/images/icons/stack/aws.svg", alt: "AWS" },
      { src: "/images/icons/stack/mongodb.svg", alt: "MongoDB" },
      { src: "/images/icons/stack/docker.svg", alt: "Docker" },
    ],
  },
];
