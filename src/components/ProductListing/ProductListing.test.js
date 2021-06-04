import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import ProductListing from "./ProductListing.jsx";
const mockStore = configureStore([]);

describe("ProductListing", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      productsList: [],
      listViewState: false,
    });
    component = renderer.create(
      <Provider store={store}>
        <ProductListing />
      </Provider>
    );
  });

  it("Product Listing when listViewState is true should be rendered", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
