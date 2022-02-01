//! From Library
import Image from "next/image";
import Link from "next/link";

//! From local

//! Images
import games from "../../assets/images/Home/game-controller.png";
import about from "../../assets/images/Home/group.png";
import contact from "../../assets/images/Home/call.png";

// credit:
// game-controller.png icons created by Freepik, Source: https://www.flaticon.com/free-icons/gaming
//group.png icons created by Freepik, Source: https://www.flaticon.com/free-icons/team
//call.png icons created by Freepik, Source: https://www.flaticon.com/free-icons/call

//! Styles
import styles from "../../styles/home/NavBar.module.scss";

export default function NavBar() {
  const width = 60;
  const height = 60;

  return (
    <nav className={styles.container}>
      <div className={styles.navbarOne}></div>
      <div className={styles.navbarTwo}>
        {/* games button */}
        <div className={styles.icon}>
          <Link href="#games">
            <a>Games</a>
          </Link>
          <Image src={games} alt="game" width={width} height={height} />
        </div>

        {/* about us button */}
        <div className={styles.icon}>
          <Link href="#about">
            <a>About us</a>
          </Link>

          <Image
            className={styles.icon}
            src={about}
            alt="about"
            width={width}
            height={height}
          />
        </div>

        {/* contact button */}
        <div className={styles.icon}>
          <Link href="#contact">
            <a>Contact</a>
          </Link>

          <Image src={contact} alt="contact" width={width} height={height} />
        </div>
      </div>
    </nav>
  );
}
