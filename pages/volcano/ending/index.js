import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../../styles/Special.module.scss";

function Ending() {
  const router = useRouter();
  useEffect(() => {
    router.push("/volcano/ending/0");
  }, []);
  return (
    <div className={styles.container}>
      <h1>Please wait moments....</h1>
    </div>
  );
}

export default Ending;
