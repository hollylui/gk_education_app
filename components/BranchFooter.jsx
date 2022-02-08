//! From Libarary
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

//! From local
import BranchContext from "../context/BranchContext";
import GameContext from "../context/GameContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/BranchFooter.module.scss";
import Backpack from "./Backpack";

//---------------------------------------------

export default function BranchFooter() {
  const router = useRouter();
  const { branchIndex, setBranchIndex } = useContext(BranchContext);
  const { currGameId, gameIds } = useContext(GameContext);

  const nextGameId = gameIds[gameIds.indexOf(currGameId) + 1];
  const prevGameId = gameIds[gameIds.indexOf(currGameId)];

  const backToCrossRoad = () => {
    if (branchIndex === 0) router.push(`/volcano/${prevGameId}`);
  };

  const backHandler = () => {
    if (branchIndex !== 0) {
      setBranchIndex(branchIndex - 1);
    }
  };

  // next page handler
  const nextHandler = () => {
    if (branchIndex !== 5) setBranchIndex(branchIndex + 1);
    if (branchIndex === 5) {
      router.push(`/volcano/${nextGameId}`);
    }
  };

  return (
    <div className={styles.container}>
      {branchIndex !== 0 && (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="got to previosu page" />
        </div>
      )}

      {branchIndex === 0 && (
        <div className={styles.btn} onClick={backToCrossRoad}>
          <Image src={backBtn} alt="got to previosu page" />
        </div>
      )}

      <div>
        <Backpack />
      </div>

      <div className={styles.btn} onClick={nextHandler}>
        <Image src={nextBtn} alt="got to previosu page" />
      </div>
    </div>
  );
}
