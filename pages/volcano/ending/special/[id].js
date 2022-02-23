<<<<<<< HEAD
import React from "react";
import styles from "../../../../styles/Special.module.scss";

function specialEndingSequence() {
  return (
    <div className={styles.container}>
      <h1>Special Ending</h1>
    </div>
  );
}
=======
// import timeout from "../timeout";
import animationArray from "../../../../lotties/special";
import { useRouter } from "next/router";
// import Special from "../../Components/Special";
import Lottie from "react-lottie";
import Image from "next/image";
import { useEffect } from "react";
import Styles from "./../../../../styles/animation_styles/cartoon.module.scss";
import TitleImage from "./../../../../public/specialEnding.js";

>>>>>>> animation_integration

const SpecialEndingSequence = ({ animation, id }) => {
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
        router.push(`/volcano/ending/special/${+id + 1}`);
      }, 5000);
  }, [id]);

  return (
   
    <div  className={`${Styles.controlled} ${Styles.hold}`}>
      <Image src={TitleImage[id]} layout="fill" alt="main" />
      <div  className={Styles.lot}>
        <Lottie options={defaultOptions} height={540} width={960} />
      </div>
    </div>
    
  );
};

SpecialEndingSequence.getInitialProps = ({ query: { id } }) => {
  const animation = animationArray[id];
  return { animation, id };
};

export default SpecialEndingSequence;
