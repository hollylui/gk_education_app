//! From Libarary
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

//! From local
import BranchContext from "../context/BranchContext";
import GameContext from "../context/GameContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/BranchFooter.module.scss";

//---------------------------------------------

export default function BranchFooter() {
  const router = useRouter();
  const { branchIndex, setBranchIndex } = useContext(BranchContext);
  const { index, setIndex, data } = useContext(GameContext);

  const backHandler = () => {
    if (branchIndex !== 0) setBranchIndex(branchIndex - 1);
  };
  const nextHandler = () => {
    if (branchIndex !== 5) setBranchIndex(branchIndex + 1);

    if (branchIndex === 5) {
      setIndex(13);
      router.push(`/volcano/${data[13]._id}`);
    }
  };

  return (
    <div className={styles.container}>
      {branchIndex !== 0 && (
        <div className={styles.btn} onClick={backHandler}>
          <Image src={backBtn} alt="got to previosu page" />
        </div>
      )}
      <div></div>
      <div className={styles.btn} onClick={nextHandler}>
        <Image src={nextBtn} alt="got to previosu page" />
      </div>
    </div>
  );
}
