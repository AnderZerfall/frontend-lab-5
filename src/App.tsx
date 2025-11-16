import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BaseLayout } from "./core/components/layout/BaseLayout";
import { MainPage } from "./routes/main";
import { ProjectsPage } from "./routes/projects";
import { router } from "./routes/routes";
import { ContactPage } from "./routes/contact";
import { NotFoundPage } from "./routes/not-found";
import "./App.css";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route index element={<MainPage />} />
          <Route path={router.projects} element={<ProjectsPage />} />
          <Route path={router.contact} element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
