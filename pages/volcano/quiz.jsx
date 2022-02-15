//! From library
import clientPromise from "../../lib/mongodb";
import { useContext } from "react";

//! From local
import Layout from "../../components/Layout";
import Map from "../../components/Map";
import MapContent from "../../context/MapContent";
import Quiz from "../../components/Quiz";
import LargeMap from "../../components/LargeMap";
import QuizFooter from "../../components/QuizFooter";

//! Styles
import styles from "../../styles/id.module.scss";

export default function Quizpage({ questions }) {
  const { expand } = useContext(MapContent);

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.contents}>
          {/* map section */}

          <div className={styles.map}>
            <Map />
          </div>

          {/* content section */}
          <div className={styles.content}>
            {expand ? <LargeMap /> : <Quiz questions={questions} />}
          </div>
        </div>

        {/* footer section */}
        <div className={styles.controller}>{<QuizFooter />}</div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("volcano");

    let data = await db.collection("questions").find({}).toArray();
    let questions = JSON.parse(JSON.stringify(data));

    return {
      props: { questions },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
