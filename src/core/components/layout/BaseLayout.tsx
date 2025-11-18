import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import "./BaseLayout.css";
import { useThemeTimeChanger } from "../../hooks/useThemeTimeChanger";

export const BaseLayout = () => {
  useThemeTimeChanger();

  return (
    <main className="main">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
