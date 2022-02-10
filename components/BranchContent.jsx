//! From Libarary
import Image from "next/image";
import { useContext } from "react";

//! From Local
import BranchContext from "../context/BranchContext";

//! Images
import crossingBridge from "../assets/images/volcano/crossing_bridge.png";
import monkeyInTree from "../assets/images/volcano/monkey_in_tree.png";
import scorionGuard from "../assets/images/volcano/scorion_guard.png";
import monkey from "../assets/images/volcano/monkey.png";
import breakBranch from "../assets/images/volcano/breaking_branch.png";
import batCave from "../assets/images/volcano/bats_cave.png";
import turtle from "../assets/images/volcano/turtle_original.png";
import river from "../assets/images/volcano/river.png";
import smallRock from "../assets/images/volcano/rock_small.png";

//! Styles
import styles from "../styles/BranchContent.module.scss";

export default function BranchContent({ branchIndex, branchData }) {
  const { branch, setBranch } = useContext(BranchContext);

  return (
    <div className={styles.container}>
      {branchIndex !== 5 && (
        <div
          className={
            branch === "branch1_1" ? styles.messageOne : styles.messageTwo
          }
        >
          {branchData[branchIndex].message}
        </div>
      )}

      {branchIndex === 0 && (
        <div className={styles.indexZero}>
          {branch === "branch1_1" && (
            <div className={styles.bridge}>
              <Image src={crossingBridge} alt="crossing bridge" />
            </div>
          )}

          {branch === "branch1_2" && (
            <div className={styles.cave}>
              <Image src={breakBranch} alt="breaking branch" />
            </div>
          )}
        </div>
      )}

      {branchIndex === 1 && (
        <div className={styles.indexOne}>
          {branch === "branch1_2" && <Image src={batCave} alt="bats' cave" />}
        </div>
      )}

      {branchIndex === 2 && (
        <div className={styles.indexTwo}>
          {branch === "branch1_1" && (
            <div className={styles.monkey}>
              <Image src={monkeyInTree} alt="monkey in the tree" />
            </div>
          )}

          {branch === "branch1_2" && (
            <>
              <div className={styles.turtle}>
                <Image src={turtle} alt="turtle" />
              </div>
              <div className={styles.river}>
                <Image src={river} alt="river" />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 3 && (
        <div className={styles.indexThree}>
          {branch === "branch1_1" && (
            <div className={styles.scorion}>
              <Image src={scorionGuard} alt="Scorion" />
            </div>
          )}
          {branch === "branch1_2" && (
            <>
              <div className={styles.turtle}>
                <Image src={turtle} alt="turtle" />
              </div>
              <div className={styles.river}>
                <Image src={river} alt="river" />
              </div>

              <div className={styles.rock}>
                <Image src={smallRock} alt="rock" />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 4 && (
        <div className={styles.indexFour}>
          {branch === "branch1_1" && (
            <div className={styles.scorion}>
              <Image src={scorionGuard} alt="Scorion" />
            </div>
          )}
          {branch === "branch1_2" && (
            <>
              <div className={styles.turtle}>
                <Image src={turtle} alt="turtle" />
              </div>
              <div className={styles.river}>
                <Image src={river} alt="river" />
              </div>

              <div className={styles.rock}>
                <Image src={smallRock} alt="rock" />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 5 && (
        <>
          <div
            className={
              branch === "branch1_1" ? styles.messageOne : styles.messageTwo
            }
          >
            Hurray! You have saved the {branchData[branchIndex].savedAnimal},
            and rescued 1 of 5 animals.
          </div>
          {branch === "branch1_1" && (
            <div className={styles.indexFive}>
              <Image src={monkey} alt="monkey" />
            </div>
          )}

          {branch === "branch1_2" && (
            <div className={styles.indexFive}>
              <Image src={turtle} alt="turtle" />
            </div>
          )}
        </>
      )}
    </div>
  );
}
