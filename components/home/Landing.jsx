//! From Library
import Image from "next/image";

//! From local
import Games from "./Games";
import About from "./About";
import Contact from "./Contact";

//! Image
import background from "../../assets/images/Home/background.jpg";
import cloud from "../../assets/images/Home/cloud.png";

//image source:
// cloud.png from https://www.pngwing.com/en/free-png-dhdim/download

//! Styles
import styles from "../../styles/home/Landing.module.scss";

export default function Landing() {
  return (
    <div className={styles.container}>
      {/* background image -------------- */}
      {/* <Image src={background} alt="background" layout="responsive" /> */}

      <div className={styles.content}>
        <Games />
        <About />
        <Contact />
      </div>

      {/* clouds ----------- */}
      <div className={styles.cloudOne}>
        <Image src={cloud} alt="cloud" />
      </div>
      <div className={styles.cloudTwo}>
        <Image src={cloud} alt="cloud" />
      </div>
      <div className={styles.cloudThree}>
        <Image src={cloud} alt="cloud" />
      </div>
      <div className={styles.cloudFour}>
        <Image src={cloud} alt="cloud" />
      </div>
    </div>
  );
}
