//! From library
import Image from "next/image";

import { useState, useEffect } from "react";

//! From local

//! Images
import musicOn from "../assets/images/volcano/music_on.png";
import musicOff from "../assets/images/volcano/music_off.png";
import soundOn from "../assets/images/volcano/sound_effects_on.png";
import soundOff from "../assets/images/volcano/sound_effects_off.png";
import menuImg from "../assets/images/volcano/menu_img.png";

//! Audio
import bgMusic from "../assets/audios/volcano/cumbia_city_an_jone.mp3";
import audio0 from "../assets/audios/volcano/welcome_audio.mp3";

//! Styles
import styles from "../styles/Navbar.module.scss";

// ----------------------------------------------------

let bgMusicItem, audio;

export default function Navbar() {
  const [music, setMusic] = useState(true);
  const [sound, setSound] = useState(true);

  //   handler ------------------------------------------
  const musicHandler = () => {
    setMusic(!music);
    music ? bgMusicItem.pause() : bgMusicItem.play();
  };

  const soundHandler = () => {
    setSound(!sound);
    sound ? audio.pause() : audio.play();
  };

  //   useEffect ------------------------------------------
  useEffect(() => {
    bgMusicItem = document.getElementById("bgMusic");
    bgMusicItem.volume = 0.05;
    bgMusicItem.play();

    audio = document.getElementById("audio");
    audio.volume = 1;
    audio.play();
  }, []);

  return (
    <nav className={styles.container}>
      {/* background music */}
      <audio loop id="bgMusic">
        <source src={bgMusic} />
      </audio>

      {/* audio */}
      <audio id="audio">
        <source src={audio0} />
      </audio>

      <div className={styles.soundControl}>
        {/* music button */}
        <div
          onClick={musicHandler}
          className={`${styles.icon} ${styles.music}`}
        >
          {music ? (
            <Image src={musicOn} alt="music on" />
          ) : (
            <Image src={musicOff} alt="music off" />
          )}
        </div>

        {/* sound or audio button */}
        <div onClick={soundHandler} className={styles.icon}>
          {sound ? (
            <Image src={soundOn} alt="sound on" />
          ) : (
            <Image src={soundOff} alt="sound off" />
          )}
        </div>
      </div>

      <div className={styles.menu}>
        <Image src={menuImg} alt="menu" />
      </div>
    </nav>
  );
}
