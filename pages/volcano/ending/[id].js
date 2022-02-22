// import timeout from "../../../../lotties/timeout"
import animationArray from "../../../lotties/timeout";
import { useRouter } from "next/router";
// import TimeOutAnimation from "../../Components/TimeOut";
import Lottie from "react-lottie";
import Image from "next/image";
import { useEffect } from "react";
import ScorpionStyles from "../../../styles/cartoon.module.css";
import TitleImage from "../../../public/timeoutimages";

const EndSequence = ({ animation, id }) => {
  const router = useRouter();

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  useEffect(() => {
    console.log(animation);
  }, [animation]);
  useEffect(() => {
    if (+id >= 0 && +id < animationArray.length - 1)
      setTimeout(() => {
        router.push(`/volcano/ending/${+id + 1}`);
      }, 5000);
  }, [id]);

  return (
    <div className={`${ScorpionStyles.controlled} ${ScorpionStyles.hold}`}>
      <Image src={TitleImage[id]} layout="fill" alt="main" />
      <div className={ScorpionStyles.lot}>
        <Lottie options={defaultOptions} height={"100vh"} width={"100vw"} />
      </div>
    </div>
  );
};

EndSequence.getInitialProps = ({ query: { id } }) => {
  const animation = animationArray[id];
  return { animation, id };
};

export default EndSequence;
