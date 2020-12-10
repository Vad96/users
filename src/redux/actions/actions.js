import { ADD_USER, GET_USERS } from "../types/types";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function getUsers() {
  return async (dispatch) => {
    const response = await fetch("https://randomuser.me/api/?results=20");
    const json = await response.json();
    dispatch({
      type: GET_USERS,
      payload: json,
    });
  };
}