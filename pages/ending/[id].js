import timeout from "../timeout";
import animationArray from "../../lotties/timeout";
import { useRouter } from "next/router";
import TimeOutAnimation from "../../Components/TimeOut";
import Lottie from "react-lottie";
import Image from "next/image";
import { useEffect } from "react";
import Styles from "./../../styles/animation_styles/cartoon.module.scss";
import TitleImage from "./../../public/timeoutimages";

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
    if (+id >= 0 && +id < animationArray.length - 1)
      setTimeout(() => {
        router.push(`/ending/${+id + 1}`);
      }, 5000);
  }, [id]);

  return (
    <div className={`${Styles.controlled} ${Styles.hold}`}>
      <Image src={TitleImage[id]} layout="fill" alt="main" />
      <div className={Styles.lot}>
        <Lottie options={defaultOptions} height={540} width={960} />
      </div>
    </div>
  );
};

EndSequence.getInitialProps = ({ query: { id } }) => {
  const animation = animationArray[id];
  return { animation, id };
};

export default EndSequence;
