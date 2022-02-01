//! From Libaray
import { useState } from "react";

import AgeContext from "../context/AgeContext";

function ExampleApp({ Component, pageProps }) {
  const [age, setAge] = useState(null);
  return (
    <AgeContext.Provider value={{ age, setAge }}>
      <Component {...pageProps} />
    </AgeContext.Provider>
  );
}

export default ExampleApp;
