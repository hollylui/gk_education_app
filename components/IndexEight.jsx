//! From Library
import Image from "next/image";

//! From local

//! Image
import mainBackpack from "../assets/images/volcano/main_backpack.png";
import stick from "../assets/images/volcano/stick.png";
import smallRock from "../assets/images/volcano/rock_small.png";

//! Styles
import styles from "../styles/IndexEight.module.scss";

export default function IndexEight() {
  return (
    <div className={styles.container}>
      <div className={styles.mainBackpack}>
        <Image src={mainBackpack} />
      </div>
      <div className={styles.stick}>
        <Image src={stick} />
      </div>
      <div className={styles.smallRock}>
        <Image src={smallRock} />
      </div>
    </div>
  );
}
