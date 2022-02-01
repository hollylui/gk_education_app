//! From Library
import Head from "next/head";

//! From local
import NavBar from "../components/home/NavBar";
import Landing from "../components/home/Landing";
import Footer from "../components/home/Footer";

//! Styles
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div id="top" className={styles.container}>
      <Head>
        <title>GK: Education App</title>
        <meta name="description" content="Generated by GK" />
        <link rel="icon" href="/children.ico" />
      </Head>

      <main className={styles.container}>
        <NavBar />
        <Landing />
        <Footer />
      </main>
    </div>
  );
}
