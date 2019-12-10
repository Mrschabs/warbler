import { apiCall } from "../../services/api";
import {addError} from "./errors";
import {LOAD_MESSAGES, REMOVE_MESSAGES} from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const fetchMessages = () => {
  return dispatch => {
    return apiCall("get", "/api/messages")
      .then(res => {
        dispatch(loadMessages(res));
      })
      .catch(err => {
        dispatch(addError(err.message));
      });
    };
  };

  export const postNewMessage = text => (dispatch, getState) => {
    let { currentUser } = getState()
    const id = currentUser.user.id;
    return apiCall("post", `/api/user/${id}/messages`, { text })
      .then(res => {})
      .catch(err => {
        dispatch(addError(err.message));
      });
  }; 

