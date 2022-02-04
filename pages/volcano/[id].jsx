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
  const { index, setGameIds, gameIds, setCurrentGameId, currentGameId } =
    useContext(GameContext);

  useEffect(() => {
    setCurrentGameId(game._id);
    console.log(currentGameId);
  }, [game]);

  useEffect(() => {
    setGameIds(ids);
  }, []);

  useEffect(() => {
    console.log(gameIds);
  }, [gameIds]);

  useEffect(() => {
    console.log(currentGameId);
  }, [currentGameId]);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contents}>
          {/* map section */}

          {gameIds.indexOf(currentGameId) !== 0 &&
          gameIds.indexOf(currentGameId) !== 1 &&
          gameIds.indexOf(currentGameId) !== 2 &&
          gameIds.indexOf(currentGameId) !== 3 &&
          gameIds.indexOf(currentGameId) !== 4 &&
          gameIds.indexOf(currentGameId) !== 5 ? (
            <div className={styles.map}>
              <Map />
            </div>
          ) : (
            <div className={styles.map}></div>
          )}

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

//Fetch data ------------------------------------------
export const getStaticProps = async (context) => {
  const games = await (
    await fetch(`http://localhost:3000/api/volcanos/`)
  ).json();
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
