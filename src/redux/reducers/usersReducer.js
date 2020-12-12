import { GET_USERS, ADD_USER, FOLLOW_USER, USERS_COUNT } from "../types/types";

const initialState = { users: [], pickedUsers: [], usersCount: 20 };

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    // case FOLLOW_USER:
    //   // return {...state, users: state.users}
    //   return {
    //     ...state,
    //     users: state.users.map((user) => {
    //       if (user.name.first === action.payload) {
    //         user.followed = true;
    //       }
    //       return {user}
    //     }),
    //   };
    case ADD_USER:
      return {
        ...state,
        pickedUsers: state.pickedUsers.concat([action.payload]),
      };
    case USERS_COUNT:
      return { ...state, usersCount: state.usersCount + 20 };
    default:
      return state;
  }
}
