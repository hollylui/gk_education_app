import React, { useState, useEffect } from "react";
import Lottie from "react-lottie";
import timeout from "../lotties/timeout";
import { useRouter } from "next/router";
import Styles from "./../styles/animation_styles/cartoon.module.scss";
import Image from "next/image";
import TitleImage from "./../public/timeoutimages";

//animation Controlls

const TimeOutAnimation = ({ Position }) => {
  //useRouter to set a timeout for the animation
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/ending/0");
    }, 5000);
  }, []);

  //end of useRouter

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: timeout[Position],
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

TimeOutAnimation.getInitialProps = ({ query: { id } }) => {
  const animation = timeout[id];
  // const { data } = await axios.get(`http://localhost:3000/api/notes/${id}`);
  return { animation };
};

export default TimeOutAnimation;
