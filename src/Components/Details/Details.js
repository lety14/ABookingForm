import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faExclamationCircle,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLocationDot,
  faPhone,
  faUser,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext, useState, useEffect } from "react";
import { ContextForm } from "../../Context/ContextForm";
import styles from "./Details.module.css";
import BookingPriceSummary from "../BookingPriceSummary/BookingPriceSummary";
import { useNavigate } from "react-router-dom";

/**
 * Details of the reservation data
 *
 * @returns {JSX.Element} details component
 */
function Details() {
  let navigate = useNavigate();
  const { formData } = useContext(ContextForm);
  const [btnClicked, setBtnClicked] = useState(false);
  const { name, lastname, phoneNumber, address, city, provincie, country } =
    formData?.userReservation;
  const { startDate, endDate } = formData?.dates;
  const [isValidData, setIsValidData] = useState({
    userReservation: null,
    dates: null,
  });

  const handleOnClickBtn = (e) => {
    e.preventDefault();
    setBtnClicked(!btnClicked);
    if (isValidData.userReservation === true && isValidData.dates === true) {
      navigate("/reservationSucces");
    }
  };

  useEffect(() => {
    const isValidUserReservation = !Object.values(
      formData.userReservation
    ).some((x) => x === null || x === "");
    const isValidDates = !Object.values(formData.dates).some(
      (x) => x === null || x === ""
    );

    setIsValidData({
      userReservation: isValidUserReservation,
      dates: isValidDates,
    });
  }, [setIsValidData, formData]);

  return (
    <form className={styles.form} onSubmit={(e) => handleOnClickBtn(e)}>
      <div className={styles.formContainer}>
        <div className={styles.sections}>
          <section className={styles.sectionPacks}>
            <h3>Detalle del pago </h3>
            <BookingPriceSummary />
          </section>
          <section className={styles.sectionDates}>
            <h3>Fecha de reserva</h3>
            <p className={styles.field}>
              <FontAwesomeIcon icon={faCalendar} />
              {startDate !== null ? (
                <span className={styles.date}>
                  {startDate.toLocaleDateString()}
                </span>
              ) : (
                <span className={styles.emptyDate}>_/_/_</span>
              )}
              <span className={styles.guion}></span>
              {endDate !== null ? (
                <span className={styles.date}>
                  {endDate.toLocaleDateString()}
                </span>
              ) : (
                <span className={styles.emptyDate}>_/_/_</span>
              )}
            </p>
          </section>
          <section className={styles.sectionUserData}>
            <h3>Datos de contacto</h3>
            <p className={styles.field}>
              <FontAwesomeIcon icon={faUser} className={styles.iconDetails} />
              {name || lastname ? (
                <span className={styles.data}>
                  {name} {lastname}
                </span>
              ) : (
                <span className={styles.line}>___________________</span>
              )}
            </p>
            <p className={styles.field}>
              <FontAwesomeIcon icon={faPhone} className={styles.iconDetails} />
              {phoneNumber ? (
                <span className={styles.data}>{phoneNumber}</span>
              ) : (
                <span className={styles.line}>___________________</span>
              )}
            </p>

            <p className={styles.field}>
              <FontAwesomeIcon
                icon={faLocationDot}
                className={styles.iconDetails}
              />
              {address ? (
                <span className={styles.data}>{address}.</span>
              ) : (
                <></>
              )}
              {city && provincie && country ? (
                <span className={styles.data}>
                  {city}, {provincie}, {country}.
                </span>
              ) : (
                <span className={styles.line}>___________________</span>
              )}
            </p>
          </section>
        </div>
        <div className={styles.buttonAndErrorMessages}>
          <section
            className={
              (!isValidData.dates || !isValidData.userReservation) && btnClicked
                ? styles.errorMessages
                : styles.hideErrorMessages
            }
          >
            <FontAwesomeIcon
              icon={faExclamationCircle}
              className={styles.iconAlert}
            />
            <div>
              <h4
                className={
                  (!isValidData.dates || !isValidData.userReservation) &&
                  btnClicked
                    ? styles.showErrorMessage
                    : styles.hideErrorMessage
                }
              >
                Para completar la reserva:
              </h4>
              <p
                className={
                  !isValidData.dates && btnClicked
                    ? styles.showErrorMessage
                    : styles.hideErrorMessage
                }
              >
                *Debe seleccionar las fechas.
              </p>
              <p
                className={
                  !isValidData.userReservation && btnClicked
                    ? styles.showErrorMessage
                    : styles.hideErrorMessage
                }
              >
                *Debe completar sus datos personales.
              </p>
            </div>
          </section>

          <div className={styles.buttonContainer}>
            <button
              className={
                btnClicked && isValidData.userReservation && isValidData.dates
                  ? `${styles.button} ${styles.fill}`
                  : `${styles.button}`
              }
              type="submit"
            >
              Enviar
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Details;
