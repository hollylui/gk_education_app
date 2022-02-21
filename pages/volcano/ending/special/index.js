import { useRouter } from "next/router";
import { useEffect } from "react";
import styles from "../../../../styles/Special.module.scss";

function Special() {
  const router = useRouter();
  useEffect(() => {
    router.push("/volcano/ending/special/0");
  }, []);
  return <div></div>;
}

export default Special;
