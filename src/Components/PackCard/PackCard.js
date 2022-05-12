import React, { useContext, useState } from "react";
import { ContextForm } from "../../Context/ContextForm";
import styles from "./PackCard.module.css";

/**
 * Component that renders a checkbox card with the travel pack details
 *
 * @param {{title:string, name:string, price:number}} props
 * @returns {JSX.Element} checkbox card
 */
function PackCard({ id, title, name, price }) {
  const { handleCheckbox, formData } = useContext(ContextForm);
  const [isChecked, setIsChecked] = useState(false);
  const packsArray = formData?.packs;
  const handleOnChange = (e) => {
    setIsChecked(!isChecked);

    !packsArray.includes(id)
      ? packsArray.push(id)
      : packsArray.splice(packsArray.indexOf(id), 1);

    handleCheckbox("UPDATE_PACKS", { valor: [...packsArray] });
  };

  console.log("form data ", formData?.packs);

  return (
    <div
      className={
        isChecked ? `${styles.card} ${styles.checkedCard}` : styles.card
      }
    >
      <label className={styles.container} htmlFor={name}>
        <p className={styles.title}>{title}</p>
        <p className={styles.price}>$ {price}</p>
        <input
          type="checkbox"
          id={name}
          name={name}
          value={name}
          checked={isChecked}
          onChange={(e) => {
            handleOnChange(e);
          }}
        />

        <span className={styles.checkmark}></span>
      </label>
    </div>
  );
}

export default PackCard;
