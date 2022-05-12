import React, { useContext, useState } from "react";
import { ContextForm } from "../../Context/ContextForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Input.module.css";

/**
 * Input component
 *
 * @param {{ name:string, label:string, type:string, shouldFocus: boolean}} props
 * @returns {JSX.Element} input component
 */
function Input({ name, label, type, validationInput }) {
  const { handleInput, formData } = useContext(ContextForm);
  const [valueInput, setValueInput] = useState(formData[name] || "");
  const [error, setError] = useState(false);

  const handleChange = (value) => {
    setValueInput(value);
    if (!validationInput.regex.test(valueInput)) {
      setError(true);
    } else {
      setError(false);
      handleInput("UPDATE_USER_RESERVATION", {
        campo: name,
        valor: valueInput,
      });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type={type ? type : "text"}
          id={name}
          value={valueInput}
          onChange={(e) => handleChange(e.target.value)}
          onInputCapture={(e) => handleChange(e.target.value)}
        />
        {valueInput === "" ? (
          <></>
        ) : error ? (
          <FontAwesomeIcon icon={faXmark} className={styles.error} />
        ) : (
          <FontAwesomeIcon icon={faCheck} className={styles.check} />
        )}
      </div>
      {valueInput === "" ? (
        <></>
      ) : error ? (
        <p className={styles.errorMessage}>{validationInput.messageError}</p>
      ) : (
        <></>
      )}
      <label
        htmlFor={name}
        className={valueInput === "" ? styles.label : styles.labelNotVoid}
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
