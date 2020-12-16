import {
  ADD_USER,
  REQUEST_USERS,
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
  return {
    type: REQUEST_USERS,
  };
}

export function search(query) {
  return {
    type: SEARCH_QUERY,
    payload: query,
  };
}
