import "./Founder.css"

interface FounderProps {
  id: string;
  name: string;
  avatar: string;
  description: string;
  role: string;
  techStack: { src: string; alt: string }[];
  colSpan?: number;
}

export const Founder = ({
  id,
  name,
  avatar,
  description,
  role,
  techStack,
  colSpan = 1,
}: FounderProps) => {
  return (
    <>
      <th className="founders__header popup-trigger" scope="col" id={id}>
        <div className="image-wrapper founders__avatar">
          <img src={avatar} alt={`${name}'s Avatar`} />
        </div>
        <div className="founders__name">{name}</div>
      </th>

      <td className="founders__desc">
        <i>
          <span className="card__subtitle">{description}</span>
        </i>
      </td>

      <td className="founders__role" colSpan={colSpan}>
        {role}
      </td>

      <td className="founders__stack" aria-label={`Tech stack for ${name}`} colSpan={colSpan}>
        <div className="founders__icons">
          {techStack.map((tech) => (
            <img key={tech.alt} src={tech.src} alt={tech.alt} className="founders__icon" />
          ))}
        </div>
      </td>
    </>
  );
};
