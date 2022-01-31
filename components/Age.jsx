//! From Libaray
import { useContext, useEffect } from "react";

//! From local
import AgeContext from "../context/AgeContext";

//! Styles
import styles from "../styles/Age.module.scss";

// -------------------------------------------------------
let buttons;

export default function Age() {
  const { age, setAge } = useContext(AgeContext);

  const ageHandler = (e) => {
    setAge(e.target.value);

    for (let button of buttons) {
      if (button.innerText == e.target.value) {
        button.classList.add(styles.active);
      } else {
        button.classList.remove(styles.active);
      }
    }
  };

  useEffect(() => {
    buttons = document.getElementsByClassName(styles.btn);
  }, []);

  return (
    <div className={styles.container}>
      <div>
        <button value="1" className={styles.btn} onClick={ageHandler}>
          1
        </button>
        <button value="2" className={styles.btn} onClick={ageHandler}>
          2
        </button>
        <button value="3" className={styles.btn} onClick={ageHandler}>
          3
        </button>
      </div>
      <div>
        <button value="4" className={styles.btn} onClick={ageHandler}>
          4
        </button>
        <button value="5" className={styles.btn} onClick={ageHandler}>
          5
        </button>
        <button value="6" className={styles.btn} onClick={ageHandler}>
          6
        </button>
      </div>
      <div>
        <button value="7" className={styles.btn} onClick={ageHandler}>
          7
        </button>
        <button value="8" className={styles.btn} onClick={ageHandler}>
          8
        </button>
        <button value="9+" className={styles.btn} onClick={ageHandler}>
          9+
        </button>
      </div>
    </div>
  );
}
