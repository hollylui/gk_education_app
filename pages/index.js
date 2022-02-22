import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import NavBarHome from "../components/NavHome";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [show, setShow] = useState({
    bubble1: "block",
    bubble2: "block",
    bubble3: "block",
    bubble4: "block",
    bubble5: "block",
    bubble6: "block",
    bubble7: "block",
    bubble8: "block",
    bubble9: "block",
    bubble10: "block",
  });
  const [score, setScore] = useState(0);
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

  useEffect(() => {
    const bubbleAgain = setInterval(() => {
      setShow({
        bubble1: "block",
        bubble2: "block",
        bubble3: "block",
        bubble4: "block",
        bubble5: "block",
        bubble6: "block",
        bubble7: "block",
        bubble8: "block",
        bubble9: "block",
        bubble10: "block",
      });
    }, 10000);
    return () => {
      clearInterval(bubbleAgain);
    };
  }, []);
  return (
    <div
      className={styles.container}
      // gave inner style for the background image to use it only the main page.
      // style={{
      //   backgroundImage: `url("https://i.pinimg.com/originals/be/87/14/be8714c4e87b970c3726e8f6910d2af1.gif")`,
      // }}
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
        <div
          className={score > 0 ? styles.score : styles.scoreNone}
          // style={score > 0 ? { display: "block" } : null}
        >
          <span id={styles.scoreTitle}>Score</span>
          <span id={styles.scoreCounter}>{score}</span>
        </div>
        <div className={styles.titleCon}>
          <div className={styles.title}>GK GAMES & MEDIA</div>
          <span>EDUCATIONAL GAMES FOR CHILDREN</span>
        </div>
        <div className={styles.gameCon}>
          {games.map((game, index) => (
            <div className={styles.gameIcons}>
              <Image
                key={index}
                src={game.img}
                onClick={() => router.push(game.link)}
                width={200}
                height={200}
                className={styles.gameImage}
              />
            </div>
          ))}
        </div>
        <div
          className={`${styles.bubble} ${styles.bubble1}`}
          style={{ display: show.bubble1 }}
          onClick={() => {
            setShow({ ...show, bubble1: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble2}`}
          style={{ display: show.bubble2 }}
          onClick={() => {
            setShow({ ...show, bubble2: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble3}`}
          style={{ display: show.bubble3 }}
          onClick={() => {
            setShow({ ...show, bubble3: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble4}`}
          style={{ display: show.bubble4 }}
          onClick={() => {
            setShow({ ...show, bubble4: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble5}`}
          style={{ display: show.bubble5 }}
          onClick={() => {
            setShow({ ...show, bubble5: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble6}`}
          style={{ display: show.bubble6 }}
          onClick={() => {
            setShow({ ...show, bubble6: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble7}`}
          style={{ display: show.bubble7 }}
          onClick={() => {
            setShow({ ...show, bubble7: "none" });
            setScore(score + 1);
          }}
        ></div>
        <div
          className={`${styles.bubble} ${styles.bubble8}`}
          style={{ display: show.bubble8 }}
          onClick={() => {
            setShow({ ...show, bubble8: "none" });
            setScore(score + 1);
          }}
        ></div>
      </div>
    </div>
  );
}
