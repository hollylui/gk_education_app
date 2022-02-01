//! From Library
import Image from "next/image";

//! Styles
import styles from "../../styles/home/GameReady.module.scss";

export default function GameReady({ game, title }) {
  return (
    <div className={`${styles.game} ${styles.ready}`}>
      <div className={styles.image}>
        <Image src={game} alt={`${game} game`} />
      </div>
      <p>{title}</p>
    </div>
  );
}
