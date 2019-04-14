import { LOGIN, LOGOUT, LOGIN_FAILED } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  loginFailed: false,
  userData: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    // Show list of top 10 movies
    case LOGIN:
      return {
        ...state,
        userData: action.payload,
        isLoggedIn: true
      };

    case LOGOUT:
      return { ...state, isLoggedIn: false, userData: null };

    case LOGIN_FAILED:
      return { ...state, loginFailed: true };

    default:
      return state;
  }
}
