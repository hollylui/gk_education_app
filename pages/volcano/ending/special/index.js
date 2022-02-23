import { useRouter } from "next/router";
import { useEffect } from "react";


function Special() {
  const router = useRouter();
<<<<<<< HEAD
  // useEffect(() => {
  //   router.push("/volcano/ending/special/0");
  // }, []);
  return (
    <div className={styles.container}>
      <h1>Special Ending</h1>
    </div>
  );
=======
  useEffect(() => {
    router.push("/volcano/ending/special/0");
  }, []);
  return <></>;
>>>>>>> animation_integration
}

export default Special;
