import actions from "./actions";

export const initialState = {
  productsList: [],
  listViewState: "grid",
};
export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case actions.CHANGE_VIEW: {
      return {
        ...state,
        listViewState: action.payload,
      };
    }
  }
}
