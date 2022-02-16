//! From Libaray
import { useEffect } from "react";
import { useRouter } from "next/router";

//! From lcoal

//! Styles
import styles from "../styles/Start.module.scss";

// -------------------------------------------------------

export default function Start({ id }) {
  const router = useRouter();
  // const { index, data } = useContext(GameContext);

  const startHandler = () => {
    router.push(`/volcano/${id}`);
  };

  const backToHomeHandler = () => {
    router.push(`/`);
  };

  useEffect(() => {});

  return (
    <>
      <button
        onClick={startHandler}
        className={`${styles.button} ${styles.blink}`}
      >
        Start
      </button>
      <button onClick={backToHomeHandler} className={styles.button}>
        Back to Home
      </button>
    </>
  );
}
