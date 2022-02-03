//! From library
import Image from "next/image";
import { useContext } from "react";

//! From local
import littleMap from "../assets/images/volcano/little_map.png";
import MapContent from "../context/MapContent";

//! Styles
import styles from "../styles/Map.module.scss";

export default function Map() {
  const { expand, setExpand } = useContext(MapContent);

  const expandHandler = () => {
    setExpand(!expand);
  };

  return (
    <div className={styles.container}>
      <Image src={littleMap} alt="map" />
      <div className={styles.expand} onClick={expandHandler}></div>
    </div>
  );
}
