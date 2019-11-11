import { combineReducers } from "redux";
import currentUser from "./currentUsers";
import errors from "./errors";

const rootReducer = combineReducers({
  currentUser,
   errors
});

export default rootReducer;