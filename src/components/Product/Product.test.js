import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Product from "./Product.jsx";

const mockStore = configureStore([]);

describe("Product", () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      productsList: [],
      listViewState: false,
    });

    component = renderer.create(
      <Provider store={store}>
        <Product />
      </Provider>
    );
  });

  it("Product when listViewState is true should be rendered", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
