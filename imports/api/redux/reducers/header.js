import produce from "immer";
import {
  TOGGLE_HEADER_STATUS,
  TOGGLE_SIDEBAR_STATUS
} from "../consts/actionTypes";

const header = (state = { isActive: false, isSidebarActive: false }, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_HEADER_STATUS:
        draft.isActive = action.isActive;
        break;
      case TOGGLE_SIDEBAR_STATUS:
        draft.isSidebarActive = action.isActive;
        break;
    }
  });

export default header;
