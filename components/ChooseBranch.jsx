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
  const { setBranch, setBranchIndex, setLeftPath, setRightPath } =
    useContext(BranchContext);
  const { setStage } = useContext(MusicContext);

  const width = 250;
  const height = 250;

  //callback function------------------------
  const leftBranchHandler = () => {
    setBranchIndex(0);
    setBranch(leftBranch);
    setStage(leftBranch);
    setLeftPath(leftBranch);
    leftBranch === "branch1_1" && router.push(`/volcano/branchone`);
    leftBranch === "branch2_1" && router.push(`/volcano/branchtwo`);
    leftBranch === "branch3_1" && router.push(`/volcano/branchthree`);
    leftBranch === "branch4_1" && router.push(`/volcano/branchfour`);
    leftBranch === "branch5_1" && router.push(`/volcano/branchfive`);
  };

  const rightBranchHandler = () => {
    setBranchIndex(0);
    setBranch(rightBranch);
    setStage(rightBranch);
    setRightPath(rightBranch);

    rightBranch === "branch1_2" && router.push(`/volcano/branchone`);
    rightBranch === "branch2_2" && router.push(`/volcano/branchtwo`);
    rightBranch === "branch3_2" && router.push(`/volcano/branchthree`);
    rightBranch === "branch4_2" && router.push(`/volcano/branchfour`);
    rightBranch === "branch5_2" && router.push(`/volcano/branchfive`);
  };

  return (
    <div className={styles.container}>
      {/* left branch */}
      <div onClick={leftBranchHandler} className={styles.branch}>
        <Image
          className={styles.image}
          src={`/images/volcano/${leftBranch}_way.png`}
          alt="left branch"
          width={width}
          height={height}
        />
      </div>

      {/* right branch */}
      <div onClick={rightBranchHandler} className={styles.branch}>
        <Image
          className={styles.image}
          src={`/images/volcano/${rightBranch}_way.png`}
          alt="right branch"
          width={width}
          height={height}
        />
      </div>
    </div>
  );
}
