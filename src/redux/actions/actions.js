import {
  ADD_USER,
  FOLLOW_USER,
  GET_USERS,
  USERS_COUNT,
  SHOW_LOADER,
  HIDE_LOADER,
  SEARCH_QUERY,
} from "../types/types";

export function addUser(user) {
  return {
    type: ADD_USER,
    payload: user,
  };
}

export function followUser(name) {
  return {
    type: FOLLOW_USER,
    payload: name,
  };
}

export function showLoader(user) {
  return {
    type: SHOW_LOADER,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function getUsers() {
  return async (dispatch, getState) => {
    dispatch(showLoader());
    const count = getState().users.usersCount;
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const json = await response.json();
    dispatch({
      type: GET_USERS,
      payload: json.results,
    });
    dispatch(hideLoader());
  };
}

export function loadMoreUsers() {
  return {
    type: USERS_COUNT,
  };
}

export function search(query) {
  return {
    type: SEARCH_QUERY,
    payload: query,
  };
}
