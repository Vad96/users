import { ADD_USER, GET_USERS, USERS_COUNT } from "../types/types";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function getUsers(count) {
  return async (dispatch) => {
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const json = await response.json();
    dispatch({
      type: GET_USERS,
      payload: json,
    });
  };
}

export function loadMoreUsers() {
  return {
    type: USERS_COUNT,
  };
}
