import React, { useContext } from "react";
import Input from "../Input/Input";
import styles from "./Form.module.css";
import { ContextDarkMode } from "../../Context/ContextDarkMode";

/**
 * Form component
 *
 * @returns {JSX.Element} form component
 */
function Form() {
  const { darkTheme } = useContext(ContextDarkMode);
  const messagesError = {
    names: "*Ingrese mínimo 2 carácteres. No ingrese números.",
    text: "*Ingrese mínimo 2 carácteres.",
    numbers: "*Ingrese mínimo sólo números. Mínimo 6 caráctares.",
    mail: "*Ingrese un mail válido.",
  };

  const validationInput = {
    name: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
      messageError: messagesError.names,
    },
    lastname: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
      messageError: messagesError.names,
    },
    phoneNumber: {
      regex: /^[0-9]{6,15}$/,
      messageError: messagesError.numbers,
    },
    address: {
      regex: /^[a-zA-ZÀ-ÿ0-9\s]{2,40}$/,
      messageError: messagesError.text,
    },
    city: {
      regex: /^[a-zA-ZÀ-ÿ0-9\s]{2,40}$/,
      messageError: messagesError.text,
    },
    provincie: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
      messageError: messagesError.text,
    },
    country: {
      regex: /^[a-zA-ZÀ-ÿ\s]{2,40}$/,
      messageError: messagesError.text,
    },
    correo: {
      regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
      messageError: messagesError.mail,
    },
  };

  return (
    <form
      autoComplete="off"
      className={
        darkTheme ? `${styles.form} ${styles.form_dark}` : `${styles.form}`
      }
    >
      <div className={styles.row}>
        <Input
          name="name"
          label="*Nombre"
          validationInput={validationInput.name}
          shouldFocus={true}
        />
        <Input
          name="lastname"
          label="*Apellido"
          validationInput={validationInput.lastname}
        />
      </div>
      <div className={styles.row}>
        <Input
          name="phoneNumber"
          label="*Teléfono"
          validationInput={validationInput.phoneNumber}
        />
      </div>
      <div className={styles.row}>
        <Input
          name="address"
          label="*Dirección"
          validationInput={validationInput.address}
        />
        <Input
          name="city"
          label="*Ciudad"
          validationInput={validationInput.city}
        />
      </div>
      <div className={styles.row}>
        <Input
          name="provincie"
          label="*Provincia"
          validationInput={validationInput.provincie}
        />
        <Input
          name="country"
          label="*País"
          validationInput={validationInput.country}
        />
      </div>
      <p className={styles.requiredField}>(*) campos obligatorios</p>
    </form>
  );
}

export default Form;
