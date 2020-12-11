import {
  ADD_USER,
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

export function getUsers(count) {
  return async (dispatch) => {
    dispatch(showLoader());
    const response = await fetch(`https://randomuser.me/api/?results=${count}`);
    const json = await response.json();
    dispatch({
      type: GET_USERS,
      payload: json,
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
