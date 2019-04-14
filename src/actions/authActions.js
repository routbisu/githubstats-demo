import { LOGIN, LOGOUT, LOGIN_FAILED } from "../actions/types";
import axios from "axios";

// user login using github API
export const login = username => dispatch => {
  axios
    .get(`https://api.github.com/users/${username}`)
    .then(res => {
      // Make a callback to the parent with user details from api
      dispatch({
        type: LOGIN,
        payload: res.data
      });
    })
    .catch(err => {
      // Show a error message for failed login
      dispatch({
        type: LOGIN_FAILED
      });
    });
};

// User logout
export const logout = username => dispatch => {
  dispatch({
    type: LOGOUT
  });
};
