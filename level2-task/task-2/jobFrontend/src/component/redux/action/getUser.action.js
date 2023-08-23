import { getCurrentUser } from "../../Api/Api";
import { GET_USER_FAILURE, GET_USER_SUCCESS } from "../types/types";

export const getUserSuccess = (user) => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  error,
});

export const getUserByIdAction = (token) => async (dispatch) => {
  try {
    const response = await getCurrentUser(token);
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailure(error.message));
  }
};
