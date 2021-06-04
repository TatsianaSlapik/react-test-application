import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./utils/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.scss";

import Main from "./views/Main/Main";
import Header from "./components/Header/Header";

const rootElement = document.getElementById("root");

function App() {
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <Header></Header>
      <Main />
    </Provider>
  );
}

ReactDOM.render(<App />, rootElement);
