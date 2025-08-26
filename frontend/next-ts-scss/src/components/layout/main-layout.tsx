import Header from "./header";
import s from "./main-layout.module.scss";
import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className={s.container}>
      <Header />
      <div className={s.content}>{children}</div>
    </main>
  );
};

export default MainLayout;
