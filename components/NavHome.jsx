import Link from "next/link";
import styles from "../styles/Home.module.scss";
import Image from "next/image";

export default function NavBarHome() {
  return (
    <div className={styles.homeNav}>
      <Link href="/">
        <div className={styles.logo}>GK</div>
      </Link>
      <ul className={styles.navlist}>
        <Link className={styles.homeLink} href="/about">
          <li>ABOUT</li>
        </Link>
        <Link href="/contact">
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
    // </div>
  );
}
