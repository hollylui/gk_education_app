//! From Library
import Image from "next/image";

//! From local
import clientPromise from "../../lib/mongodb";
import Navbar from "../../components/Navbar";

//! Images
import landing from "../../assets/images/volcano/landing.png";

//! Styles
import styles from "../../styles/GameLanding.module.scss";
import Landing from "../../components/Landing";

export default function GameLanding({ games }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <Landing games={games} />
    </div>
  );
}

// Fetch data ------------------------------------------------
export async function getServerSideProps(context) {
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
