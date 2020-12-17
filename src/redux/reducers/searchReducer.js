import { SEARCH_QUERY } from "../types/types";

const initialState = { text: "" };

export const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_QUERY:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};
