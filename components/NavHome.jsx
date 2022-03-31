import Link from "next/link";
import styles from "../styles/Home.module.scss";
import logo from "../assets/images/logo.png";
import Image from "next/image";

export default function NavBarHome() {
  return (
    <div className={styles.homeNav}>
      <Link href="/" passHref={true}>
        <div className={styles.logo}>
          <Image src={logo} className={styles.logo} alt="" />
        </div>
      </Link>
      <ul className={styles.navlist}>
        <Link href="/contact" passHref={true}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
}
