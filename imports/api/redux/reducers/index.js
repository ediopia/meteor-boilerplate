import { combineReducers } from "redux";

import header from "./header";

// Combine all the reducers
const rootReducer = combineReducers({
  header
});

export default rootReducer;
