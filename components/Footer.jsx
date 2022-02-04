//! From Libarary
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

//! From local
import GameContext from "../context/GameContext";
import NameContext from "../context/NameContext";
import AgeContext from "../context/AgeContext";
// import clientPromise from "../lib/mongodb";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  const router = useRouter();

  const { name } = useContext(NameContext);
  const { age } = useContext(AgeContext);
  const { currGameId, gameIds } = useContext(GameContext);

  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];
  const prevGameId = gameIds[gameIds.indexOf(currGameId) - 1];
  const index = gameIds.indexOf(currGameId);

  // back page handler
  const backHandler = () => {
    localStorage.setItem("_id", prevGameId);

    index === 1
      ? router.push(`/volcano`)
      : router.push(`/volcano/${prevGameId}`);
  };

  // next page handler
  const nextHandler = () => {
    localStorage.setItem("_id", nextGameId);
    if (index === 2) localStorage.setItem("name", name);
    if (index == 3) localStorage.setItem("age", age);
    router.push(`/volcano/${nextGameId}`);
  };

  return (
    <div className={styles.container}>
      {/* back btn */}
      {index !== 13 && (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="go to previous page" />
        </div>
      )}

      {/* backpack section */}
      <div></div>

      {/* next btn */}
      {index !== 12 && (
        <div className={styles.btn} onClick={nextHandler}>
          <Image src={nextBtn} alt="go to next page" />
        </div>
      )}
    </div>
  );
}
