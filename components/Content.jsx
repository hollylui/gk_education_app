//! From Library
import { useContext } from "react";
import Image from "next/image";

//! From local
import GameContext from "../context/GameContext";
import NameContext from "../context/NameContext";
import Name from "../components/Name";
import Age from "./Age";
import TypeOfQuestion from "./TypeOfQuestion";
import IndexSix from "./IndexSix";
import IndexEight from "./IndexEight";
import IndexNine from "./IndexNine";
import BranchContext from "../context/BranchContext";
import MusicContext from "../context/MusicContext";

//! Image
import cube from "../assets/images/volcano/rubiks_cube.png";

//! Styles
import styles from "../styles/Content.module.scss";
import IndexEleven from "./IndexEleven";
import ChooseBranch from "./ChooseBranch";

// --------------------------------------------------

export default function Content({ game }) {
  const { currGameId, gameIds } = useContext(GameContext);
  const { name } = useContext(NameContext);
  const { branchIndex } = useContext(BranchContext);
  const { setBranchAudioIndex } = useContext(MusicContext);

  const index = gameIds.indexOf(currGameId);

  return (
    <div className={styles.container}>
      {index !== 3 && index !== 6 && (
        <p className={styles.message}>{game.message}</p>
      )}

      {index === 3 && (
        <p className={styles.message}>{`${name}, ${game.message}`}</p>
      )}

      {index === 2 && <Name />}
      {index === 3 && <Age />}
      {index === 4 && <TypeOfQuestion />}
      {index === 6 && <IndexSix game={game} />}
      {index === 8 && <IndexEight />}
      {index === 9 && <IndexNine />}
      {index === 11 && <IndexEleven />}
      {index === 12 && (
        <ChooseBranch leftBranch={"branch1_1"} rightBranch={"branch1_2"} />
      )}
      {index === 13 && (
        <div className={styles.indexThirteen}>
          <Image src={cube} alt="cube" />
        </div>
      )}
    </div>
  );
}
