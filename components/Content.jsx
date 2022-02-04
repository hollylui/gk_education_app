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

//! Image
import cube from "../assets/images/volcano/rubiks_cube.png";

//! Styles
import styles from "../styles/Content.module.scss";
import IndexEleven from "./IndexEleven";
import ChooseBranch from "./ChooseBranch";

// --------------------------------------------------

export default function Content({ game }) {
  const { currentGameId, gameIds } = useContext(GameContext);
  const { name } = useContext(NameContext);

  return (
    <div className={styles.container}>
      {gameIds[gameIds.indexOf(currentGameId)] !== 3 &&
        gameIds[gameIds.indexOf(currentGameId)] !== 6 && (
          <p className={styles.message}>{game.message}</p>
        )}

      {index === 3 && (
        <p className={styles.message}>{`${name}, ${game.message}`}</p>
      )}

      {gameIds.indexOf(currentGameId) === 2 && <Name />}
      {gameIds.indexOf(currentGameId) === 3 && <Age />}
      {gameIds.indexOf(currentGameId) === 4 && <TypeOfQuestion />}
      {gameIds.indexOf(currentGameId) === 6 && <IndexSix game={game} />}
      {gameIds.indexOf(currentGameId) === 8 && <IndexEight />}
      {gameIds.indexOf(currentGameId) === 9 && <IndexNine />}
      {gameIds.indexOf(currentGameId) === 11 && <IndexEleven />}
      {gameIds.indexOf(currentGameId) === 12 && (
        <ChooseBranch leftBranch={"branch1_1"} rightBranch={"branch1_2"} />
      )}
      {gameIds[gameIds.indexOf(currentGameId)] === 13 && (
        <div className={styles.indexThirteen}>
          <Image src={cube} alt="cube" />
        </div>
      )}
    </div>
  );
}
