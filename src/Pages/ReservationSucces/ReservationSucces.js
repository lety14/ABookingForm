import React, { useContext, useEffect, useState } from "react";
import { ContextForm } from "../../Context/ContextForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faPlane } from "@fortawesome/free-solid-svg-icons";
import styles from "./ReservationSucces.module.css";
import packs from "../../packs.json";
import { ContextDarkMode } from "../../Context/ContextDarkMode";
import DarkModeToggle from "../../Components/DarkModeToggle/DarkModeToggle";
import successGif from "../../Assets/success.gif";
import successImage from "../../Assets/success.png";

/**
 * Success page with details
 *
 * @returns {JSX.Element} page success
 */
function ReservationSucces() {
  const { formData } = useContext(ContextForm);
  const { darkTheme } = useContext(ContextDarkMode);
  const { name, lastname, phoneNumber, address, city, provincie, country } =
    formData?.userReservation;
  const { startDate, endDate } = formData?.dates;
  const { total } = formData?.price;
  const arrayPacks = formData?.packs;

  const [iconSuccess, setIconSuccess] = useState(successGif);

  useEffect(() => {
    setTimeout(() => {
      setIconSuccess(successImage);
    }, 3500);
  }, []);

  return (
    <div
      className={
        darkTheme
          ? `${styles.container} ${styles.bodyDark}`
          : `${styles.container} ${styles.bodyLight}`
      }
    >
      <div className={styles.darkModeToggle}>
        <DarkModeToggle />
      </div>
      <div className={styles.bg}></div>
      <div className={styles.containerTicket}>
        <div className={styles.containerIcon}>
          <img src={iconSuccess} alt="gif" className={styles.iconSuccess} />
        </div>
        <h3>
          Se reservó exitosamente su viaje a <span>Cataratas</span>
        </h3>
        <div className={styles.ticket}>
          <div className={styles.firstColumn}>
            <div className={styles.code}></div>
            <section className={styles.userData}>
              <p>
                <span className={styles.data}>Nombre</span>
                <span className={styles.personalData}>
                  {name} {lastname}
                </span>
              </p>
              <p>
                <span className={styles.data}>Teléfono</span>
                <span className={styles.personalData}>{phoneNumber}</span>
              </p>
              <p>
                <span className={styles.data}>Fechas</span>
                <span className={styles.personalData}>
                  {startDate.toLocaleDateString()}-
                  {endDate.toLocaleDateString()}
                </span>
              </p>
            </section>
            <section className={styles.datesAndCity}>
              <p>
                <span className={styles.city}>{city}</span>{" "}
              </p>
              <FontAwesomeIcon icon={faPlane} className={styles.plane} />
              <p>
                <span className={styles.city}>Cataratas</span>
              </p>
            </section>
            <section className={styles.details}>
              <h4>Incluye los siguientes packs:</h4>
              {arrayPacks.length !== 0 ? (
                <>
                  <p>
                    {packs.map((item) => {
                      return arrayPacks.includes(item.id) ? (
                        <span key={`booking_detail_pack_${item.id}`}>
                          {" "}
                          {item.title}.
                        </span>
                      ) : (
                        <></>
                      );
                    })}
                  </p>
                </>
              ) : (
                <p>No se incluyeron packs adicionles</p>
              )}
            </section>
          </div>
          <section className={styles.secondColumn}>
            <div className={styles.infoNames}>
              <p className={styles.data}>Nombre</p>
              <p className={styles.personalData}>
                {name} {lastname}
              </p>
            </div>
            <div className={styles.infoContact}>
              <p className={styles.data}>Teléfono</p>
              <p className={styles.personalData}>{phoneNumber}</p>
            </div>
            <div className={styles.infoDates}>
              <p className={styles.data}>Fechas</p>
              <p className={styles.personalData}>
                {startDate.toLocaleDateString()}
              </p>
              <p className={styles.personalData}>
                {endDate.toLocaleDateString()}
              </p>
            </div>
            <p className={styles.price}>${total}.-</p>
            <div className={styles.cityResume}>
              <p className={styles.city}>
                {city}
                <FontAwesomeIcon icon={faPlane} className={styles.plane} />
                Cataratas
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ReservationSucces;
