// ! From Libaray
import { useState } from "react";

//! From local
import AgeContext from "../context/AgeContext";
import GameContext from "../context/GameContext";
import MapContext from "../context/MapContext";
import NameContext from "../context/NameContext";
import BranchContext from "../context/BranchContext";
import MusicContext from "../context/MusicContext";

//! Styles
import "../styles/globals.css";
import BackpackProvider from "../context/BackpackProvider";
import BranchFooterContext from "../context/BranchFooterContext";

function App({ Component, pageProps }) {
  //AgeContext
  const [age, setAge] = useState(4);

  //MapContext
  const [expand, setExpand] = useState(false);
  const [progress, setProgress] = useState(0);
  const [largeMapProgress, setLargeMapProgress] = useState(0);

  //NameContext
  const [name, setName] = useState("Hero");

  //BranchContext
  const [branch, setBranch] = useState(null);
  const [branchIndex, setBranchIndex] = useState(0);
  const [leftPath, setLeftPath] = useState(null);
  const [rightPath, setRightPath] = useState(null);
  const [animalsList, setAnimalsList] = useState([]);

  //BranchFooter
  const [next, setNext] = useState(false);

  // GameContext
  const [currGameId, setCurrGameId] = useState({});
  const [gameIds, setGameIds] = useState("");

  //MusicContext
  const [audioIndex, setAudioIndex] = useState(0);
  const [music, setMusic] = useState(true);
  const [audio, setAudio] = useState(true);
  const [stage, setStage] = useState("audio");
  const [branchAudioIndex, setBranchAudioIndex] = useState(0);

  return (
    <BranchFooterContext.Provider value={{ next, setNext }}>
      <MusicContext.Provider
        value={{
          audioIndex,
          setAudioIndex,
          music,
          setMusic,
          audio,
          setAudio,
          stage,
          setStage,
          branchAudioIndex,
          setBranchAudioIndex,
        }}
      >
        <BranchContext.Provider
          value={{
            branch,
            setBranch,
            branchIndex,
            setBranchIndex,
            leftPath,
            setLeftPath,
            rightPath,
            setRightPath,
            animalsList,
            setAnimalsList,
          }}
        >
          <NameContext.Provider value={{ name, setName }}>
            <MapContext.Provider
              value={{
                expand,
                setExpand,
                progress,
                setProgress,
                largeMapProgress,
                setLargeMapProgress,
              }}
            >
              <GameContext.Provider
                value={{
                  currGameId,
                  setCurrGameId,
                  gameIds,
                  setGameIds,
                }}
              >
                <AgeContext.Provider value={{ age, setAge }}>
                  <BackpackProvider>
                    <Component {...pageProps} />
                  </BackpackProvider>
                </AgeContext.Provider>
              </GameContext.Provider>
            </MapContext.Provider>
          </NameContext.Provider>
        </BranchContext.Provider>
      </MusicContext.Provider>
    </BranchFooterContext.Provider>
  );
}

export default App;
