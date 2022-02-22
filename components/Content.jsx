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
import IndexEighteen from "./IndexEighteen";

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
  const cubeStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "17%",
  };

  const index = gameIds.indexOf(currGameId);

  return (
    <div className={styles.outer}>
      <div
        className={styles.storybubbles}
        style={index == 6 ? { display: "none" } : null}
      >
        {index !== 3 && index !== 6 && (
          <p className={styles.message}>{game.message}</p>
        )}
        {index === 3 && (
          <p className={styles.message}>
            <span className={styles.name}>{name}</span>,{game.message}
          </p>
        )}
      </div>
      <div className={styles.container}>
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
          <div className={styles.indexThirteen} style={cubeStyle}>
            <Image src={cube} alt="cube" layout="fill" objectFit="contain" />
          </div>
        )}

        {index === 14 && (
          <ChooseBranch leftBranch={"branch2_1"} rightBranch={"branch2_2"} />
        )}

        {index === 15 && (
          <ChooseBranch leftBranch={"branch3_1"} rightBranch={"branch3_2"} />
        )}

        {index === 16 && (
          <ChooseBranch leftBranch={"branch4_1"} rightBranch={"branch4_2"} />
        )}

        {index === 17 && (
          <ChooseBranch leftBranch={"branch5_1"} rightBranch={"branch5_2"} />
        )}

        {index === 18 && <IndexEighteen />}
      </div>
    </div>
  );
}
