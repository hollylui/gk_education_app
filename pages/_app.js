//! From Libaray
import { useState } from "react";

//! From local
import NameContext from "../context/NameContext";

//! Styles
import "../styles/globals.css";

function ExampleApp({ Component, pageProps }) {
  const [name, setName] = useState(null);
  return (
    <NameContext.Provider value={{ name, setName }}>
      <Component {...pageProps} />;
    </NameContext.Provider>
  );
}

export default ExampleApp;
