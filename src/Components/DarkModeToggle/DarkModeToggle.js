import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import styles from "./DarkModeToggle.module.css";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { ContextDarkMode } from "../../Context/ContextDarkMode";

/**
 * Component that sets dark or light mode
 *
 * @returns {JSX.Element} dark or light mode toggle
 */
function DarkModeToggle() {
  const { darkTheme, changeTheme } = useContext(ContextDarkMode);

  return (
    <div
      className={
        darkTheme ? `${styles.toggle} ${styles.darkTheme}` : `${styles.toggle}`
      }
      onClick={() => changeTheme()}
    >
      <div
        className={
          darkTheme ? `${styles.icons} ${styles.darkTheme}` : `${styles.icons}`
        }
      >
        <FontAwesomeIcon icon={faSun} />
        <FontAwesomeIcon icon={faMoon} />
      </div>
    </div>
  );
}

export default DarkModeToggle;
