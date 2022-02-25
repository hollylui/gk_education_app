//! From local
import Start from "../components/Start";

//! Styles
import styles from "../styles/Landing.module.scss";

export default function Landing({ games }) {
  return (
    <div className={styles.container}>
      <div className={styles.mainPage}>
        <h1>{games[0].title}</h1>
        <Start id={games[1]._id} />
      </div>
    </div>
  );
}
