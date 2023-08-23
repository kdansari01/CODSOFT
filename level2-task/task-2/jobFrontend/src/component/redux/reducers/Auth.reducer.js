import {
  LOGIN_USER,
  LOG_OUT,
  LOGIN_ERROR,
  SET_NEW_USERS,
  CLEAR_USER_HAVE_ACCOUNT,
} from "../types/types";

const initialState = {
  newUser: [],
  user: null,
  loginError: false,
  userHaveAcount: false,
};

export const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.user,
        loginError: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: true,
      };
    case LOG_OUT:
      return {
        ...state,
        user: null,
      };
    case SET_NEW_USERS:
      return {
        ...state,
        newUser: action.newUser,
        userHaveAcount: true,
      };
    case CLEAR_USER_HAVE_ACCOUNT:
      return {
        ...state,
        CLEAR_USER_HAVE_ACCOUNT: true,
      };
    default:
      return state;
  }
};
