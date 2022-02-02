//! From Library
import Image from "next/image";

//! From local
import Start from "../components/Start";

//! Images
import landing from "../assets/images/volcano/landing.png";

//! Styles
import styles from "../styles/Landing.module.scss";

export default function Landing({ title }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.landing}
        src={landing}
        alt="landing page"
        layout="fill"
      />
      <div className={styles.mainPage}>
        <h1>{title}</h1>
        <Start />
      </div>
    </div>
  );
}
