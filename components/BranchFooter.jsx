//! From Libarary
import Image from "next/image";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

//! From local
import BranchContext from "../context/BranchContext";
import GameContext from "../context/GameContext";
import MusicContext from "../context/MusicContext";
import MapContext from "../context/MapContext";
import BranchFooterContext from "../context/BranchFooterContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/Footer.module.scss";
import Backpack from "./Backpack";

//---------------------------------------------

export default function BranchFooter() {
  const router = useRouter();
  const { branchIndex, setBranchIndex } = useContext(BranchContext);
  const { currGameId, gameIds } = useContext(GameContext);
  const { audioIndex, branchAudioIndex, setBranchAudioIndex, setStage } =
    useContext(MusicContext);
  const { progress, setProgress, largeMapProgress, setLargeMapProgress } =
    useContext(MapContext);
  const { next, setNext } = useContext(BranchFooterContext);

  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];
  // const prevGameId = gameIds[gameIds.indexOf(currGameId)];

  const index = gameIds.indexOf(currGameId);

  // const backToCrossRoad = () => {
  //   setBranchAudioIndex(0);
  //   if (branchIndex === 0) router.push(`/volcano/${prevGameId}`);
  // };

  const backHandler = () => {
    setNext(false);
    setBranchAudioIndex(branchAudioIndex - 1);
    if (branchIndex !== 0) {
      setBranchIndex(branchIndex - 1);
    }
  };

  // next page handler
  const nextHandler = () => {
    setBranchAudioIndex(branchAudioIndex + 1);
    if (branchIndex !== 5) setBranchIndex(branchIndex + 1);
    if (branchIndex === 5) {
      setStage("audio");
      setProgress(progress + 28);
      setLargeMapProgress(largeMapProgress + 58);
      sessionStorage.setItem("audioIndex", Number(audioIndex) + 1);

      if (index > 12 && index < 18) {
        router.push(`/volcano/quiz`);
      } else {
        router.push(`/volcano/${nextGameId}`);
      }
    }
  };

  useEffect(() => {
    setNext(false);
  }, []);

  return (
    <div className={styles.container}>
      {branchIndex !== 0 && branchIndex !== 5 ? (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="got to previosu page" />
        </div>
      ) : (
        <div className={styles.btn}></div>
      )}

      {/* {branchIndex === 0 && (
        <div className={styles.btn} onClick={backToCrossRoad}>
          <Image src={backBtn} alt="got to previosu page" />
        </div>
      )} */}

      <div>
        <Backpack />
      </div>
      {branchIndex !== 3 || next ? (
        <div className={styles.btn} onClick={nextHandler}>
          <Image src={nextBtn} alt="got to previosu page" />
        </div>
      ) : (
        <div className={styles.btn}></div>
      )}
    </div>
  );
}
