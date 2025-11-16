import { useNavigate } from "react-router";
import { router } from "../routes";
import { Button } from "../../core/components/button/Button";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Oops! Page not found</h2>
      <Button onClick={() => navigate(router.root)}>Back to Main</Button>
    </div>
  );
};
