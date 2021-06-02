import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Main from "./views/Main/Main";
import Header from "./components/Header/Header";

const rootElement = document.getElementById("root");

function App() {
  return (
    <>
      <Header></Header>
      <Main />
    </>
  );
}

ReactDOM.render(<App />, rootElement);
