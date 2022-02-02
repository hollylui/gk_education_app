//! From Libaray
import { useState } from "react";

import AgeContext from "../context/AgeContext";
import GameContext from "../context/GameContext";
import MapContent from "../context/MapContent";
import NameContext from "../context/NameContext";
import BranchContext from "../context/BranchContext";

//! Styles
import "../styles/globals.css";

function ExampleApp({ Component, pageProps }) {
  const [age, setAge] = useState(4);
  const [index, setIndex] = useState(1);
  const [data, setData] = useState(null);
  const [expand, setExpand] = useState(false);
  const [name, setName] = useState("Hero");
  const [branch, setBranch] = useState(null);
  const [branchIndex, setBranchIndex] = useState(0);

  return (
    <BranchContext.Provider
      value={{ branch, setBranch, branchIndex, setBranchIndex }}
    >
      <NameContext.Provider value={{ name, setName }}>
        <MapContent.Provider value={{ expand, setExpand }}>
          <GameContext.Provider value={{ index, setIndex, data, setData }}>
            <AgeContext.Provider value={{ age, setAge }}>
              <Component {...pageProps} />
            </AgeContext.Provider>
          </GameContext.Provider>
        </MapContent.Provider>
      </NameContext.Provider>
    </BranchContext.Provider>
  );
}

export default ExampleApp;
