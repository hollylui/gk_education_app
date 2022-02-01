//! From Libaray
import { useContext } from "react";

//! From local
import NameContext from "../context/NameContext";

//! Styles
import styles from "../styles/Name.module.scss";

export default function Name() {
  const { setName } = useContext(NameContext);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      id="name"
      name="name"
      placeholder="Type your hero name here"
      onChange={nameHandler}
    />
  );
}
