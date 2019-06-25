import { combineReducers } from "redux";

import header from "./header";
import auth from "./auth";

// Combine all the reducers
const rootReducer = combineReducers({
  header,
	auth
});

export default rootReducer;
