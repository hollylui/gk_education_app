//! From library
import Link from "next/link";

//! Styles
import styles from "../../styles/home/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.container}>
      <Link href="#top">
        <a>back to top</a>
      </Link>
    </footer>
  );
}
