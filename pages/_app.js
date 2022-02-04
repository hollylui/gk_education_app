//! From Libaray
import { useState } from "react";

//! From local
import AgeContext from "../context/AgeContext";
import GameContext from "../context/GameContext";
import MapContent from "../context/MapContent";
import NameContext from "../context/NameContext";
import BranchContext from "../context/BranchContext";

//! Styles
import "../styles/globals.css";

function App({ Component, pageProps }) {
  //AgeContext
  const [age, setAge] = useState(4);

  //MapContext
  const [expand, setExpand] = useState(false);

  //NameContext
  const [name, setName] = useState("Hero");

  //BranchContext
  const [branch, setBranch] = useState(null);
  const [branchIndex, setBranchIndex] = useState(0);

  // GameContext
  const [currGameId, setCurrGameId] = useState({});
  const [gameIds, setGameIds] = useState("");

  return (
    <BranchContext.Provider
      value={{ branch, setBranch, branchIndex, setBranchIndex }}
    >
      <NameContext.Provider value={{ name, setName }}>
        <MapContent.Provider value={{ expand, setExpand }}>
          <GameContext.Provider
            value={{
              currGameId,
              setCurrGameId,
              gameIds,
              setGameIds,
            }}
          >
            <AgeContext.Provider value={{ age, setAge }}>
              <Component {...pageProps} />
            </AgeContext.Provider>
          </GameContext.Provider>
        </MapContent.Provider>
      </NameContext.Provider>
    </BranchContext.Provider>
  );
}

export default App;
