//! From Libaray
import { useEffect } from "react";
import { useRouter } from "next/router";

//! From lcoal

//! Styles
import styles from "../styles/Start.module.scss";

// -------------------------------------------------------

let startBtn;

export default function Start({ id }) {
  const router = useRouter();
  // const { index, data } = useContext(GameContext);

  const startHandler = () => {
    startBtn.classList.remove(styles.blink);
    startBtn.style.backgroundColor = "red";
    router.push(`/volcano/${id}`);
  };

  const backToHomeHandler = () => {
    router.push(`/`);
  };

  useEffect(() => {
    startBtn = document.getElementById("start");
  }, []);

  return (
    <>
      <button
        onClick={startHandler}
        className={`${styles.button} ${styles.blink}`}
        id="start"
      >
        Start
      </button>
      <button onClick={backToHomeHandler} className={styles.button}>
        Back to Home
      </button>
    </>
  );
}
