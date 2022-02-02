//! From Library
import Image from "next/image";

//! Images
import sign from "../assets/images/volcano/left_right.png";

//! Styles
import styles from "../styles/IndexEleven.module.scss";

export default function IndexEleven() {
  return (
    <div className={styles.container}>
      <Image src={sign} alt="direction sign" />
    </div>
  );
}
