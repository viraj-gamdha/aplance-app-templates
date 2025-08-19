import { useTheme } from "@/providers/ThemeProvider";
import s from "./Header.module.scss";
import logo from "@/assets/images/logo.png";
import { Button } from "./Button";
import { ThemeIcon } from "../icons/ThemeIcon";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={s.container}>
      <div className={s.logo}>
        <img src={logo} alt="logo" />
      </div>

      <Button
        variant="bordered"
        onClick={toggleTheme}
      >
        <ThemeIcon current={theme} />
      </Button>
    </div>
  );
};

export default Header;
