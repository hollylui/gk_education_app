import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../lotties/volcano_title_ani.json';
import { useRouter } from "next/router";
import styles from '../styles/animation_styles/Controlled.module.scss'


//animation Controlls

const ControlledLottie = () => {
    const [isStopped, setIsStopped] = useState(false);
    const [isPaused, setIsPaused] = useState(false);


    //useRouter to set a timeout for the animation
    const router = useRouter();
    
    useEffect(() => {
        setTimeout(() => {
            
            router.push('/transition');
        }, 5000)
    }, [])

    //end of useRouter

    const buttonStyle = {
        display: 'inline-block',
        margin: '10px auto',
        marginRight: '10px',
        border: 'none',
        color: 'white',
        backgroundColor: '#647DFF',
        borderRadius: '2px',
        fontSize: '15px',
      };
  
      const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
      <div className={styles.controlled}>
        
        <Lottie
          options={defaultOptions}
          height={540}
          width={960}
          isStopped={isStopped}
          isPaused={isPaused}
        />
        {/* <button
          style={buttonStyle}
          onClick={() => setIsStopped(true)}
        >
          Stop
        </button>
        <button
          style={buttonStyle}
          onClick={() => {
             setIsStopped(false);
             setIsPaused(false);
          }}
        >
          Play
        </button>
        <button
          style={buttonStyle}
          onClick={() => setIsPaused(!isPaused)}
        >
          Pause
        </button> */}
      </div>
    );
}

export default ControlledLottie;