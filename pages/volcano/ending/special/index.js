import { useRouter } from "next/router";
import { useEffect } from "react";


function Special() {
  const router = useRouter();
  useEffect(() => {
    router.push("/volcano/ending/special/0");
  }, []);
  return <></>;
}

export default Special;
