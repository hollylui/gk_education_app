//! From Library
import { useContext, useEffect } from "react";

//! From local
import clientPromise from "../../lib/mongodb";
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import Footer from "../../components/Footer";
import MapContext from "../../context/MapContext";
import LargeMap from "../../components/LargeMap";
import Content from "../../components/Content";
import GameContext from "../../context/GameContext";

//! Images

//! Styles
import styles from "../../styles/id.module.scss";

// --------------------------------------------

export default function GameStart({ game, ids }) {
  const { expand } = useContext(MapContext);
  const { currGameId, setCurrGameId, gameIds, setGameIds } =
    useContext(GameContext);

  useEffect(() => {
    setCurrGameId(game._id);
    console.log(game);
  }, [game]);

  useEffect(() => {
    setGameIds(ids);
  }, []);

  const index = gameIds.indexOf(currGameId);

  return (
    <Layout>
      <div className={styles.bgImage}>
        <div
          className={
            index > 11
              ? `${styles.container} ${styles.palmLow}`
              : styles.container
          }
        >
          {/* map section */}
          <div className={styles.map}>{index > 5 ? <Map /> : ""}</div>
          <div className={styles.contents}>
            {/* content section */}
            <div className={styles.content}>
              {expand ? <LargeMap /> : <Content game={game} />}
            </div>

            {/* footer section */}
            <div className={styles.controller}>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

// Fetch data ------------------------------------------
export const getStaticProps = async (context) => {
  // const allData = await fetch(`http:/localhost:3000/api/volcanos/`);
  // const games = await allData.json();
  const client = await clientPromise;
  const db = client.db("volcano");
  const data = await db.collection("main").find({}).toArray();
  const games = JSON.parse(JSON.stringify(data));

  const ids = games.map((game) => game._id);
  // const data = await fetch(
  //   `http:/localhost:3000/api/volcanos/${context.params.id}`
  // );
  // const game = await data.json();
  const filtered = games.filter((game) => game._id === context.params.id);
  const game = filtered[0];

  return {
    props: { game, ids },
  };
};

export const getStaticPaths = async () => {
  // const data = await fetch(`http:/localhost:3000/api/volcanos/`);
  // const games = await data.json();

  const client = await clientPromise;
  const db = client.db("volcano");
  const data = await db.collection("main").find({}).toArray();
  const games = JSON.parse(JSON.stringify(data));

  const ids = games.map((game) => game._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
