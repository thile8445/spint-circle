import { useState } from "react";
import style from "./switch.module.scss";

export default function SwitchToggle() {
  const defaultTheme = () => {
    let themeValue = false;
    const theme = localStorage.getItem("theme");
    if (theme === "theme-dark") {
      document.body.classList.add("theme-dark");
      themeValue = true;
    } else {
      document.body.classList.remove("theme-dark");
      themeValue = false;
    }
    return themeValue;
  };
  const [themeDark, setThemeDark] = useState(defaultTheme());

  const onchangeTheme = (check) => {
    if (check) {
      localStorage.setItem("theme", "theme-dark");
      document.body.classList.add("theme-dark");
    } else {
      localStorage.setItem("theme", "theme-light");
      document.body.classList.remove("theme-dark");
    }
  };
  return (
    <>
      <div className={style.switch}>
        <input
          type="checkbox"
          onChange={(e) => onchangeTheme(e.target.checked)}
          defaultChecked={themeDark}
          id="checkbox"
        />
        <label htmlFor="checkbox"></label>
      </div>
    </>
  );
}
