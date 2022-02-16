import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../styles/PageNoteFound.module.scss";

function PageNotFound() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 4000);
  }, []);
  return (
    <div className={styles.main}>
      <span>Sorry, Page Not Found</span>
    </div>
  );
}

export default PageNotFound;
