//! From Library
import Image from "next/image";
import { useContext } from "react/";
import { useRouter } from "next/router";

//! From local
import Backpack from "./Backpack";
import GameContext from "../context/GameContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";
import mouse from "../assets/images/volcano/animalcounter/mouse.png";
//! Styles
import styles from "../styles/Footer.module.scss";
import backpackStyles from "../styles/Backpack.module.scss";

//! Contexts
import BackpackContext from "../context/BackpackContext";

//!
export default function QuizFooter() {
  const router = useRouter();
  const { currGameId, gameIds } = useContext(GameContext);
  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];
  const prevGameId = gameIds[gameIds.indexOf(currGameId)];
  const { animalCount } = useContext(BackpackContext);
  // const backHandler = () => {
  //   router.push(`/volcano/${prevGameId}`);
  // };

  // const nextHandler = () => {
  //   router.push(`/volcano/${nextGameId}`);
  // };

  return (
    <div className={styles.container}>
      {/* <div className={styles.btn} onClick={backHandler}>
        <Image src={backBtn} alt="got to previosu page" />
      </div> */}

      <div className={styles.btn}></div>

      <div className={backpackStyles.middleFooter}>
        <Backpack />
      </div>

      <div className={styles.btn}></div>
    </div>
  );
}
