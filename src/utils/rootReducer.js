import actions from "./actions";

export const initialState = {
  productsList: [],
  listViewState: false,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_VIEW: {
      return {
        ...state,
        listViewState: action.payload,
      };
    }

    case actions.PRODUCT_LIST: {
      return {
        ...state,
        productsList: action.payload,
      };
    }
    default:
      return state;
  }
}
