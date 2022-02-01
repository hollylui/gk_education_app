//! From Library
import { useRouter } from "next/router";

//! From local
import GameComingSoon from "../home/GameComingSoon";
import GameReady from "../home/GameReady";

//! Image
import volcano from "../../assets/images/Home/volcano.png";
import park from "../../assets/images/Home/park.png";
import tent from "../../assets/images/Home/camping-tent.png";
import golf from "../../assets/images/Home/golf.png";

//image source:
// cloud.png from https://www.pngwing.com/en/free-png-dhdim/download
//volcano.png from https://www.flaticon.com/free-icons/volcano"
//park.png from https://www.flaticon.com/free-icons/lake" title="lake icons
//camping-tent.png from https://www.flaticon.com/free-icons/camping
//golf.png from "https://www.flaticon.com/free-icons/golf"

//! Styles
import styles from "../../styles/home/Games.module.scss";

export default function Games() {
  const router = useRouter();

  const gameHandler = () => {
    router.push("/volcano");
  };

  return (
    <div id="games" className={styles.gameSection}>
      <h2>Games</h2>
      <div className={styles.games}>
        <div onClick={gameHandler}>
          <GameReady game={volcano} title={"volcano animal rescue"} />
        </div>

        <GameComingSoon game={park} title={"game 1"} />
        <GameComingSoon game={tent} title={"game 2"} />
        <GameComingSoon game={golf} title={"game 3"} />
      </div>
    </div>
  );
}
