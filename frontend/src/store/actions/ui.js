import {
  SET_IS_MAIN_NAV_COLLAPSED,
  SET_IS_THE_RIGHT_SIDEBAR_OPEN,
} from "./actionTypes";


export const setIsMainNavCollapsed = (isMainNavCollapsed) => ({
  type: SET_IS_MAIN_NAV_COLLAPSED,
  isMainNavCollapsed
});

export const setIsTheRightSidebarOpen = (isTheRightSidebarOpen) => ({
  type: SET_IS_THE_RIGHT_SIDEBAR_OPEN,
  isTheRightSidebarOpen
});
