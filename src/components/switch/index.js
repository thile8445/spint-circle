import { useEffect, useState } from "react";
import style from "./switch.module.scss";

export default function SwitchToggle() {
  const [themeDark, setThemeDark] = useState(false);
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "theme-dark") {
      document.body.classList.add("theme-dark");
      setThemeDark(true);
    } else {
      document.body.classList.remove("theme-dark");
      setThemeDark(false);
    }
  }, []);

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
          // checked={themeDark}
          id="checkbox"
        />
        <label htmlFor="checkbox"></label>
      </div>
    </>
  );
}
