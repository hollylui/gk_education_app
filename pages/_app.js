//! From Libaray
import { useState } from "react";

//! From Local
import AgeContext from "../context/AgeContext";

//! Styles
import "../styles/globals.css";

function ExampleApp({ Component, pageProps }) {
  const [age, setAge] = useState(null);
  return (
    <AgeContext.Provider value={{ age, setAge }}>
      <Component {...pageProps} />
    </AgeContext.Provider>
  );
}

export default ExampleApp;
