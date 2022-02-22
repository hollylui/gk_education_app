import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import NavBarHome from "../components/NavHome";

export default function Home() {
  const router = useRouter();
  const games = [
    {
      name: "volcano",
      img: "/images/landing/volcanoImg.png",
      link: "/volcano",
    },
    { name: "comingsoon", img: "/images/landing/comingsoon.png", link: "/" },
    { name: "comingsoon", img: "/images/landing/comingsoon.png", link: "/" },
    { name: "comingsoon", img: "/images/landing/comingsoon.png", link: "/" },
    { name: "comingsoon", img: "/images/landing/comingsoon.png", link: "/" },
    { name: "comingsoon", img: "/images/landing/comingsoon.png", link: "/" },
  ];
  return (
    <div
      className={styles.container}
      // gave inner style for the background image to use it only the main page.
      style={{
        backgroundImage: `url("https://i.pinimg.com/originals/be/87/14/be8714c4e87b970c3726e8f6910d2af1.gif")`,
      }}
    >
      <Head>
        <title>GK: Education App</title>
        <meta name="description" content="Generated by GK" />

        {/*THis is our icon, it can be changed later */}
        <link rel="icon" href="/children.ico" />
      </Head>

      <NavBarHome />

      {/* <h1 className={styles.title}>Welcome to GK Education App</h1> */}
      <div className={styles.main}>
        <div className={styles.titleCon}>
          <div className={styles.title}>GK GAMES & MEDIA</div>
          <span>EDUCATIONAL GAMES FOR CHILDREN</span>
        </div>
        <div className={styles.gameCon}>
          {games.map((game, index) => (
            <div className={styles.gameIcons} key={index}>
              <Image
                src={game.img}
                onClick={() => router.push(game.link)}
                width={200}
                height={200}
                className={styles.gameImage}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
