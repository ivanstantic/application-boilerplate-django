import { produce } from "immer";

import {
  SET_IS_MAIN_NAV_COLLAPSED,
  SET_IS_THE_RIGHT_SIDEBAR_OPEN,
} from "../actions/actionTypes";


const initialState = {
  isMainNavCollapsed: true,
  isTheRightSidebarOpen: false,
};

const setIsMainNavCollapsed = (state, action) => {
  return produce(state, draftState => {
    draftState.isMainNavCollapsed = action.isMainNavCollapsed;
    if (action.isMainNavCollapsed === false && state.isTheRightSidebarOpen) {
      draftState.isTheRightSidebarOpen = false;
    }
  });
};

const setIsTheRightSidebarOpen = (state, action) => {
  return produce(state, draftState => {
    draftState.isTheRightSidebarOpen = action.isTheRightSidebarOpen;
    if (action.isTheRightSidebarOpen && state.isMainNavCollapsed === false) {
      draftState.isMainNavCollapsed = true;
    }
  });
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_MAIN_NAV_COLLAPSED: return setIsMainNavCollapsed(state, action);
    case SET_IS_THE_RIGHT_SIDEBAR_OPEN: return setIsTheRightSidebarOpen(state, action);
    default: return state;
  }
};

export default uiReducer;
