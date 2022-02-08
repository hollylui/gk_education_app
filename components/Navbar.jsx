//! From library
import Image from "next/image";

import { useState, useContext, useEffect } from "react";

//! From local
import MusicContext from "../context/MusicContext";

//! Images
import musicOn from "../assets/images/volcano/music_on.png";
import musicOff from "../assets/images/volcano/music_off.png";
import soundOn from "../assets/images/volcano/sound_effects_on.png";
import soundOff from "../assets/images/volcano/sound_effects_off.png";
import menuImg from "../assets/images/volcano/menu_img.png";

//! Audio
//audio setup from Microsft Azure (Voice: Ana(Neural), Speaking speak = 0.72 and Pitch = 1.20)
import bgMusic from "../assets/audios/volcano/cumbia_city_an_jone.mp3";
import { audios } from "../assets/audios/volcano/audioList";

//! Styles
import styles from "../styles/Navbar.module.scss";

// ----------------------------------------------------

let bgMusicItem, audioItem;

export default function Navbar() {
  const { audioIndex, setAudioIndex } = useContext(MusicContext);
  const [music, setMusic] = useState(true);
  const [audio, setAudio] = useState(true);

  //   handler ------------------------------------------
  const musicHandler = () => {
    setMusic(!music);
    music ? bgMusicItem.pause() : bgMusicItem.play();
  };

  const soundHandler = () => {
    setAudio(!audio);
    audio ? audioItem.pause() : audioItem.play();
  };

  //   useEffect ------------------------------------------
  useEffect(() => {
    bgMusicItem = document.getElementById("bgMusic");
    bgMusicItem.volume = 0.01;
    bgMusicItem.play();
  }, []);

  useEffect(() => {
    const audioIndexNum = sessionStorage.getItem("audioIndex");
    setAudioIndex(audioIndexNum);
    audioItem = document.getElementById("audio");
    audioItem.volume = 1;
    audio ? audioItem.play() : audioItem.pause();
  }, [audioIndex]);

  return (
    <nav className={styles.container}>
      {/* background music */}
      <audio loop id="bgMusic">
        <source src={bgMusic} />
      </audio>

      {/* audio */}
      <audio id="audio" source src={audios[audioIndex]} />

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
          {audio ? (
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
