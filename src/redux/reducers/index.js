import { combineReducers } from "redux";
import { usersReducer } from "./usersReducer";
import { loaderReducer } from "./loaderReducer";
import { searchReducer } from "./searchReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  loading: loaderReducer,
  text: searchReducer
});

export default rootReducer;
