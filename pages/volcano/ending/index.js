import { useRouter } from "next/router";
import { useEffect } from "react";

function Ending() {
  const router = useRouter();
  useEffect(() => {
    router.push("/volcano/ending/0");
  }, []);
  return <></>;
}

export default Ending;
