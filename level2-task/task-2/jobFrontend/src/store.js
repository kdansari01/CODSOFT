import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { reducers } from "./component/redux/reducers/reducers";

const persistConfig = {
  key: "root",
  whiteList: ["user"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const isDevelopOpen = () => {
  if (process.env.NODE_ENV === "development") {
    return (
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  }
  return null;
};

export const store = createStore(
  persistedReducer,
  compose(applyMiddleware(thunk), isDevelopOpen())
);
export let persistor = persistStore(store);
