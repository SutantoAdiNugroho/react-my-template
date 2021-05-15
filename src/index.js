import React from "react";
import ReactDOM from "react-dom";

import "@babel/polyfill";

const HelloWorld = () => {
  return <h1>Hello World</h1>;
};

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
  </React.StrictMode>,
  document.getElementById("root")
);
