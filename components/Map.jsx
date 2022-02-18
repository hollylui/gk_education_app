//! From library
import Image from "next/image";
import { useContext, useEffect } from "react";

//! From local
import littleMap from "../assets/images/volcano/little_map.png";
import MapContext from "../context/MapContext";

//! Styles
import styles from "../styles/Map.module.scss";

let progressLevel;

export default function Map() {
  const { expand, setExpand, progress } = useContext(MapContext);

  const expandHandler = () => {
    setExpand(!expand);
  };

  const progressFn = () => {
    progressLevel.style.height = `${progress}px`;
  };

  useEffect(() => {
    progressLevel = document.getElementById("progress");
    progressFn();
  }, [progress]);

  return (
    <div className={styles.container}>
      <div id={styles.stage1}>x</div>
      <div id={styles.stage2}>x</div>
      <div id={styles.stage3}>x</div>
      <div id={styles.stage4}>x</div>
      <div id={styles.stage5}>x</div>
      <div className={styles.image}>
        <Image src={littleMap} alt="map" />
        <div id="progress" className={styles.progress}></div>
      </div>
      <div className={styles.expand} onClick={expandHandler}></div>
    </div>
  );
}
