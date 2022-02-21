//! From Libarary
import Image from "next/image";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

//! From local
import GameContext from "../context/GameContext";
import NameContext from "../context/NameContext";
import AgeContext from "../context/AgeContext";
import Backpack from "../components/Backpack";
import MusicContext from "../context/MusicContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";
import mouse from "../assets/images/volcano/animalcounter/mouse.png";

//! Styles
import styles from "../styles/Footer.module.scss";
import backpackStyles from "../styles/Backpack.module.scss";

//! Contexts
import BackpackContext from "../context/BackpackContext";

export default function Footer() {
  const router = useRouter();

  const { name } = useContext(NameContext);
  const { age } = useContext(AgeContext);
  const { currGameId, gameIds } = useContext(GameContext);
  const { audioIndex, setAudioIndex } = useContext(MusicContext);
  const { animalCount } = useContext(BackpackContext);
  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];
  const prevGameId = gameIds[gameIds.indexOf(currGameId) - 1];
  const index = gameIds.indexOf(currGameId);

  // audios array start from 0
  const audioControl = gameIds.indexOf(currGameId) - 1;

  // back page handler
  const backHandler = () => {
    if (audioControl > 0) {
      setAudioIndex(audioControl - 1);
      sessionStorage.setItem("audioIndex", Number(audioIndex) - 1);
    }

    sessionStorage.setItem("_id", prevGameId);

    index === 1
      ? router.push(`/volcano`)
      : router.push(`/volcano/${prevGameId}`);
  };

  // next page handler
  const nextHandler = () => {
    if (audioControl < 14) {
      setAudioIndex(audioControl + 1);
      sessionStorage.setItem("audioIndex", Number(audioIndex) + 1);
    }

    sessionStorage.setItem("_id", nextGameId);

    if (index === 2) sessionStorage.setItem("name", name);
    if (index == 3) sessionStorage.setItem("age", age);
    // router.push(`/volcano/${nextGameId}`);

    if (index === 13) {
      router.push(`/volcano/quiz`);
    } else {
      router.push(`/volcano/${nextGameId}`);
    }
  };

  return (
    <div className={styles.container}>
      {/* back btn */}
      {index !== 12 &&
      index !== 13 &&
      index !== 14 &&
      index !== 15 &&
      index !== 16 &&
      index !== 17 &&
      index !== 18 ? (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="go to previous page" />
        </div>
      ) : (
        <div className={styles.btn}></div>
      )}

      {/* backpack section : Thank you Holly!*/}
      {/* //! I think It makes more sense to show the backpack with the instruction. Could you check it? */}
      {index >= 6 && (
        <div className={backpackStyles.middleFooter}>
          <Backpack />
        </div>
      )}

      {/* next btn */}
      {index !== 12 &&
      index !== 14 &&
      index !== 15 &&
      index !== 16 &&
      index !== 17 ? (
        <div className={styles.btn} onClick={nextHandler}>
          <Image src={nextBtn} alt="go to next page" />
        </div>
      ) : (
        <div className={styles.btn}></div>
      )}
    </div>
  );
}
