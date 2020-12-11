import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { loaderReducer } from "./loaderReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  loading: loaderReducer,
});

export default rootReducer;
