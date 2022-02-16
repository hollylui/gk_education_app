import Image from "next/image";
import { useEffect } from "react";

import animat1 from "../assets/animations/1.gif";
import animat2 from "../assets/animations/2.gif";
import animat3 from "../assets/animations/3.gif";

import styles from "../styles/testing.module.scss";
let one, two, three;
export default function testing() {
  const width = 300;
  const height = 200;

  const playAnimation = () => {
    setTimeout(() => {
      one.classList.add(styles.hidden);
    }, 2000);

    setTimeout(() => {
      two.classList.add(styles.hidden);
    }, 4000);
  };

  useEffect(() => {
    one = document.getElementById("one");
    two = document.getElementById("two");
    playAnimation();
  }, []);

  return (
    <div className={styles.animation}>
      <div id="one" className={styles.one}>
        <Image src={animat1} width={width} height={height} />
      </div>
      <div id="two" className={styles.two}>
        <Image src={animat2} width={width} height={height} />
      </div>
      <div id="three" className={styles.three}>
        <Image src={animat3} width={width} height={height} />
      </div>
    </div>
  );
}
