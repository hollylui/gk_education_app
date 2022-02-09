//! From Library
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/router";

//! From local
import BranchContext from "../context/BranchContext";
import MusicContext from "../context/MusicContext";

//! Images

//! Styles
import styles from "../styles/ChooseBranch.module.scss";

export default function ChooseBranch({ leftBranch, rightBranch }) {
  const router = useRouter();
  const { setBranch } = useContext(BranchContext);
  const { stage, setStage } = useContext(MusicContext);

  const width = 200;
  const height = 200;

  //callback function------------------------
  const leftBranchHandler = () => {
    setBranch(leftBranch);
    setStage(leftBranch);
    router.push(`/volcano/branchone`);
  };

  const rightBranchHandler = () => {
    setBranch(rightBranch);
    setStage(rightBranch);
    router.push(`/volcano/branchone`);
  };

  return (
    <div className={styles.container}>
      {/* left branch */}
      <div onClick={leftBranchHandler} className={styles.branch}>
        <Image
          src={`/images/volcano/${leftBranch}_way.png`}
          alt="left branch"
          width={width}
          height={height}
        />
      </div>

      {/* right branch */}
      <div onClick={rightBranchHandler} className={styles.branch}>
        <Image
          src={`/images/volcano/${rightBranch}_way.png`}
          alt="right branch"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
