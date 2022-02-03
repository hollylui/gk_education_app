//! From Library
import { useEffect, useContext } from "react";

//! From local
import clientPromise from "../../lib/mongodb";
import Landing from "../../components/Landing";
import Layout from "../../components/Layout";
import GameContext from "../../context/GameContext";

//! Images

//! Styles
import styles from "../../styles/GameLanding.module.scss";

export default function GameLanding({ games }) {
  const { setData } = useContext(GameContext);

  useEffect(() => {
    setData(games);
  });

  return (
    <div className={styles.container}>
      {/* <Navbar /> */}
      <Layout>
        <Landing title={"volcano animal recuse"} />
      </Layout>
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
