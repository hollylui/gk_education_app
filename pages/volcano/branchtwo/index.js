//! From Library
import { useContext } from "react";
import Image from "next/image";

//! From local
import clientPromise from "../../../lib/mongodb";
import BranchContext from "../../../context/BranchContext";
import Layout from "../../../components/Layout";
import MapContent from "../../../context/MapContent";
import BranchContent from "../../../components/BranchContent";
import LargeMap from "../../../components/LargeMap";
import Map from "../../../components/Map";
import BranchFooter from "../../../components/BranchFooter";

//! Image

//! Styles
import styles from "../../../styles/id.module.scss";

export default function BranchOne({ branch2_1, branch2_2 }) {
  let data;
  const { branch, branchIndex } = useContext(BranchContext);
  const { expand } = useContext(MapContent);

  branch === "branch2_1" ? (data = branch2_1) : (data = branch2_2);

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
            {expand ? (
              <LargeMap />
            ) : (
              <BranchContent branchIndex={branchIndex} branchData={data} />
            )}
          </div>
        </div>

        {/* footer section */}
        <div className={styles.controller}>
          <BranchFooter />
        </div>
      </div>
    </Layout>
  );
}

//Fetch data -------------------------------------------
export async function getServerSideProps(context) {
  try {
    const client = await clientPromise;
    const db = client.db("volcano");

    const data1 = await db.collection("branch2_1").find({}).toArray();
    const data2 = await db.collection("branch2_2").find({}).toArray();
    const branch2_1 = JSON.parse(JSON.stringify(data1));
    const branch2_2 = JSON.parse(JSON.stringify(data2));
    return {
      props: { branch2_1, branch2_2 },
    };
  } catch (e) {
    console.error(e);
    return {
      props: { isConnected: false },
    };
  }
}
