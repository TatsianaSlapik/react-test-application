import actions from "./actions";

export const initialState = {
  productsList: [],
  listViewState: false,
  showAddToCartPopup: false,
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
    case actions.SHOW_ADD_TO_CART_POPUP: {
      return {
        ...state,
        showAddToCartPopup: action.payload,
      };
    }
    default:
      return state;
  }
}
