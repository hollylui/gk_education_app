import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './../lotties/page_not_found.json';
import Styles from '../styles/animation_styles/cartoon.module.scss'
import Image from 'next/image';

import TitleImage from './../public/images/animations/insidecave.png';


const NotFound = () => {
    
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            // router.go()
            router.push('/');
        }, 5000)
    }, []);

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
    };
    return ( 
        <div className={`${Styles.controlled} ${Styles.hold}`}>
      <Image src={TitleImage} layout="fill" alt="main" />
      <div className={Styles.lot}>
        <Lottie options={defaultOptions} height={540} width={960} />
      </div>
    </div>
     );
}
 
export default NotFound;