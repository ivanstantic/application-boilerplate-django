import { combineReducers } from "redux";

import ui from "./ui";

export const UI_REDUCER = "ui";

export default combineReducers({
  [UI_REDUCER]: ui,
});
