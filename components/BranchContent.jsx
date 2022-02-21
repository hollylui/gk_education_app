//! From Libarary
import Image from "next/image";
import { useContext, useEffect } from "react";

//! From Local
import BranchContext from "../context/BranchContext";

//! Images
import { allImages } from "../assets/images/volcano/branches/branchList";
import { allAlts } from "../assets/images/volcano/branches/altsList";

//! Styles
import styles from "../styles/BranchContent.module.scss";


import StaticAnimations from "./StaticAnimations";
import Click from "./Click";



export default function BranchContent({ branchIndex, branchData }) {
  let images, alts, noOfAnimal, index, animals ;
  const { branch, leftPath, rightPath, animalsList, setAnimalsList } =
    useContext(BranchContext);

  if (branch === "branch1_1") {
    
    noOfAnimal = 1;
    index = 0;
    images = allImages[index];
    animals = images[3];
    alts = allAlts[index];
  }

  if (branch === "branch1_2") {
    noOfAnimal = 1;
    index = 1;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[2];
  }

  if (branch === "branch2_1") {
    noOfAnimal = 2;
    index = 2;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[3];
  }

  if (branch === "branch2_2") {
    noOfAnimal = 2;
    index = 3;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[2];
  }

  if (branch === "branch3_1") {
    noOfAnimal = 3;
    index = 4;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[3];
  }

  if (branch === "branch3_2") {
    noOfAnimal = 3;
    index = 5;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[2];
  }

  if (branch === "branch4_1") {
    noOfAnimal = 4;
    index = 6;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[3];
  }

  if (branch === "branch4_2") {
    noOfAnimal = 4;
    index = 7;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[2];
  }

  if (branch === "branch5_1") {
    noOfAnimal = 5;
    index = 8;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[3];
  }

  if (branch === "branch5_2") {
    noOfAnimal = 5;
    index = 9;
    images = allImages[index];
    alts = allAlts[index];
    animals = images[2];
  }

  useEffect(() => {
    setAnimalsList([...animalsList, animals]);
    console.log(animalsList);
  }, [animals]);

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
              {/* <Image src={images[0]} alt="left path image" /> */}
              <StaticAnimations Position={1} />
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
          
          {branch === rightPath && <StaticAnimations Position={0} /> }
          
          {/* <Image src={images[1]} alt={alts[1]} /> */}
        </div>
      )}

      {/* index 2 ---------------------------------- */}
      {branchIndex === 2 && (
        <div className={styles.indexTwo}>
          {branch === leftPath ? (
            <div className={styles.sub_3}>
              {/* <Image src={images[1]} alt={alts[1]} /> */}
              <StaticAnimations Position={3} />
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
        </div>
      )}

      {/* index 3 ---------------------------------- */}

      {branchIndex === 3 && (
        <div className={styles.indexThree}>
          {branch === leftPath && (
            <div className={styles.sub_6}>
              {/* <Image src={images[2]} alt={alts[2]} /> */}
              <Click Position={0} />
            </div>
          )}
          {branch === rightPath && (
            <>
              <div className={styles.sub_4}>
                {/* <Image src={images[2]} alt={alts[2]} /> */}
                
              </div>
              <div className={styles.sub_5}>
                {/* <Image src={images[3]} alt={alts[3]} /> */}
                <Click Position={1} />
              </div>

              <div className={styles.sub_7}>
                {/* <Image src={images[4]} alt={alts[4]} /> */}
              </div>
            </>
          )}
        </div>
      )}

      {/* index 4 ---------------------------------- */}
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

      {/* index 5 ---------------------------------- */}
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
