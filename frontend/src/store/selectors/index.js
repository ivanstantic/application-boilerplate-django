import * as FromUI from "./ui";
import {
  UI_REDUCER,
} from "src/store/reducers";


// UI
export const getIsMainNavCollapsed = state => FromUI.getIsMainNavCollapsed(state[UI_REDUCER]);
export const getIsTheRightSidebarOpen = state => FromUI.getIsTheRightSidebarOpen(state[UI_REDUCER]);
