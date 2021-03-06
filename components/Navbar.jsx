//! From library
import Image from "next/image";

import { useState, useContext, useEffect } from "react";

//! From local
import MusicContext from "../context/MusicContext";
import BranchContext from "../context/BranchContext";

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
import { branch1_1 } from "../assets/audios/volcano/branch1_1/branch1_1_list";
import { branch1_2 } from "../assets/audios/volcano/branch1_2/branch1_2_list";

//! Styles
import styles from "../styles/Navbar.module.scss";

// ----------------------------------------------------

let bgMusicItem, audioItem, branchItem;

export default function Navbar() {
  const {
    audioIndex,
    setAudioIndex,
    music,
    setMusic,
    stage,
    branchAudioIndex,
  } = useContext(MusicContext);
  const { branchIndex, setBranchIndex } = useContext(BranchContext);
  const [audio, setAudio] = useState(true);

  //   handler ------------------------------------------
  const musicHandler = () => {
    setMusic(!music);
    sessionStorage.setItem("music", !music);
    music == "true" ? bgMusicItem.play() : bgMusicItem.pause();
  };

  const soundHandler = () => {
    setAudio(!audio);
    audio ? audioItem.pause() : audioItem.play();
  };

  //   useEffect ------------------------------------------
  useEffect(() => {
    bgMusicItem = document.getElementById("bgMusic");
    bgMusicItem.volume = 0.05;

    const musicStatus = sessionStorage.getItem("music");

    if (musicStatus == "true") {
      setMusic(true);
      bgMusicItem.play();
    } else {
      setMusic(false);
      bgMusicItem.pause();
    }
  }, [music]);

  useEffect(() => {
    // get data from sessionStorate for reload
    if (stage === "audio") {
      const audioIndexNum = sessionStorage.getItem("audioIndex");
      setAudioIndex(audioIndexNum);

      audioItem = document.getElementById("audio");
      audioItem.volume = 1;
      audio
        ? audioItem.play().catch((e) => {
            console.log(e);
          })
        : audioItem.pause();
    }
  }, [audioIndex]);

  useEffect(() => {
    // get data from sessionStorate for reload
    if (stage === "branch1_1") {
      branchItem = document.getElementById("branch");
      branchItem.volume = 1;
      audio ? branchItem.play() : branchItem.pause();
    }

    if (stage === "branch1_2") {
      branchItem = document.getElementById("branch");
      branchItem.volume = 1;
      audio ? branchItem.play() : branchItem.pause();
    }
  }, [branchAudioIndex]);

  return (
    <nav className={styles.container}>
      {/* background music */}
      <audio loop id="bgMusic" src={bgMusic} />

      {/* audio */}

      {stage === "audio" && branchIndex <= 11 && (
        <audio id="audio" src={audios[audioIndex]} />
      )}

      {stage === "branch1_1" && (
        <audio id="branch" src={branch1_1[branchAudioIndex]} />
      )}

      {stage === "branch1_2" && (
        <audio id="branch" src={branch1_2[branchAudioIndex]} />
      )}

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
