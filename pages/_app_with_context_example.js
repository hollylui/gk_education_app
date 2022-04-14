//! Example to setup context

import { useState } from "react";

import "../styles/globals.css";
import ExampleContext from "../context/ExampleContext";

function ExampleApp({ Component, pageProps }) {
  const [exampleVar, setExampleVar] = useState("example");
  return (
    <ExampleContext.Provider value={{ exampleVar, setExampleVar }}>
      <Component {...pageProps} />;
    </ExampleContext.Provider>
  );
}

export default ExampleApp;
