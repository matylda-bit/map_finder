import React from "react";
import ReactDOM from "react-dom";

import Map from "./components/map/";
import KeyFeatures from "./components/keyFeatures/";
import "./styles.css";

function App() {
  const features = [
    "King Place, 90 York Way, London N1 9GU",
    "www.theguardian.com",
    "tel. 020 3353 2000"
  ];
  return (
    <div className="App">
      <h1>The Guardian Finder</h1>
      <KeyFeatures features={features} />
      <Map />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
