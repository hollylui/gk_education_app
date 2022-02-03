//! From Library
import { useContext } from "react";
import Image from "next/image";

//! Images
import largeMap from "../assets/images/volcano/large_map.png";
import MapContent from "../context/MapContent";

//! Styles
import styles from "../styles/LargeMap.module.scss";

export default function LargeMap() {
  const { expand, setExpand } = useContext(MapContent);
  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className={styles.container}>
      <Image src={largeMap} alt="large map" />
      <div className={styles.expand} onClick={expandHandler}></div>
    </div>
  );
}
