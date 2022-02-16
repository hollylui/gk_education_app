//! From Library
import Image from "next/image";

//! From local
import Start from "../components/Start";

//! Images
import landing from "../assets/images/volcano/landing.png";

//! Styles
import styles from "../styles/Landing.module.scss";

export default function Landing({ games }) {
  return (
    <div className={styles.container}>
      <Image
        className={styles.landing}
        src={landing}
        alt="landing page"
        layout="fill"
      />
      <div className={styles.mainPage}>
        <h1>{games[0].title}</h1>
        <Start id={games[1]._id} />
      </div>
    </div>
  );
}
