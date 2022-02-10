//! From Libarary
import Image from "next/image";
import { useContext } from "react";

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
import branch2_2a from "../assets/images/volcano/branch2_2a.png";
import branch2_2b from "../assets/images/volcano/branch2_2b.png";
import branch2_2c from "../assets/images/volcano/branch2_2c.png";
import branch2_2d from "../assets/images/volcano/branch2_2d.png";
import branch2_2e from "../assets/images/volcano/branch2_2e.png";

import branch3_1a from "../assets/images/volcano/branch3_1a.png";
import branch3_1b from "../assets/images/volcano/branch3_1b.png";
import branch3_1c from "../assets/images/volcano/branch3_1c.png";
import branch3_1d from "../assets/images/volcano/branch3_1d.png";
import branch3_2a from "../assets/images/volcano/branch3_2a.png";
import branch3_2b from "../assets/images/volcano/branch3_2b.png";
import branch3_2c from "../assets/images/volcano/branch3_2c.png";
import branch3_2d from "../assets/images/volcano/branch3_2d.png";
import branch3_2e from "../assets/images/volcano/branch3_2e.png";

import branch4_1a from "../assets/images/volcano/branch4_1a.png";
import branch4_1b from "../assets/images/volcano/branch4_1b.png";
import branch4_1c from "../assets/images/volcano/branch4_1c.png";
import branch4_1d from "../assets/images/volcano/branch4_1d.png";
import branch4_2a from "../assets/images/volcano/branch4_2a.png";
import branch4_2b from "../assets/images/volcano/branch4_2b.png";
import branch4_2c from "../assets/images/volcano/branch4_2c.png";
import branch4_2d from "../assets/images/volcano/branch4_2d.png";
import branch4_2e from "../assets/images/volcano/branch4_2e.png";

import branch5_1a from "../assets/images/volcano/branch5_1a.png";
import branch5_1b from "../assets/images/volcano/branch5_1b.png";
import branch5_1c from "../assets/images/volcano/branch5_1c.png";
import branch5_1d from "../assets/images/volcano/branch5_1d.png";
import branch5_2a from "../assets/images/volcano/branch5_2a.png";
import branch5_2b from "../assets/images/volcano/branch5_2b.png";
import branch5_2c from "../assets/images/volcano/branch5_2c.png";
import branch5_2d from "../assets/images/volcano/branch5_2d.png";
import branch5_2e from "../assets/images/volcano/branch5_2e.png";

//! Styles
import styles from "../styles/BranchContent.module.scss";

