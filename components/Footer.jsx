//! From Libarary
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

//! From local
import GameContext from "../context/GameContext";
import NameContext from "../context/NameContext";
import AgeContext from "../context/AgeContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  const router = useRouter();

  const { index, data, currentGameId, gameIds } = useContext(GameContext);

  const { name } = useContext(NameContext);
  const { age } = useContext(AgeContext);

  //? nextGame Id
  const nextGameId = gameIds[gameIds.indexOf(currentGameId) + 1];
  //? previousGame Id
  const previousGameId = gameIds[gameIds.indexOf(currentGameId) - 1];
  // back page handler
  const backHandler = () => {
    localStorage.setItem("_id", `${previousGameId}`);
    // setTimeout(() => {
    //   setIndex(index - 1);
    // }, 500);

    router.push(`/volcano/${previousGameId}`);
  };

  // next page handler
  const nextHandler = () => {
    localStorage.setItem("_id", `${nextGameId}`);
    if (gameIds[gameIds.indexOf(currentGameId)] === 2)
      localStorage.setItem("name", name);
    if (gameIds[gameIds.indexOf(currentGameId)] == 3)
      localStorage.setItem("age", age);

    // setTimeout(() => {
    //   setIndex(index + 1);
    // }, 500);

    router.push(`/volcano/${nextGameId}`);
  };

  return (
    <div className={styles.container}>
      {/* back btn */}
      {gameIds[gameIds.indexOf(currentGameId)] !== 1 && (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="go to previous page" />
        </div>
      )}

      {/* backpack section */}
      <div></div>

      {/* next btn */}
      {gameIds[gameIds.indexOf(currentGameId)] !== 12 && (
        <div className={styles.btn} onClick={nextHandler}>
          <Image src={nextBtn} alt="go to next page" />
        </div>
      )}
    </div>
  );
}
