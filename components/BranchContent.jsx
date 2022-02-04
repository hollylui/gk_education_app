//! From Libarary
import Image from "next/image";

//! Image
import crossingBridge from "../assets/images/volcano/crossing_bridge.png";
import monkeyInTree from "../assets/images/volcano/monkey_in_tree.png";
import scorionGuard from "../assets/images/volcano/scorion_guard.png";
import monkey from "../assets/images/volcano/monkey.png";

//! Styles
import styles from "../styles/BranchContent.module.scss";

export default function BranchContent({ branchIndex, branchData }) {
  return (
    <div className={styles.container}>
      {branchIndex === 0 && (
        <div className={styles.indexZero}>
          <Image src={crossingBridge} alt="crossing bridge" />
        </div>
      )}

      {branchIndex === 2 && (
        <div className={styles.indexTwo}>
          <Image src={monkeyInTree} alt="monkey in the tree" />
        </div>
      )}

      {branchIndex === 3 && (
        <div className={styles.indexTwo}>
          <Image src={scorionGuard} alt="Scorion" />
        </div>
      )}

      {branchIndex !== 5 && (
        <div className={styles.message}>{branchData[branchIndex].message}</div>
      )}

      {branchIndex === 5 && (
        <>
          <div className={styles.message}>
            Hurray! You have saved the {branchData[branchIndex].savedAnimal},
            and rescued 1 of 5 animals.
          </div>
          <div className={styles.indexFive}>
            <Image src={monkey} alt="monkey" />
          </div>
        </>
      )}
    </div>
  );
}
