import React, { useState } from 'react';
import Lottie from 'react-lottie';
import animationData from './../lotties/clicks';
import Styles from '../styles/animation_styles/cartoon.module.scss'
import Image from 'next/image';
import point from '../public/images/animations/finger-ga-1.png';
import TitleImage from './../public/clickableImages';


const Clicks = ({Position}) => {
    const [isStopped, setIsStopped] = useState(true);
    

    
  
      const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: animationData[Position],
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice',
        },
      };

    return (
      <>

      <div className={`${Styles.controlled} ${Styles.hold}`}>
      <div className={Styles.actionyy} onClick={() => setIsStopped(false)}></div>
    <div className={Styles.stick}>
       <Image  src={point} alt='stick' />
       </div>
       <Image src={TitleImage[Position]} layout='fill' alt="main" />
       <div className={Styles.lot}>
        <Lottie 
          options={defaultOptions}
          // height={540}
          // width={960}
          isStopped={isStopped}
        />
       </div>
      
      </div>
    
      </>
    );
}

export default Clicks;