import { GET_USERS, ADD_USER, FOLLOW_USER } from "../types/types";
import getTime from '../../helpers/getTime';

const initialState = { users: [], pickedUsers: [] };

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: [...state.users, ...action.payload] };
    case FOLLOW_USER:
        const followedUser = state.users.find((user) => user.name.first === action.payload);
        followedUser.followed = true;
        followedUser.addedTime = getTime()
        return { ...state, users: state.users };
    case ADD_USER:
      return {
        ...state,
        pickedUsers: state.pickedUsers.concat([action.payload]),
      };
    default:
      return state;
  }
}
