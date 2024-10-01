import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevToolsDevelopmentOnly } from "@redux-devtools/extension";

import mainReducer from "./reducers";


const store = createStore(
  mainReducer,
  composeWithDevToolsDevelopmentOnly(applyMiddleware(thunk))
);

export default store;
