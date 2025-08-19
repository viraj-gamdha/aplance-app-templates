import { Outlet } from "react-router-dom";
import s from "./MainLayout.module.scss";
import Header from "../ui/Header";

const MainLayout = () => {
  return (
    <main className={s.container}>
      <Header />
      <div className={s.content}>
        <Outlet />
      </div>
    </main>
  );
};

export default MainLayout;
