import { GET_USERS, ADD_USER } from "../types/types";

const initialState = { users: [], pickedUsers: [] };

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {...state, users: action.payload};
    case ADD_USER:
      return {
        ...state,
        pickedUsers: state.pickedUsers.concat([action.payload]),
      };
    default:
      return state;
  }
}
