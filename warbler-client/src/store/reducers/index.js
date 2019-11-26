import { combineReducers } from "redux";
import currentUser from "./currentUsers";
import errors from "./errors";
import messages from "./messages";

const rootReducer = combineReducers({
  currentUser,
   errors,
   messages
});

export default rootReducer;