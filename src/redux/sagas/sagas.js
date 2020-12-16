import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_USERS, GET_USERS } from "../types/types";
import { showLoader, hideLoader } from "../actions/actions";

export function* sagaWatcher() {
  yield takeEvery(REQUEST_USERS, sagaWorker);
}

function* sagaWorker() {
  yield put(showLoader());
  const payload = yield call(fetchUsers);
  yield put({ type: GET_USERS, payload });
  yield put(hideLoader());
}

async function fetchUsers() {
  const response = await fetch(`https://randomuser.me/api/?results=20`);
  const json = await response.json();
  return json.results;
}
