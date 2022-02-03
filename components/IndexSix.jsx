//! From Library

import Image from "next/image";

//! From local

//! Image
import backpack from "../assets/images/volcano/backpack.png";
import littleMap from "../assets/images/volcano/little_map.png";

//! Styles
import styles from "../styles/IndexSix.module.scss";

export default function IndexSix({ game }) {
  return (
    <div className={styles.container}>
      <h2>{game.title}</h2>
      <p>{game.message}</p>
      <div className={styles.contents}>
        <div className={styles.map}>
          <Image src={littleMap} alt="map" />
        </div>
        <div className={styles.backpack}>
          <Image src={backpack} alt="backpack" />
        </div>
      </div>
      <p>{game.hint}</p>
    </div>
  );
}
