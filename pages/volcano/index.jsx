//! From Library
import { useEffect, useContext } from "react";
import Head from "next/head";

//! From local
import clientPromise from "../../lib/mongodb";
import Landing from "../../components/Landing";
import MusicContext from "../../context/MusicContext";

//! Images

//! audio
import welcome from "../../assets/audios/volcano/welcome.mp3";

//! Styles
import styles from "../../styles/GameLanding.module.scss";

export default function GameLanding({ games }) {
  const { music } = useContext(MusicContext);

  useEffect(() => {
    sessionStorage.removeItem("audioIndex");
    sessionStorage.removeItem("music");
    sessionStorage.setItem("music", music);

    const audio = document.getElementById("audio");
    audio.volume = 0.5;
    audio.play();
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Volcano Rescue</title>
        <link rel="icon" href="/images/volcano/favicon.png" />
      </Head>

      <audio id="audio" source src={welcome} />
      <Landing games={games} />
    </div>
  );
}

// Fetch data ------------------------------------------------
export async function getStaticProps() {
  try {
    const client = await clientPromise;
    const db = client.db("volcano");
    const data = await db.collection("main").find({}).toArray();
    const games = JSON.parse(JSON.stringify(data));

    return {
      props: { games },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
