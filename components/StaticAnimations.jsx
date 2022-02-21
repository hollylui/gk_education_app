import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "./../lotties/staticAnimation";
import Styles from "../styles/animation_styles/cartoon.module.scss";
import Image from "next/image";
import Container from "./../styles/BranchContent.module.scss";

import TitleImage from "./../public/staticImages";

const StaticAnimations = ({ Position }) => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData[Position],
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const imageStyle = {
    position: "relative",
    width: "100%",
    paddingBottom: "56.3%",
  };

  return (
    <div className={Styles.controlled}>
      <div style={imageStyle}>
        <Image
          src={TitleImage[Position]}
          alt="main"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={Styles.lot}>
        <Lottie
          options={defaultOptions}
          // height={540}
          // width={960}
        />
      </div>
    </div>
  );
};

export default StaticAnimations;
