import { login, logout, register } from "../../Api/Api";
import {
  LOG_OUT,
  LOGIN_ERROR,
  LOGIN_USER,
  SET_NEW_USERS,
  CLEAR_USER_HAVE_ACCOUNT,
} from "../types/types";
import { Tosted } from "../../google.auth/Tosted";
import { getUserByIdAction } from "./getUser.action";

export const setNewUsers = (user) => ({
  type: SET_NEW_USERS,
  user,
});

export const LoginUser = (user) => ({
  type: LOGIN_USER,
  user,
});
export const logoutUser = () => ({
  type: LOG_OUT,
});

export const UserLogout = () => async (dispatch) => {
  try {
    await logout();
    dispatch(logoutUser());
    Tosted("success", "Logged out successfully");
  } catch (error) {
    console.error("Logout Error:", error);
  }
};

export const clearUserHaveAcount = () => ({
  type: CLEAR_USER_HAVE_ACCOUNT,
});

export const loginUser = (setLoading, userData) => async (dispatch) => {
  try {
    setLoading(true);
    const response = await login(userData);
    dispatch(LoginUser(response.data));
    setLoading(false);
    Tosted("success", "Login successfully");
    // localStorage.setItem("token", response?.data?.token);
    dispatch(getUserByIdAction(response?.data?.token));
  } catch (error) {
    if (error.response && error.response.status === 401) {
      dispatch({ type: LOGIN_ERROR });
      Tosted("error", "Email or password is incorrect");
    }
    console.error("Login Error:", error);
  }
};

export const newUsers =
  (navigate, setLoading, userData) => async (dispatch) => {
    try {
      setLoading(true);
      const response = await register(userData);
      if (response.status === 201) {
        Tosted("success", "Registration successfully");
        navigate("/");
      }
      setLoading(false);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        dispatch({ type: LOGIN_ERROR });
        Tosted(
          "error",
          "Email or UserName Already used, please try another email or username"
        );
      }
      setLoading(false);
      console.error("Register Error:", error);
    }
  };
