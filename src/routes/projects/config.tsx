import type { SlideContent } from "./models/Slide";

export const slidesContent: SlideContent[] = [
  {
    id: "doodly-do",
    title: "Doodly Do - Next.js online drawing board",
    subtitle: (
      <span className="card__subtitle">
        <i>Ukraine</i>
        <span className="point">📍</span>
      </span>
    ),
    link: "https://doodly-do-next-js.vercel.app/",
    imageLink: "/images/projects/doodly.png",
    description: [
      "Very Beginner Friendly",
      "Fully written with Next.js using Firebase as a drawing storage",
      <>
        Real time <b>update</b>
      </>,
      <>
        Open <u>Source</u>
      </>,
      <>
        Coloborative <em>system</em>
      </>,
    ],
  },
  {
    id: "k-dolingua",
    title: "K-lingua - Landing",
    subtitle: (
      <span className="card__subtitle">
        <i>Czech</i>
        <span className="point">📍</span>
      </span>
    ),
    link: "https://anderzerfall.github.io/K-lingua-website/index.html",
    imageLink: "/images/projects/klingua.png",
    description: [
      "Hand-crafted design",
      "Supports 2 language modes: Czech and English",
      "Fully animated experience",
      "HTML & CSS & JS - no React, good for SEO",
      "Open Source",
    ],
  },
  {
    id: "github-kanban",
    title: "Github Kanban - Drag&Drop Issue Manager",
    subtitle: (
      <span className="card__subtitle">
        <i>Ukraine</i>
        <span className="point">📍</span>
      </span>
    ),
    link: "https://fukuro-kanban.netlify.app/",
    imageLink: "/images/projects/kanban.png",
    description: [
      "Just pass a link to a repository",
      "Smooth drag & drop implementation",
      "React powered, no backend needed",
      "Simple, yet friendly design",
      "Integrated with Github API",
    ],
  },
];
