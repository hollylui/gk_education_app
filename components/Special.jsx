import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import special from "../lotties/special.js";
import { useRouter } from "next/router";
import Styles from "./../styles/animation_styles/cartoon.module.scss";
import Image from "next/image";
import TitleImage from "./../public/specialEnding";

//animation Controlls

const Special = ({ Position }) => {
  //useRouter to set a timeout for the animation
  const router = useRouter();

  useEffect(() => {
    console.log(TitleImage);
    console.log(Position);
    setTimeout(() => {
      router.push("/volcano/ending/special/0");
    }, 5000);
  }, []);

  //end of useRouter

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: special[Position],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={`${Styles.controlled} ${Styles.hold}`}>
      <Image src={TitleImage[Position]} layout="fill" alt="main" />
      <div className={Styles.lot}>
        <Lottie options={defaultOptions} height={540} width={960} />
      </div>
    </div>
  );
};

Special.getInitialProps = ({ query: { id } }) => {
  const animation = special[id];

  return { animation };
};

export default Special;
