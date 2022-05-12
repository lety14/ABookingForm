import React from "react";
import styles from "./Packs.module.css";
import packs from "../../packs.json";
import PackCard from "../PackCard/PackCard";

/**
 * Components that renders travel packs
 *
 * @returns {JSX.Element} render differents travel packs
 */
function Packs() {
  const cards = packs.map((item) => (
    <PackCard
      id={item.id}
      title={item.title}
      name={item.name}
      price={item.price}
    />
  ));

  return <form className={styles.container}>{cards}</form>;
}

export default Packs;
