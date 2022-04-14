//! From Library
<<<<<<< HEAD

=======
>>>>>>> main
import Image from "next/image";

//! From local

//! Image
import mapAndBackpack from "../assets/images/volcano/map_and_backpack.png";

//! Styles
import styles from "../styles/IndexSix.module.scss";

export default function IndexSix({ game }) {
  const style = { position: "relative", width: "100%", paddingBottom: "15%" };

  return (
    <div className={styles.container}>
      <h2>{game.title}</h2>
      <p>{game.message}</p>
      <div className={styles.image} style={style}>
        <Image
          src={mapAndBackpack}
          alt="map"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <p>{game.hint}</p>
    </div>
  );
}
