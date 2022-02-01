//! From Library
import Image from "next/image";

//! Styles
import styles from "../../styles/home/GameComingSoon.module.scss";

export default function GameComingSoon({ game, title }) {
  return (
    <div className={`${styles.game} ${styles.greyout}`}>
      <div className={styles.image}>
        <Image src={game} alt={`${game} game`} />
      </div>
      <p>{title}</p>
      <p>coming soon</p>
    </div>
  );
}
