import { useRouter } from "next/router";
import { useEffect } from "react";

<<<<<<< HEAD



=======
>>>>>>> main
const Endings = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/ending/0");
  }, []);
<<<<<<< HEAD
  return <div>{/* <VolcanoErupts /> */}</div>;
=======
  return <div></div>;
>>>>>>> main
};

export default Endings;
