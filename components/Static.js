import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './../lotties/staticAnimation';
import Styles from '../styles/animation_styles/cartoon.module.scss'
import Image from 'next/image';

import TitleImage from './../public/staticImages';


const StaticAnimations = ({Position}) => {
    
    

    
  
      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData[Position],
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
      <>

      <div className={`${Styles.controlled} ${Styles.hold}`}>
      
    
       <Image src={TitleImage[Position]} layout='fill' alt="main" />
       <div className={Styles.lot}>
        <Lottie 
          options={defaultOptions}
          // height={540}
          // width={960}
          
        />
       </div>
      
      </div>
    
      </>
    );
}

export default StaticAnimations;