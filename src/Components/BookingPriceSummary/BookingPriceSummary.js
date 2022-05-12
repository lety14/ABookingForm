import React, { useContext, useState, useEffect } from "react";
import { ContextForm } from "../../Context/ContextForm";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./BookingPriceSummary.module.css";
import packs from "../../packs.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 * Component that rendenrs the price summary
 *
 * @returns {JSX.Element} renders the price summary
 */
function BookingPriceSummary() {
  const { handleInput, formData } = useContext(ContextForm);
  const arrayPacks = formData?.packs;
  const [listPacks, setListPacks] = useState([]);

  useEffect(() => {
    let sum = 50000;
    let array = [];
    packs.map((item) => {
      if (arrayPacks.includes(item.id)) {
        sum += item.price;
        array.push(item);
      }
    });
    setListPacks(array);
    handleInput("UPDATE_PRICE", {
      campo: "total",
      valor: sum,
    });
  }, [arrayPacks]);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.item}>
          <span>
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className={styles.itemIcon}
            />
            Vuelo y estadía
          </span>
          <span>$50000</span>
        </p>
        {listPacks.map((item) => (
          <p className={styles.item}>
            <span>
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                className={styles.itemIcon}
              />
              {item.title}
            </span>
            <span>${item.price}</span>
          </p>
        ))}
      </div>
      <p className={styles.total}>
        Total<span>${formData?.price.total}</span>
      </p>
    </div>
  );
}

export default BookingPriceSummary;
