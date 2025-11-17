import { Footer } from "../footer/Footer";
import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import "./BaseLayout.css";

export const BaseLayout = () => {
  return (
    <main className="main">
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
};
