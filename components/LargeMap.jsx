//! From Library
import { useContext, useEffect } from "react";
import Image from "next/image";

//! Images
import largeMap from "../assets/images/volcano/large_map.png";
import MapContext from "../context/MapContext";

//! Styles
import styles from "../styles/LargeMap.module.scss";

let progressLevel;

export default function LargeMap() {
  const { expand, setExpand, largeMapProgress } = useContext(MapContext);
  const expandHandler = () => {
    setExpand(!expand);
  };

  const progressFn = () => {
    progressLevel.style.height = `${largeMapProgress}px`;
  };

  useEffect(() => {
    progressLevel = document.getElementById("largeMapProgress");
    progressFn();
  }, [largeMapProgress]);

  return (
    <div className={styles.container}>
      <div id={styles.stage1}>x</div>
      <div id={styles.stage2}>x</div>
      <div id={styles.stage3}>x</div>
      <div id={styles.stage4}>x</div>
      <div id={styles.stage5}>x</div>
      <div className={styles.image}>
        <Image src={largeMap} alt="large map" />
        <div id="largeMapProgress" className={styles.largeMapProgress}></div>
      </div>
      <div className={styles.expand} onClick={expandHandler}></div>
    </div>
  );
}
