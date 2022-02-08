//! From Library
import { useEffect, useContext } from "react";

//! From local
import clientPromise from "../../lib/mongodb";
import Landing from "../../components/Landing";
import MusicContext from "../../context/MusicContext";

//! Images

//! audio
import audio0 from "../../assets/audios/volcano/welcome_audio.mp3";

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
      <audio id="audio">
        <source src={audio0} />
      </audio>
      <Landing games={games} />
    </div>
  );
}

// Fetch data ------------------------------------------------
export async function getServerSideProps() {
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
