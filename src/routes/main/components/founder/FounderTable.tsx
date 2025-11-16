import { founders, techStack } from "../../configs";
import "./Founder.css";

export const FounderTable = () => {
  const roles = founders
    .map((founder) => founder.role)
    .filter((role, index, self) => self.indexOf(role) === index);

  const renderRoles = () =>
    roles.map((role, idx) => {
      const rolesCount = founders.filter(
        (founder) => founder.role === role
      ).length;

      return (
        <td key={idx} className="founders__role" colSpan={rolesCount}>
          {role}
        </td>
      );
    });

    
  const renderStack = () =>
    roles.map((role, idx) => {
      const rolesCount = founders.filter(
        (founder) => founder.role === role
      ).length;

      const stack = techStack.filter(
        (stack) => stack.role === role
      )[0];

       return  <td
        key={idx}
        className="founders__stack"
        colSpan={rolesCount}
      >
        <div className="founders__icons">
          {stack.techStack.map((tech) => (
            <img
              key={tech.alt}
              src={tech.src}
              alt={tech.alt}
              className="founders__icon"
            />
          ))}
        </div>
      </td>
    });

  return (
    <table className="founders__table">
      <thead>
        <tr>
          {founders.map((founder) => (
            <th
              key={founder.id}
              className="founders__header popup-trigger"
              scope="col"
              id={founder.id}
            >
              <div className="image-wrapper founders__avatar">
                <img src={founder.avatar} alt={`${founder.name}'s Avatar`} />
              </div>
              <div className="founders__name">{founder.name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {founders.map((founder, idx) => (
            <td key={idx} className="founders__desc">
              <i>
                <span className="card__subtitle">{founder.description}</span>
              </i>
            </td>
          ))}
        </tr>
        <tr>{renderRoles()}</tr>
        <tr>{renderStack()}</tr>
      </tbody>
    </table>
  );
};
