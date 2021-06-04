import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Filters from "./Filters.jsx";
const mockStore = configureStore([]);

describe("Filters", () => {
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      productsList: [],
      listViewState: false,
    });
    component = renderer.create(
      <Provider store={store}>
        <Filters />
      </Provider>
    );
  });

  it("Filters", () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
});