export default function BranchContent({ branchIndex, branchData }) {
  let images, alts, noOfAnimal;

  const { branch, setBranch, leftPath, rightPath } = useContext(BranchContext);

  if (branch === "branch1_1") {
    noOfAnimal = 1;
    images = [branch1_1a, branch1_1b, branch1_1c, branch1_1d];
    alts = ["crossing bridge", "monkey in the tree", "scorpion", "monkey"];
  }

  if (branch === "branch1_2") {
    noOfAnimal = 1;
    images = [branch1_2a, branch1_2b, branch1_2c, branch1_2d, branch1_2e];
    alts = ["break branch", "bat cave", "turtle", "river", "small rock"];
  }

  if (branch === "branch2_1") {
    noOfAnimal = 2;
    images = [branch2_1a, branch2_1b, branch2_1c, branch2_1d];
    alts = ["waterfall", "forest", "deep in the forest", "frog"];
  }

  if (branch === "branch2_2") {
    noOfAnimal = 2;
    images = [branch2_2a, branch2_2b, branch2_2c, branch2_2d, branch2_2e];
    alts = ["river", "jungle", "hedgehog", "river", "small rock"];
  }

  if (branch === "branch3_1") {
    noOfAnimal = 3;
    images = [branch3_1a, branch3_1b, branch3_1c, branch3_1d];
    alts = ["sky", "above cloud", "deep in the cloud", "scorpion"];
  }

  if (branch === "branch3_2") {
    noOfAnimal = 3;
    images = [branch3_2a, branch3_2b, branch3_2c, branch3_2d, branch3_2e];
    alts = ["ocean", "fish", "giraffe", "river", "small rock"];
  }

  if (branch === "branch4_1") {
    noOfAnimal = 4;
    images = [branch4_1a, branch4_1b, branch4_1c, branch4_1d];
    alts = ["cake", "birthday cake", "gift", "lizard"];
  }

  if (branch === "branch4_2") {
    noOfAnimal = 4;
    images = [branch4_2a, branch4_2b, branch4_2c, branch4_2d, branch4_2e];
    alts = ["cupcakes", "blueberry cupcake", "dog", "river", "small rock"];
  }

  if (branch === "branch5_1") {
    noOfAnimal = 5;
    images = [branch5_1a, branch5_1b, branch5_1c, branch5_1d];
    alts = ["waterfall", "forest", "deep in the forest", "scorpion"];
  }

  if (branch === "branch5_2") {
    noOfAnimal = 5;
    images = [branch5_2a, branch5_2b, branch5_2c, branch5_2d, branch5_2e];
    alts = ["river", "beach", "giraffe", "river", "small rock"];
  }

  return (
    <div className={styles.container}>
      {/* message ---------------------------- */}
      {branchIndex !== 5 && (
        <div
          className={
            branch === leftPath ? styles.messageOne : styles.messageTwo
          }
        >
          {branchData[branchIndex].message}
        </div>
      )}

      {/* index 0 --------------------------- */}
      {branchIndex === 0 && (
        <div className={styles.indexZero}>
          {branch === leftPath ? (
            <div className={styles.sub_1}>
              <Image src={images[0]} alt="left path image" />
            </div>
          ) : (
            <div className={styles.sub_2}>
              <Image src={images[0]} alt={alts[0]} />
            </div>
          )}
        </div>
      )}

      {/* index 1 ------------------------------------ */}
      {branchIndex === 1 && (
        <div className={styles.indexOne}>
          {branch === rightPath && <Image src={images[1]} alt={alts[1]} />}
        </div>
      )}

      {/* index 2 ---------------------------------- */}
      {branchIndex === 2 && (
        <div className={styles.indexTwo}>
          {branch === leftPath ? (
            <div className={styles.sub_3}>
              <Image src={images[1]} alt={alts[1]} />
            </div>
          ) : (
            <>
              <div className={styles.sub_4}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.sub_5}>
                <Image src={images[3]} alt={alts[3]} />
              </div>
            </>
          )}

          {/* {branch === leftPath && (
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
          )} */}
        </div>
      )}

      {branchIndex === 3 && (
        <div className={styles.indexThree}>
          {branch === leftPath && (
            <div className={styles.sub_6}>
              <Image src={images[2]} alt={alts[2]} />
            </div>
          )}
          {branch === rightPath && (
            <>
              <div className={styles.sub_4}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.sub_5}>
                <Image src={images[3]} alt={alts[3]} />
              </div>

              <div className={styles.sub_7}>
                <Image src={images[4]} alt={alts[4]} />
              </div>
            </>
          )}
        </div>
      )}

      {branchIndex === 4 && (
        <div className={styles.indexFour}>
          {branch === leftPath && (
            <div className={styles.sub_6}>
              <Image src={images[2]} alt={alts[2]} />
            </div>
          )}
          {branch === rightPath && (
            <>
              <div className={styles.sub_4}>
                <Image src={images[2]} alt={alts[2]} />
              </div>
              <div className={styles.sub_5}>
                <Image src={images[3]} alt={alts[3]} />
              </div>

              <div className={styles.sub_7}>
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

          <div className={styles.indexFive}>
            {branch === leftPath ? (
              <Image src={images[3]} alt={alts[3]} />
            ) : (
              <Image src={images[2]} alt={alts[2]} />
            )}
          </div>
        </>
      )}
    </div>
  );
}
