//! From Libarary
import Image from "next/image";

//! Image
import crossingBridge from "../assets/images/volcano/crossing_bridge.png";
import monkeyInTree from "../assets/images/volcano/monkey_in_tree.png";
import scorionGuard from "../assets/images/volcano/scorion_guard.png";
import monkey from "../assets/images/volcano/monkey.png";

//! Styles
import styles from "../styles/BranchContent.module.scss";

export default function BranchContent({ index, data }) {
  return (
    <div className={styles.container}>
      {index === 0 && (
        <div className={styles.indexZero}>
          <Image src={crossingBridge} alt="crossing bridge" />
        </div>
      )}

      {index === 2 && (
        <div className={styles.indexTwo}>
          <Image src={monkeyInTree} alt="monkey in the tree" />
        </div>
      )}

      {index === 3 && (
        <div className={styles.indexTwo}>
          <Image src={scorionGuard} alt="Scorion" />
        </div>
      )}

      {index !== 5 && (
        <div className={styles.message}>{data[index].message}</div>
      )}

      {index === 5 && (
        <>
          <div className={styles.message}>
            Hurray! You have saved the {data[index].savedAnimal}, and rescued 1
            of 5 animals.
          </div>
          <div className={styles.indexFive}>
            <Image src={monkey} alt="monkey" />
          </div>
        </>
      )}
    </div>
  );
}
