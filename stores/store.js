import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import reducers from "./reducers";

const exampleInitialState = {
  lastUpdate: 0,
  light: false,
  count: 0
};

export function initializeStore(initialState = exampleInitialState) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );
}
