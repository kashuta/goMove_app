import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { initState } from "./initState";
import { rootReducer } from "./reducers/rootReducers";
import { composeWithDevTools } from '@redux-devtools/extension';

export const store = createStore(
  rootReducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);
