import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import Main from "./views/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import rootReducer from "./utils/rootReducer";

import "./index.scss";

const rootElement = document.getElementById("root");

function App() {
  const store = createStore(rootReducer, composeWithDevTools());
  return (
    <Provider store={store}>
      <Header></Header>
      <Main />
      <Footer />
    </Provider>
  );
}

ReactDOM.render(<App />, rootElement);
