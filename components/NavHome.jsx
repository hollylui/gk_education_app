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
<<<<<<< HEAD
=======
        <Link className={styles.homeLink} href="/about" passHref={true}>
          <li>ABOUT</li>
        </Link>
>>>>>>> main
        <Link href="/contact" passHref={true}>
          <li>CONTACT</li>
        </Link>
      </ul>
    </div>
  );
}
