//! From Libarary
import Image from "next/image";
import { useContext, useState } from "react";

//! From Local
import BranchContext from "../context/BranchContext";

//! Images
import branch1_1a from "../assets/images/volcano/branch1_1a.png";
import branch1_1b from "../assets/images/volcano/branch1_1b.png";
import branch1_1c from "../assets/images/volcano/branch1_1c.png";
import branch1_1d from "../assets/images/volcano/branch1_1d.png";

import branch1_2a from "../assets/images/volcano/branch1_2a.png";
import branch1_2b from "../assets/images/volcano/branch1_2b.png";
import branch1_2c from "../assets/images/volcano/branch1_2c.png";
import branch1_2d from "../assets/images/volcano/branch1_2d.png";
import branch1_2e from "../assets/images/volcano/branch1_2e.png";

import branch2_1a from "../assets/images/volcano/branch2_1a.png";
import branch2_1b from "../assets/images/volcano/branch2_1b.png";
import branch2_1c from "../assets/images/volcano/branch2_1c.png";
import branch2_1d from "../assets/images/volcano/branch2_1d.png";

//! Styles
import styles from "../styles/BranchContent.module.scss";

export default function BranchContent({ branchIndex, branchData }) {
  let images, alts;
  const [noOfAnimal, setNoOfAnimal] = useState(1);
  const { branch, setBranch, leftPath, rightPath } = useContext(BranchContext);

  if (branch === "branch1_1") {
    images = [branch1_1a, branch1_1b, branch1_1c, branch1_1d];
    alts = ["crossing bridge", "monkey in the tree", "scorpion", "monkey"];
  }

  if (branch === "branch1_2") {
    images = [branch1_2a, branch1_2b, branch1_2c, branch1_2d, branch1_2e];
    alts = ["break branch", "bat cave", "turtle", "river", "small rock"];
  }

  if (branch === "branch2_1") {
    noOfAnimal = 2;
    images = [branch2_1a, branch2_1b, branch2_1c, branch2_1d];
    alts = ["waterfall", "forest", "deep in the forest", "frog"];
  }

  return (
    <div className={styles.container}>
      {branchIndex !== 5 && (
        <div
          className={
            branch === leftPath ? styles.messageOne : styles.messageTwo
          }
        >
          {branchData[branchIndex].message}
        </div>
      )}

      {branchIndex === 0 && (
        <div className={styles.indexZero}>
          {branch === leftPath && (
            <div className={styles.bridge}>
              <Image src={images[0]} alt="left path image" />
            </div>
          )}

          {branch === rightPath && (
            <div className={styles.cave}>
              <Image src={images[0]} alt={alts[0]} />
            </div>
          )}
        </div>
      )}

      {branchIndex === 1 && (
        <div className={styles.indexOne}>
          {branch === rightPath && <Image src={images[1]} alt={alts[1]} />}
        </div>
      )}

      {branchIndex === 2 && (
        <div className={styles.indexTwo}>
          {branch === leftPath && (
            <div className={styles.monkey}>
              <Image src={images[1]} alt={alts[1]} />
            </div>
          )}

          {branch === rightPath && (
            <>
              <div className={styles.turtle}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.river}>
                <Image src={images[3]} alt={alts[3]} />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 3 && (
        <div className={styles.indexThree}>
          {branch === leftPath && (
            <div className={styles.scorion}>
              <Image src={images[2]} alt={alts[2]} />
            </div>
          )}
          {branch === rightPath && (
            <>
              <div className={styles.turtle}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.river}>
                <Image src={images[3]} alt={alts[3]} />
              </div>

              <div className={styles.rock}>
                <Image src={images[4]} alt={alts[4]} />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 4 && (
        <div className={styles.indexFour}>
          {branch === leftPath && (
            <div className={styles.scorion}>
              <Image src={images[2]} alt={alts[2]} />
            </div>
          )}
          {branch === rightPath && (
            <>
              <div className={styles.turtle}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.river}>
                <Image src={images[3]} alt={alts[3]} />
              </div>

              <div className={styles.rock}>
                <Image src={images[4]} alt={alts[4]} />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 5 && (
        <>
          <div
            className={
              branch === leftPath ? styles.messageOne : styles.messageTwo
            }
          >
            Hurray! You have saved the {branchData[branchIndex].savedAnimal},
            and rescued {noOfAnimal} of 5 animals.
          </div>
          {branch === leftPath && (
            <div className={styles.indexFive}>
              <Image src={images[3]} alt={alts[3]} />
            </div>
          )}

          {branch === rightPath && (
            <div className={styles.indexFive}>
              <Image src={images[2]} alt={alts[2]} />
            </div>
          )}
        </>
      )}
    </div>
  );
}
