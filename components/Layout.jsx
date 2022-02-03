//! From Library

//! From local
import Navbar from "../components/Navbar";

//! Images

//! Styles
import styles from "../styles/Layout.module.scss";

// ----------------------------------------

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      {/* <div className={styles.footer}></div> */}
    </div>
  );
}
