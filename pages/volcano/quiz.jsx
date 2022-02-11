import clientPromise from "../../lib/mongodb";

import Layout from "../../components/Layout";
import Footer from "../../components/Footer";
import Map from "../../components/Map";

import Backpack from "../../components/Backpack";
import Quiz from "../../components/Quiz";

import pageStyles from "../../styles/GameLanding.module.scss";

export default function Quizpage({ questions }) {
  return (
    <div className={pageStyles.container}>
      <Layout>
        <Quiz questions={questions} item="coconut" />

        <Quiz questions={questions} />

        <Map />

        <Backpack />
      </Layout>
    </div>
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
