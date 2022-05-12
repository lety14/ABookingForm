import React, { useContext } from "react";
import styles from "./ReservationForm.module.css";
import FormUser from "../../Components/Form/Form";
import Details from "../../Components/Details/Details";
import Packs from "../../Components/Packs/Packs";
import bc_footer_mobile from "../../Assets/background_footer_mobile.svg";
import bc_footer from "../../Assets/background_footer.svg";
import DarkModeToggle from "../../Components/DarkModeToggle/DarkModeToggle";
import { ContextDarkMode } from "../../Context/ContextDarkMode";
import CalendarPicker from "../../Components/CalendarPicker/CalendarPicker";

/**
 * Reservation page
 *
 * @returns {JSX.Element} reservation page
 */
function ReservationForm() {
  const { darkTheme } = useContext(ContextDarkMode);

  return (
    <div>
      <div
        className={
          darkTheme
            ? `${styles.app} ${styles.bodyDark}`
            : `${styles.app} ${styles.bodyLight}`
        }
      >
        <header className={styles.header}>
          <div className={styles.darkModeToggle}>
            <DarkModeToggle />
          </div>
          <h1>
            Reservá tu viaje a{" "}
            <span className={styles.placeTitle}>Cataratas</span>
          </h1>
        </header>
        <main className={styles.main}>
          <div className={styles.sections}>
            <section className={styles.form}>
              <div className={styles.subsection}>
                <h2>
                  1. <span>Seleccione plan</span>
                </h2>
                <Packs />
              </div>
              <div className={styles.subsection}>
                <h2>
                  2. <span>Seleccione fechas</span>
                </h2>
                <div className={styles.calendarMobile}>
                  <CalendarPicker mobile={true} />
                </div>
                <div className={styles.calendar}>
                  <CalendarPicker mobile={false} />
                </div>
              </div>
              <div className={styles.subsection}>
                <h2>
                  3. <span>Complete datos personales</span>
                </h2>
                <FormUser />
              </div>
            </section>
            <section className={styles.details}>
              <div className={styles.subsection}>
                <h2>Resumen de su reserva</h2>
                <Details />
              </div>
            </section>
          </div>
        </main>
        <footer className={styles.footer}>
          <img
            className={styles.imgFooterMobile}
            src={bc_footer_mobile}
            alt="imagen de freepik"
          />
          <img
            className={styles.imgFooter}
            src={bc_footer}
            alt="imagen de freepik"
          />
        </footer>
      </div>
    </div>
  );
}

export default ReservationForm;
