//! From Library
import { useContext } from "react";
<<<<<<< HEAD
import Image from "next/image";
=======
>>>>>>> main

//! From local
import clientPromise from "../../../lib/mongodb";
import BranchContext from "../../../context/BranchContext";
import Layout from "../../../components/Layout";
import MapContext from "../../../context/MapContext";
import BranchContent from "../../../components/BranchContent";
import LargeMap from "../../../components/LargeMap";
import Map from "../../../components/Map";
import BranchFooter from "../../../components/BranchFooter";

//! Image

//! Styles
import styles from "../../../styles/id.module.scss";

export default function BranchOne({ branch1_1, branch1_2 }) {
  let data;
  const { branch, branchIndex } = useContext(BranchContext);
  const { expand } = useContext(MapContext);

  branch === "branch1_1" ? (data = branch1_1) : (data = branch1_2);

  return (
    <Layout>
      <div
        className={
          branchIndex == 5
            ? `${styles.bgImage} ${styles.hurray}`
            : styles.bgImage
        }
      >
        <div className={`${styles.container} ${styles.palmLow}`}>
          <div className={styles.map}>
            <Map />
          </div>
          <div className={styles.contents}>
            {/* map section */}

            {/* content section */}
            <div className={styles.content}>
              {expand ? (
                <LargeMap />
              ) : (
                <BranchContent branchIndex={branchIndex} branchData={data} />
              )}
            </div>

            {/* footer section */}
            <div className={styles.controller}>
              <BranchFooter />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

//Fetch data -------------------------------------------
<<<<<<< HEAD
export async function getServerSideProps(context) {
=======
export async function getStaticProps(context) {
>>>>>>> main
  try {
    const client = await clientPromise;
    const db = client.db("volcano");

    const data1 = await db.collection("branch1_1").find({}).toArray();
    const data2 = await db.collection("branch1_2").find({}).toArray();
    const branch1_1 = JSON.parse(JSON.stringify(data1));
    const branch1_2 = JSON.parse(JSON.stringify(data2));
    return {
      props: { branch1_1, branch1_2 },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
