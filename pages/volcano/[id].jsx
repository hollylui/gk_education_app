//! From Library
import { useContext, useEffect } from "react";

//! From local
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import Footer from "../../components/Footer";
import MapContent from "../../context/MapContent";
import LargeMap from "../../components/LargeMap";
import Content from "../../components/Content";
import GameContext from "../../context/GameContext";

//! Images

//! Styles
import styles from "../../styles/id.module.scss";

// --------------------------------------------

export default function GameStart({ game, ids }) {
  const { expand } = useContext(MapContent);
  const { currGameId, setCurrGameId, gameIds, setGameIds } =
    useContext(GameContext);

  useEffect(() => {
    setCurrGameId(game._id);
  }, [game]);

  useEffect(() => {
    setGameIds(ids);
  }, []);

  const index = gameIds.indexOf(currGameId);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contents}>
          {/* map section */}
          <div className={styles.map}>
            {index !== 0 &&
            index !== 1 &&
            index !== 2 &&
            index !== 3 &&
            index !== 4 &&
            index !== 5 ? (
              <Map />
            ) : (
              ""
            )}
          </div>

          {/* content section */}
          <div className={styles.content}>
            {expand ? <LargeMap /> : <Content game={game} />}
          </div>
        </div>

        {/* footer section */}
        <div className={styles.controller}>
          <Footer />
        </div>
      </div>
    </Layout>
  );
}

// Fetch data ------------------------------------------
export const getStaticProps = async (context) => {

  const allData = await fetch(`http://localhost:3000/api/volcanos/`);
  const games = await allData.json();
  const ids = games.map((game) => game._id);
  const data = await fetch(
    `http://localhost:3000/api/volcanos/${context.params.id}`
  );
  const game = await data.json();

  return {
    props: { game, ids },
  };
};

export const getStaticPaths = async () => {
  const data = await fetch(`http://localhost:3000/api/volcanos/`);
  const games = await data.json();

  const ids = games.map((game) => game._id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};
