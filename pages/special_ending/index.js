import { useRouter } from "next/router";
import { useEffect } from "react";




const SpecialEndings = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/special_ending/0");
  }, []);
  return <div>{/* <VolcanoErupts /> */}</div>;
};

export default SpecialEndings;