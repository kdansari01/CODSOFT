import { combineReducers } from "redux";
import { getUserReducer } from "./Auth.reducer";
import { jobReducer } from "./jobs.reducer";
import UserByIdReducer from "./GetUser.reducer";

export const reducers = combineReducers({
  user: getUserReducer,
  singleUser: UserByIdReducer,
  jobs: jobReducer,
});
