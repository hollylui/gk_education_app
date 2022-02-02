//! From Library
import Image from "next/image";

//! Images
import animalCounter from "../assets/images/volcano/animal_counter.png";

//! Styles
import styles from "../styles/IndexNine.module.scss";

export default function IndexNine() {
  return (
    <div className={styles.container}>
      <Image src={animalCounter} alt="animal counter" />
    </div>
  );
}
