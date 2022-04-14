//! From Library
import Head from "next/head";

//! From local
import Navbar from "../components/Navbar";

<<<<<<< HEAD
//! Images

=======
>>>>>>> main
//! Styles
import styles from "../styles/Layout.module.scss";

// ----------------------------------------

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Volcano Rescue</title>
        <link rel="icon" href="/images/volcano/favicon.png" />
      </Head>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
