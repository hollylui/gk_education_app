//! From Libarary
import Image from "next/image";
import { useContext, useState } from "react";
import { useRouter } from "next/router";

//! From local
import GameContext from "../context/GameContext";
import NameContext from "../context/NameContext";
import AgeContext from "../context/AgeContext";

//! Images
import nextBtn from "../assets/images/volcano/next.png";
import backBtn from "../assets/images/volcano/back.png";

//! Styles
import styles from "../styles/Footer.module.scss";

export default function Footer() {
  const router = useRouter();

  const { index, setIndex, data } = useContext(GameContext);

  const { name } = useContext(NameContext);
  const { age } = useContext(AgeContext);

  // back page handler
  const backHandler = () => {
    localStorage.setItem("_id", `${data[index - 1]._id}`);
    if (index !== 1) setIndex(index - 1);
    router.back();

    // setTimeout(() => {
    //   if (index !== 1) setIndex(index - 1);
    // }, 500);
  };

  // next page handler
  const nextHandler = () => {
    localStorage.setItem("_id", `${data[index + 1]._id}`);
    if (index === 2) localStorage.setItem("name", name);
    if (index == 3) localStorage.setItem("age", age);
    if (index !== 14) setIndex(index + 1);
    router.push(`/volcano/${data[index + 1]._id}`);

    // setTimeout(() => {
    //   if (index !== 14) setIndex(index + 1);
    // }, 500);
  };

  return (
    <div className={styles.container}>
      {/* back btn */}
      <div className={styles.btn} onClick={backHandler}>
        <Image src={backBtn} alt="go to previous page" />
      </div>

      {/* backpack section */}
      <div></div>

      {/* next btn */}
      {index !== 12 && (
        <div className={styles.btn} onClick={nextHandler}>
          <Image src={nextBtn} alt="go to next page" />
        </div>
      )}
    </div>
  );
}
