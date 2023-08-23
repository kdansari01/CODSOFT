import { GET_USER_FAILURE, GET_USER_SUCCESS } from "../types/types";

const initialState = {
  singleUserData: null,
  error: null,
};

const UserByIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        ...state,
        singleUserData: action.payload,
        error: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        singleUserData: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default UserByIdReducer;
