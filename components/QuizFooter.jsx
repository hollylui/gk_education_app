//! From Library
import { useContext } from "react/";

//! From local
import Backpack from "./Backpack";

//! Styles
import styles from "../styles/Footer.module.scss";
import backpackStyles from "../styles/Backpack.module.scss";

export default function QuizFooter() {
  return (
    <div className={styles.container}>
      <div className={styles.btn}></div>

      <div className={backpackStyles.middleFooter}>
        <Backpack />
      </div>

      <div className={styles.btn}></div>
    </div>
  );
}
