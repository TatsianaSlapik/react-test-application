import React from "react";
import renderer from "react-test-renderer";
import "babel-polyfill";
import Popup from "./Popup.jsx";
import { Provider } from "react-redux";

import configureStore from "redux-mock-store";
const mockStore = configureStore([]);
describe("Popup", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      showAddToCartPopup: true,
    });
    component = renderer.create(
      <Provider store={store}>
        <Popup />
      </Provider>
    );
  });

  it("Popup when showPopup is true should be rendered", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
