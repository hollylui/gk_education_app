import { useRouter } from "next/router";
import { useEffect } from "react";

const Endings = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/ending/0");
  }, []);
  return <div></div>;
};

export default Endings;
