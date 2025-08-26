"use client";

import { useTheme } from "@/providers/theme-provider";
import s from "./header.module.scss";
import { Button } from "../ui/button";
import { ThemeIcon } from "../icon/theme-icon";
import Image from "next/image";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <Image src={"/logo.png"} alt="logo" width={200} height={100}/>
      </div>

      <Button variant="bordered" onClick={toggleTheme}>
        <ThemeIcon current={theme} />
      </Button>
    </div>
  );
};

export default Header;
