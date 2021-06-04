import actions from "./actions";

export const initialState = {
  productsList: [],
  listViewState: false,
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_VIEW: {
      localStorage.setItem("toggleList", action.payload);
      return {
        ...state,
        listViewState: action.payload,
      };
    }
    default:
      return state;
  }
}
