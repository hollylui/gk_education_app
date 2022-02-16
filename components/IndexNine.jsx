//! From Library
import Image from "next/image";

//! Images
import animalCounter from "../assets/images/volcano/animal_counter.png";

//! Styles
import styles from "../styles/IndexNine.module.scss";

export default function IndexNine() {
  const width = 200;
  const height = 140;
  return (
    <div className={styles.container}>
      <Image
        src={animalCounter}
        alt="animal counter"
        width={width}
        height={height}
      />
    </div>
  );
}
